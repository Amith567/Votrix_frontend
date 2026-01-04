import { useEffect, useState } from "react";
import axios from "axios";

const ElectionPage = () => {
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);
  const [election, setElection] = useState(null);
  const [candidates, setCandidates] = useState([]);

  const [electionForm, setElectionForm] = useState({
    name: "",
    panchayat: "",
    start_time: "",
    end_time: ""
  });

  const [candidateForm, setCandidateForm] = useState({
    name: "",
    party: "",
    symbol: ""
  });

  useEffect(() => {
    fetchElectionStatus();
  }, []);

  const fetchElectionStatus = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/elections/status/"
      );

      if (res.data.exists) {
        setExists(true);
        setElection(res.data.election);
        setCandidates(res.data.candidates);
        setElectionForm(res.data.election);
      } else {
        setExists(false);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const createElection = async () => {
    await axios.post(
      "http://127.0.0.1:8000/api/elections/create/",
      electionForm
    );
    fetchElectionStatus();
  };

  const updateElection = async () => {
    await axios.put(
      `http://127.0.0.1:8000/api/elections/update/${election.id}/`,
      electionForm
    );
    alert("Election updated");
  };

  const addCandidate = async () => {
    await axios.post(
      `http://127.0.0.1:8000/api/elections/candidate/add/${election.id}/`,
      candidateForm
    );
    setCandidateForm({ name: "", party: "", symbol: "" });
    fetchElectionStatus();
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Election Management</h1>

      {/* CREATE ELECTION */}
      {!exists && (
        <div className="bg-white p-4 shadow rounded">
          <h2 className="font-semibold mb-3">Create Election</h2>

          <input
            className="input"
            placeholder="Election Name"
            onChange={e =>
              setElectionForm({ ...electionForm, name: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Panchayat"
            onChange={e =>
              setElectionForm({ ...electionForm, panchayat: e.target.value })
            }
          />

          <input
            type="datetime-local"
            className="input"
            onChange={e =>
              setElectionForm({ ...electionForm, start_time: e.target.value })
            }
          />

          <input
            type="datetime-local"
            className="input"
            onChange={e =>
              setElectionForm({ ...electionForm, end_time: e.target.value })
            }
          />

          <button className="btn" onClick={createElection}>
            Create Election
          </button>
        </div>
      )}

      {/* EDIT ELECTION + CANDIDATES */}
      {exists && election && (
        <>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold mb-3">Edit Election</h2>

            <input
              className="input"
              value={electionForm.name}
              onChange={e =>
                setElectionForm({ ...electionForm, name: e.target.value })
              }
            />

            <input
              type="datetime-local"
              className="input"
              value={electionForm.start_time}
              onChange={e =>
                setElectionForm({
                  ...electionForm,
                  start_time: e.target.value
                })
              }
            />

            <input
              type="datetime-local"
              className="input"
              value={electionForm.end_time}
              onChange={e =>
                setElectionForm({
                  ...electionForm,
                  end_time: e.target.value
                })
              }
            />

            <button className="btn" onClick={updateElection}>
              Update Election
            </button>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h2 className="font-semibold mb-3">Candidates</h2>

            <ul className="mb-4">
              {candidates.map(c => (
                <li key={c.id} className="border-b py-1">
                  {c.name} — {c.party || "Independent"} ({c.symbol})
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-2">Add Candidate</h3>

            <input
              className="input"
              placeholder="Candidate Name"
              value={candidateForm.name}
              onChange={e =>
                setCandidateForm({ ...candidateForm, name: e.target.value })
              }
            />

            <input
              className="input"
              placeholder="Party"
              value={candidateForm.party}
              onChange={e =>
                setCandidateForm({ ...candidateForm, party: e.target.value })
              }
            />

            <input
              className="input"
              placeholder="Symbol (max 3 chars)"
              value={candidateForm.symbol}
              onChange={e =>
                setCandidateForm({ ...candidateForm, symbol: e.target.value })
              }
            />

            <button className="btn" onClick={addCandidate}>
              Add Candidate
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ElectionPage;
