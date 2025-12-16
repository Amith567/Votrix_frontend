import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
    <><h2>add users</h2>
    <Link to='/agent/add/user/success'><button>submit</button></Link></>
  )
}

export default AddUser