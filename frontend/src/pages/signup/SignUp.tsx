import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Form from './child/Form'

const SignUp = () => {
  return (
    <div>
      <div className='absolute left-[22%] max-sm:left-[6%]'>
        <Header text='Login As (type)' />
      </div>
      <div className='w-full h-screen'>
        <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt=""
          className='h-full w-full'
        />

        <div className='w-full h-screen flex justify-center items-center absolute top-0'>
          <Form/>
        </div>

      </div>
    </div>
  )
}

export default SignUp