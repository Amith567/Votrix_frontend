import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const navigate = useNavigate()
  return (
    <><h2>add users</h2>
      <button onClick={() => navigate('/agent/add/user/success')}>submit</button>
    </>
  )
}

export default AddUser