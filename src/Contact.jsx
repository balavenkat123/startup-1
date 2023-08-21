import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


const Contact = () => {
    const input=document.querySelector('input')
    const handleSubmit=() => {
        if (input.value === "") {
            console.log("enter values");
        };
              
            }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 fresh-air'>
        <div className='w-50 bg-white border rounded p-3'>
            <form action="/" onSubmit={handleSubmit}>
                <label for="name"><strong>NAME</strong> </label><br/>
                <input type="text" className='form-control' placeholder='name' onSubmit={handleSubmit}/><br/>      
                <label for="email"><strong>Email</strong> </label><br/>     
                <input type="email" className='form-control' placeholder='email'onSubmit={handleSubmit}/><br/> 
                <center><Link to='/Home' className='btn btn-success w-25'>Home</Link></center>                              
            </form>
        </div>
    </div>
  )
}

export default Contact