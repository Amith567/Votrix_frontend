import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate=useNavigate()
  return (
    <>
      <strong>agent register</strong>
      <form action="">
        <p>name</p>
        <p>email</p>
        <p>password</p>
        <p>id</p>
        <p>pn number</p>
        <p>role</p>

        <input type="submit" value="Register" onClick={()=>navigate('/agent/login')}/>

      </form>

      <p onClick={()=>navigate('/agent/login')}>already logined ? click here</p>

    </>
  )
}

export default Register