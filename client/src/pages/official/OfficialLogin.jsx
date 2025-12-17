import { useNavigate } from 'react-router-dom'

const OfficialLogin = () => {
  const navigate = useNavigate()
  return (
    <>
<form class="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow bg-gray-800">
  <h2 class="text-2xl font-bold text-center mb-6">Official Login</h2>

  <div class="mb-4">
    <label class="block text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"/>
  </div>

  <div class="mb-4">
    <label class="block text-sm font-medium mb-1">Password</label>
    <input
      type="password"
      class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
    />
  </div>


  <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"type='submit' onClick={() => navigate('/official/dashboard')}>
    Login
  </button>

  <p class="text-sm text-center mt-4 text-gray-600">
    forgot password ?
    <a class="text-blue-600 hover:underline">Click here</a>
  </p>
</form>

    </>
  )
}

export default OfficialLogin