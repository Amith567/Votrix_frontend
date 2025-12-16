import { Link } from "react-router-dom"

const Register = () => {
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

<input type="submit" value="Register" />

    </form>

<Link to='/agent/login'><p> login</p></Link>
    
    </>
  )
}

export default Register