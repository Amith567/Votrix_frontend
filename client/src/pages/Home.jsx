import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Home = () => {
      const navigate=useNavigate()

  return (
    <>Home
        <br />
        <button onClick={()=>navigate('/official/login')}>official</button><br />
        <button onClick={()=>navigate('/agent/login')}>register</button><br />
        <button onClick={()=>navigate('/user/login')}>vote</button>
    </>
  )
}

export default Home 