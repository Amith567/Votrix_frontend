import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate=useNavigate()
  return (
    <>
        <strong>agent login</strong>
        <form action="">
        <p>username</p>
        <p>password</p>
        <input type="submit" value="Login" onClick={()=>navigate('/agent/add/user')}/>
        </form>
        <Link to='/agent/register'><p>new ? go to login</p></Link>

    </>
  )
}

export default Login