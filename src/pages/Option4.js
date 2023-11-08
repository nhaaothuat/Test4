import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Layout2 from '../components/layout/Layout2'
function Option4() {
   
  const [columns, setColumns] = useState([])
  const [records, setRecords] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/request')
    .then(res=>{
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  },[])

  return (
    <div className='container mt-5'>
      <div className='text-end' > 
         <Link to='/teacher-portal/option6' className='btn btn-primary'>Add+</Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c,i)=>(
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((d,i)=>(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.email}</td>
              <td>{d.question}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Option4
