import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function Contact(){
    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 fresh-air'>
        <div className='w-50 bg-white border rounded p-3'>
            <form action="/" onSubmit={handleSubmit}>
                <label for="name"><strong>NAME</strong> </label><br/>
                <input type="text" pattern="[a-z,A-Z]" className='form-control' placeholder='name' /><br/>      
                <label for="email"><strong>Email</strong> </label><br/>     
                <input type="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" className='form-control' placeholder='email'/><br/> 
                <center>
                    
                    <Link to='/Home' type='submit' className='btn btn-success w-25'>Home</Link>
                    </center>                              
            </form>
        </div>
    </div>
  )
}

export default Contact