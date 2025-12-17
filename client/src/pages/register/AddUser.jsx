import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='min-h-screen w-full bg-gray-200 flex items-center justify-center'>
        <form action="" className='max-w-3xl w-full bg-white p-6 rounded shadow'>
          <h2 className='text-2xl font-bold text-center pb-2'>Add New Voter</h2>
          <hr />
          <div className='mt-3 mb-4 flex  gap-4'>
            <div className='flex-1'>
              <label htmlFor="" className='block text-sm  font-md'>First Name</label>
              <input type="text" name="" id="" className='w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-700' />
            </div>
            <div className='flex-1'>
              <label htmlFor="" className='block text-sm  font-md'>Last Name</label>
              <input type="text" name="" id="" className='w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-700' />

            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="" className='block text-sm font-md'>Address</label>
            <input type="text" name="" id="" className='px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700 w-full' />
          </div>
          <div className='mb-4 flex gap-4'>
<div className='flex-1'>
  <label htmlFor="" className='block text-sm font-md'>Proof of Address</label>
  <input type="number" name="" className=' no-spinner w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700' id="" />
</div>
<div className='flex-1'>
  <label htmlFor="" className="block text-sm font-md">Proof of Identity</label>
  <input type="number" name="" className='no-spinner px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700 w-full' id="" />
</div> </div>
<div className="mb-4 flex gap-4">
  <div className="flex-1">
    <label htmlFor="" className='block text-sm font-md'>State</label>
    <input type="text"  className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700'/>
  </div>
  <div className="flex-1">
    <label htmlFor="" className="block text-sm font-md">District</label>
    <input type="text" className='px-3 py-2 border rounded-md w-full focus:ring-2 focus:ring-blue-700' name="" id="" />
  </div>
  <div className="flex-1">
    <label htmlFor="" className='block text-sm font-md'>Corporation/Panchayath</label>
    <input type="text" className='px-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-blue-700' name="" id="" />
  </div>
</div>
<div className="mb-4 flex gap-4">
  <div className="flex-1">
    <label htmlFor="" className='block text-sm font-md'>Ward</label>
    <input type="number" name="" className='w-full border border rounded-md px-3 py-2 no-spinner focus:ring-2 focus:ring-blue-700' id="" />
  </div>
  <div className="flex-1">
    <label htmlFor="" className="block text-sm font-md">Pincode</label>
    <input type="number" name="" className='no-spinner w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700' id="" />
  </div>
  <div className="flex-1">
    <label htmlFor="" className='block text-sm font-md'>Guardian's Name</label>
    <input type="text" className='px-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-blue-700' />
  </div>
</div>
<div className="mb-4 flex gap-4">
  <div className="flex-1">
    <label htmlFor="" className='block text-sm font-md'>Father's Name</label>
    <input type="text" className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700' />
  </div>
  <div className="flex-1"><label htmlFor="" className='block text-sm font-md'>Mother's Name</label>
    <input type="text" className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700' />
    </div>    
</div>


<div className="mb-4 flex gap-4">
<div className='flex-1'>
  <label htmlFor="" className='block text-sm font-md'>Photo</label>
  <input type="file" name="" className=' w-full border rounded-md px-3 py-2 focus:ring-w focus:ring-blue-700 text-sm ' accept='image/*' id="" />
</div>
<div className='flex-1'>
 <label htmlFor="" className='block text-sm font-md'>Fingerprint</label>
  <input type="file" name="" className=' w-full border rounded-md px-3 py-2 focus:ring-w focus:ring-blue-700 text-sm ' accept='image/*' id="" />

</div>
</div>

<div className='w-full flex justify-center'>
<input type="button" value="Submit" className='min-w-xs p-2 text-white bg-blue-600 rounded hover:bg-blue-700 ' onClick={()=> navigate('/agent/add/user/success')}/>
</div>
        </form>
      </div>
    </>
  )
}

export default AddUser