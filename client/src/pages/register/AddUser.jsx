import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Voting = () => {
  const navigate = useNavigate();

  const candidates = [
    { id: 1, name: "Candidate A", party: "Party X" },
    { id: 2, name: "Candidate B", party: "Party Y" },
    { id: 3, name: "Candidate C", party: "Party Z" },
  ];

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const submitVote = () => {
    if (!selectedCandidate) return;

    setTimeout(() => {
      navigate("/voting/success");
    }, 5000);
  };

  return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center pb-2">
          Cast Your Vote
        </h2>
        <hr className="mb-4" />

        {/* Header */}
        <div className="grid grid-cols-12 font-semibold border-b pb-2 mb-3 text-sm">
          <div className="col-span-5">Candidate</div>
          <div className="col-span-5">Party</div>
          <div className="col-span-2 text-center">Select</div>
        </div>

        {/* Rows */}
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className={`grid grid-cols-12 items-center border p-3 rounded mb-2 cursor-pointer
              ${
                selectedCandidate === candidate.id
                  ? "bg-blue-50 border-blue-500"
                  : "hover:bg-gray-50"
              }`}
            onClick={() => setSelectedCandidate(candidate.id)}
          >
            <div className="col-span-5 font-medium">
              {candidate.name}
            </div>

            <div className="col-span-5 text-gray-600">
              {candidate.party}
            </div>

            <div className="col-span-2 text-center">
              <input
                type="radio"
                name="candidate"
                checked={selectedCandidate === candidate.id}
                onChange={() => setSelectedCandidate(candidate.id)}
              />
            </div>
          </div>
        ))}

        {/* Submit */}
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={submitVote}
            disabled={!selectedCandidate}
            className={`min-w-xs px-6 py-2 rounded text-white
              ${
                selectedCandidate
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Submit Vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Voting;
