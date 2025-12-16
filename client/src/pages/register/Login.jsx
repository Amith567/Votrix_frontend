import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <strong>agent login</strong>
      <form action="">
        <p>username</p>
        <p>password</p>
        <input type="submit" value="Login" onClick={() => navigate('/agent/add/user')} />
      </form>
      <p onClick={() => navigate('/agent/register')}>new ? click here</p>

    </>
  )
}

export default Login