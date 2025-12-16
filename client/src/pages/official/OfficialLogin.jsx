
import { Link } from 'react-router-dom'

const OfficialLogin = () => {
  return (
    <>
      <strong>official login</strong>
      <form action="">
        <p>username or email</p>
        <p>password</p>

        <Link to='/official/dashboard'><input type="submit" value="Login" /></Link>
      </form>

    </>
  )
}

export default OfficialLogin