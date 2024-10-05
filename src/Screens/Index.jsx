import React from 'react'
import './Screen.css'
import { Link, Outlet } from 'react-router-dom'
const Index = () => {
  return (
    <div>
      <div className='main'>
        <div>
          <h6>New Arrivals Only</h6>
          <h1>
            new 
            <br />collections for <br />everyone  
          </h1>
          <button className='btn-collection'><Link to='shopitems' style={{textDecoration:"none", color:"white"}}>Latest Collection</Link></button>
        </div>
        <div className='img-men'></div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Index
