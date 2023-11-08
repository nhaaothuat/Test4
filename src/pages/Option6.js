import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Option6() {
  
     const [inputData, setInputData] = useState({email:'',question:''})
     const navigate = useNavigate();
     function handleSubmit(e){
          e.preventDefault()

          axios.post('http://localhost:8080/request',inputData)
          .then(res=>{
               alert("Add successfull")
               navigate('/teacher-portal/option4')
          }).catch(err =>console.log(err))
     }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light p-5'>
          <form onSubmit={handleSubmit}>
          <div>
               <label htmlFor='email' >Email:</label>
               <input type='email' name='email' className='form-control' 
               onChange={e=>setInputData({...inputData, email: e.target.value})}/>
          </div>
          <div>
               <label htmlFor='question' >Question:</label>
               <input type='text' name='question' className='form-control' 
               onChange={e=>setInputData({...inputData, question: e.target.value})}/>
          </div><br />
          <button className='btn btn-info'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Option6
