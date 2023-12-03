import React, { useState } from 'react'
import {MDBBtn} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../Redux/userSlice';
import Header from './Header';


function Edit() {

  const {id} = useParams()
  console.log(id);  //particular id
  
  const users = useSelector((state)=>state.users)
  console.log(users);

  const existingUser = users.filter(item=>item.id == id)
  const {name, email, phone} = existingUser[0]

   //create a state for holding values from the form details
   const [userId, setUserId] = useState(id)
   const [userName, setUserName] = useState(name)
   const [userEmail, setUserEmail] = useState(email)
   const [userPhoneno, setUserPhoneno] = useState(phone)

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleUpdate = (e) => {
    event.preventDefault();
    dispatch(updateUser({
      id: userId,
      name: userName,
      email:userEmail,
      phone:userPhoneno
    }))
    navigate('/contactList')
   }

  return (
    <>
    <Header/>
    <div>
      <div className='mt-4 ms-5 ps-5'>
      <Link to={'/contactlist'}><button className='btn btn-primary'><i class="fa-solid fa-arrow-left"></i></button></Link>
      </div>
      <div className="container text-center" style={{marginBottom:'74px'}}>
        <h3 className='mb-4 fw-bolder text-decoration-underline'>Edit Contact Details</h3>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-8627508-6856207.png?f=webp" width={'180px'} alt="" />
        <div className="container mt-3 w-50">
          <MDBInput onChange={(e)=>setUserId(e.target.value)} value={userId} className='number mb-3' label='Id' type='text' size='lg'/>
          <MDBInput onChange={(e)=>setUserName(e.target.value)} value={userName} className='mb-3' label='Name' type='text' size='lg'/>
          <MDBInput onChange={(e)=>setUserPhoneno(e.target.value)} value={userPhoneno} className='number mb-3' label='Phone No' type='text' size='lg'/>
          <MDBInput onChange={(e)=>setUserEmail(e.target.value)} value={userEmail} className='mb-4' label='Email' type='text' size='lg'/>
          <div className='text-center' style={{marginBottom:'44px'}}>
            <MDBBtn onClick={(e)=>handleUpdate(e)} className='px-5'>Update</MDBBtn>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Edit