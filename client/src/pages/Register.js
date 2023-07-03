import React,{useState} from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Layout/Spinner'

const Register = () => {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const submitHandler = async(values) => {
        try {
            setLoading(true)
            await axios.post('/users/register', values)
            message.success ('Registration successfull')
            setLoading(false)
            navigate('/login')
        } catch (error) {
            setLoading(false)

            message.error('invalid username or password')
            
        }
        
    }
  return (
    <>
      <div className='register-page'>
        {loading && <Spinner/>}
        <Form layout='vertical' onFinish={submitHandler}>
            <h1>Registration Form</h1>
            <Form.Item label='Name' name='name'>
                <Input/>
            </Form.Item>            
            <Form.Item label='Email' name='email'>
                <Input type='email'/>
            </Form.Item>            
            <Form.Item label='Password' name='password'>
                <Input type='password'/>
            </Form.Item>
            <div className='d-flex'>
                <p>Already Registered? Click <Link to='/login'>Here </Link> to login </p>
            </div>
            <button className='btn btn-primary'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default Register
