import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  const[loginUser,setLoginUser] = useState('')
  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoginUser(user)
    }
  },[])
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Wealthlyzer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">

                  {loginUser && loginUser.name}

        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/user'>{loginUser && loginUser.name}</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default header
