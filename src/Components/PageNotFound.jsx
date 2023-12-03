import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageNotFound() {
  return (
    <>
      <Container>
        <Row>
          <Col className='text-center m-5 p-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDR-0ogRlAo1XAZxoFq9CTi7r65TspVmbqBXxU1xTwIIGYeCJvYavqGcDAlrlHfw4Ts74&usqp=CAU" 
            width={'643px'} className='mt-5' alt="" />
            <h1 className='my-3 mt-5'>Sorry, the page not found</h1>
            <h5 className='mb-5'>The link you followed probably broken or the page has been removed.</h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PageNotFound