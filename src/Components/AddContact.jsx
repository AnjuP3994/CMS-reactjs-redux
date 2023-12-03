import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import {MDBBtn} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { addUser } from '../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';


function AddContact() {

  const [username, setUsername] = useState('')
  const [userphone, setUserphone] = useState('')
  const [useremail, setUseremail] = useState('')
  console.log(username,userphone,useremail);

  // const users = useSelector((state)=>state.users)
  const users = useSelector((state) => state.users) || [];
  console.log(users);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdd = (e) => {
    e.preventDefault();
    if (!username || !userphone || !useremail) {
      alert("Please fill the form.");
    } else {
      const newUserId = users[users.length - 1].id + 1;
      dispatch(addUser({ id: newUserId, name: username, phone: userphone, email: useremail }));
      navigate('/contactlist');
    }
  };

  return (
    <>
    <Header/>
    <div className="container">
      <div className='mt-5 ms-5 ps-5'>
        <Link to={'/contactlist'}><button className='btn btn-primary'><i class="fa-solid fa-arrow-left"></i></button></Link>
      </div>
      <div className="container text-center" style={{marginBottom:'95px'}}>
        <h3 className='mt-3 mb-4 fw-bolder text-decoration-underline'>Add New Contact</h3>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-8627508-6856207.png?f=webp" width={'180px'} alt="" />
        <div className="container mt-3 w-50">
          <MDBInput onChange={(e)=>setUsername(e.target.value)} className='mb-3' label='Name' type='text' size='lg'/>
          <MDBInput onChange={(e)=>setUserphone(e.target.value)} className='number mb-3' label='Phone No' type='text' size='lg'/>
          <MDBInput onChange={(e)=>setUseremail(e.target.value)} className='mb-4' label='Email' type='text' size='lg'/>
          <div className='text-center' style={{marginBottom:'44px'}}>
            <MDBBtn onClick={(e)=>handleAdd(e)} className='px-5'>Add</MDBBtn>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddContact