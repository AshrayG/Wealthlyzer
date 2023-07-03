import React,{useState, useEffect} from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Layout/Spinner'
const Login = () => {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const submitHandler = async(values) => {
        try {
            setLoading(true)
            const {data} =await axios.post('/users/login', values)
            message.success ('Login successfull')
            setLoading(false)

            localStorage.setItem('user', JSON.stringify({...data,password : ''}))
            navigate('/')

        } catch (error) {
            setLoading(false)

            message.error('invalid username or password')
        }

    };
    useEffect(()=> {
        if(localStorage.getItem("user")){
            navigate('/')
        }
      },[navigate])
  return (
    <>
    <div className='login-page'>
        {loading && <Spinner/>}
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
