import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'


function LandingPage() {
  return (
    <>
    <Header insideLandingPage/>
        <div>
        <Container className='py-5 my-5'>
            <Row className='m-3 mb-5 pb-3'>
                <Col xs={5}>
                <h1 className='mt-3 mb-3'>Welcome to Contact Management System</h1>
                <h6 style={{textAlign:'justify'}}>Our Contact Management System is your key to a hassle-free approach to handling contacts. 
                Designed with intuition at its core, the system seamlessly organizes, accesses, and updates your contacts, offering a user 
                experience that simplifies your life. Effortlessly navigate through your contact list, locate crucial information, and make 
                updates in real-time. Our user-centric design ensures a smooth experience, simplifying both professional and personal networks. Welcome to a new era of contact management where simplicity meets sophistication, and your life is 
                made easier, one contact at a time.
                </h6>
                <div className="text-center mt-4 me-5">
                    <Link to={'/contactlist'}>
                    <button className='btn btn-primary'>View all Contacts</button>
                    </Link>
                </div>
                </Col>
                <Col xs={7}>
                    <img src="https://d3a93fg1wt2nf3.cloudfront.net/static/website/images/dm_images/dealer-management.svg" width={'100%'} alt="" />
                </Col>
            </Row>
        </Container>
        </div>
    </>
  )
}

export default LandingPage