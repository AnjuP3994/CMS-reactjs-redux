import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({insideContactList, insideLandingPage}) {
  return (
    <>
      <Navbar expand="lg" className="bg-primary py-3" style={{position:'sticky',top:'0',zIndex:'1000'}}>
      <Container>
      <Navbar.Brand href="/" className='text-light fs-3'>
      <i class="fa-solid fa-address-card fs-2 me-2"></i> 
        CMS
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          {
            insideLandingPage && 
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light"><i class="fa-solid fa-magnifying-glass"></i></Button>
              </Form>
          }
          {
            insideContactList &&
            <div>
              <Link to={'/AddContact'}>
                <button className='btn btn-light'>Add Contact <i class="fa-solid fa-user-plus"></i></button>
              </Link>
            </div>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header