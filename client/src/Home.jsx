import { useNavigate } from "react-router-dom"
import './style.css'
const Home = () => {
  const navigate = useNavigate()

  return (
    <>
    <div className="min-h-screen w-full bg-gray-200 flex flex-col">
  <p className="pt-8 text-2xl xl:text-5xl  text-center font-semibold">Welcome to votrix transparent voting system</p>
  <div className="flex-1 flex  justify-center items-center gap-8 ">
      <button onClick={() => navigate('/official/login')} className="px-4 py-2 bg-blue-800 rounded text-white w-40 h-15 text-2xl">official </button>
      <button onClick={() => navigate('/agent/login')}className="px-4 py-2 bg-blue-800 rounded text-white w-40 h-15 text-2xl">register</button>
      <button onClick={() => navigate('/user/login')}className="px-4 py-2 bg-blue-800 rounded text-white w-40 h-15 text-2xl">vote</button>
      </div>
      </div>
    </>
  )
}

export default Home 