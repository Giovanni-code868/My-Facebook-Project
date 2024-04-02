import React from 'react'
import '../styles/Hero.css'
import facebookImg from "../assets/facebookimg.svg"
import { Form } from 'react-bootstrap'


const Hero = () => {
  return (
    <>
      <main>
      <div className='row'>

        {/* First Div */}
        <div className=' First-div container col-lg-6 '>
        <img className='text-align-sm-center' src={facebookImg} alt="Facebook Image" />
        <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
        
        {/* Second Div */}
        <div className='col-lg-5 container '> 
        <Form className='form-wrapper  p-3 '>
              <Form.Group className='emails' controlId='formBasicEmail'>
                <Form.Control
                  type='email'
                  placeholder='Email address or phone number'
                />
                <Form.Text className='text-muted'></Form.Text>
              </Form.Group>

              <Form.Group className='' controlId='formBasicPassword'>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <button className='login'>Log In</button>
              <p className='forgot'>Forgotten password?</p>
              <hr />
              <button className='newaccount'>Create new account</button>

        </Form>

        </div>
        </div>
      </main>
      
    </>
  )
}

export default Hero
