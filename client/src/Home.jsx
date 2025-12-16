import { useNavigate } from "react-router-dom"
import './style.css'
const Home = () => {
  const navigate = useNavigate()

  return (
    <><p className='text-3xl font-bold underline'>home</p>
      <br />
      <button onClick={() => navigate('/official/login')}>official</button><br />
      <button onClick={() => navigate('/agent/login')}>register</button><br />
      <button onClick={() => navigate('/user/login')}>vote</button>
    </>
  )
}

export default Home 