import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <>
      <MDBFooter bgColor='primary' className='text-center text-lg-left' style={{position:'sticky',bottom:'0',zIndex:'1000'}}>
        <div className='text-center p-4 text-light'>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-light text-decoration-none' href='#!'>
            ContactApp.com
          </a>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer