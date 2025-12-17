import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
<div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
  <form action="" className="max-w-md w-full bg-white p-6 shadow rounded">
    <h2 className="text-2xl text-center font-bold mb-6">Agent Login</h2>
    <div className="mb-6">
      <label className="block mb-1 text-sm font-medium">Email</label>
      <input type="email" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
    </div>
    <div className="mb-4">
      <label className="block text-sm mb-1 font-medium">Password</label>
      <input type="password" className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"/>
    </div>
    <button type='button' className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700" onClick={()=>navigate('/agent/add/user')}>Login</button>
<p className="text-sm text-center mt-4 text-gray-600">New to votrix? <span className="text-blue-600 hover:underline ml-1 cursor-pointer" onClick={()=>navigate('/agent/register')}>Register</span></p>
  </form>
</div>
    </>
  )
}

export default Login
