import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate=useNavigate()
  return (
    <>
<div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
  <form action=""  className="max-w-md w-full bg-white p-6 shadow rounded">
    <p className="text-2xl text-center font-bold mb-6">Agent Register</p>
    <div className="mb-4">
      <label className="block text-sm font-md mb-1">Name</label>
      <input type="text" name="" id="" className="w-full border rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-700" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-md mb-1">Email</label>
      <input type="text" name="" id="" className="w-full rounded-md border focus:ring-2 focus:ring-blue-700 px-3 py-2" />
    </div>
        <div className="mb-4">
      <label className="block text-sm font-md mb-1">Password</label>
      <input type="text" name="" id="" className="w-full py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-700" />
    </div>
            <div className="mb-4">
      <label className="block text-sm font-md mb-1">Repeat Password</label>
      <input type="text" name="" id="" className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700 w-full" />
    </div>
        <div className="mb-4">
      <label className="block text-sm block-md mb-1">Role</label>
    <select name="role" id="" className="w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-blue-700 ">
      <option value="" disabled selected className="">Select role</option>
      <option value="">Agent</option>
      <option value="">Field worker</option>
      <option value="">Co-officer</option>
      <option value="">Voluteer</option>
    </select>
    </div>
    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white" onClick={()=>navigate('/agent/login')} type="button">Submit</button>
<p className="text-center mt-4 text-sm text-gray-600">Already registerd?<span className="hover:underline text-blue-500 ml-1 cursor-pointer" onClick={()=>navigate('/agent/login')}>Click here</span></p>
  </form>
</div>
    </>
  )
}

export default Register


