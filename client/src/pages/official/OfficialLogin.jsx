import { useNavigate } from 'react-router-dom'

const OfficialLogin = () => {
  const navigate = useNavigate()
  return (
    <>
      <strong>official login</strong>
      <form action="">
        <p>username or email</p>
        <p>password</p>

        <input type="submit" value="Login" onClick={() => navigate('/official/dashboard')} />
      </form>

    </>
  )
}

export default OfficialLogin