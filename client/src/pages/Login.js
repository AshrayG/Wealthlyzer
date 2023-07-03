import React from 'react'
import {Form,Input} from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
    const submitHandler = (values) => {
        console.log(values)
    }
  return (
    <>
    <div className='login-page'>
        <Form layout='vertical' onFinish={submitHandler}>
            <h1>Login Form</h1>           
            <Form.Item label='Email' name='email'>
                <Input type='email'/>
            </Form.Item>            
            <Form.Item label='Password' name='password'>
                <Input type='password'/>
            </Form.Item>
            <div className='d-flex'>
                <p>New user? Register <Link to='/register'>Here </Link> to login </p>
            </div>
            <button className='btn btn-primary'>Login</button>
        </Form>
      </div>

    </>
  )
}

export default Login