import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {
    MDBCard,
    MDBCardText,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Redux/userSlice';
import Header from './Header';


function ContactList() {

    const users = useSelector((state)=>state.users)
    console.log(users);

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({id : id}))
    }

  return (
    <>
    <Header insideContactList/>
        <div>
            <Container className='py-5'>
                <Row>
                   {
                    users.length>0? users.map((data)=>(
                        <Col xs={12} sm={6} md={6} lg={6} xl={4} xxl={4} className='mb-4'>
                    <MDBCard className='c-card py-3 pb-4' style={{backgroundColor:'lightsteelblue'}}>
                        <MDBRow className='g-0'>
                            <MDBCol md='4'>
                            <MDBCardImage src='https://cdn3d.iconscout.com/3d/premium/thumb/user-8627508-6856207.png?f=webp' className='' width={'100%'}/>
                            </MDBCol>
                            <MDBCol md='8'>
                                <MDBCardText className='py-3 ms-3' style={{color:'black'}}>
                                <p><b>Name:</b> {data.name}</p>
                                <p><b>Phone No:</b> <span className='number'>{data.phone}</span></p>
                                <p><b>Email:</b> {data.email}</p>
                                
                                </MDBCardText>
                            </MDBCol>
                            <div className='d-flex justify-content-evenly'>
                                    <Link to={'/edit/'+data.id}>
                                        <MDBBtn color='success'><i class="fa-solid fa-user-pen"></i></MDBBtn>
                                    </Link>
                                    <MDBBtn onClick={()=>handleDelete(data.id)} color='danger'><i class="fa-solid fa-trash"></i></MDBBtn>
                                </div>
                        </MDBRow>
                    </MDBCard>
                   </Col>
                    )) : "No user found."
                   }
                </Row>
            </Container>
        </div>
    </>
  )
}

export default ContactList