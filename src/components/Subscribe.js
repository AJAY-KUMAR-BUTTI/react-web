import React, { useState } from 'react'
import Footer from './Footer'

function Subscribe() {
  const [state, setState] = useState({
    title1 : 'Learning Path',
    title2 : 'Topics',
    title3 : 'Get In Touch',
    content1 : [ 'Web Development', 'Mobile Development', 'Responsive Design', 'Front end Developer', 'Guide'],
    content2 : [ 'HTML', 'Css', 'Javascript', 'React Js'],
    content3 : ['Bangalore', '+91 7989216916', 'mail@example.com']

  })
  return (
    <div className='row'>
    <div className='bg-primary text-light col-md-12'>     
         <div style={{textAlign : 'center'}} className='margins'>
                <h6>Subscribe</h6>
                <h2>Premium Subscription</h2>
                <h5 className='mb-4'>Premium content will be available for the users who subscribed with Membership account.</h5>
                <h6><span className='px-3 py-2 color'>subscribe & save</span></h6>
        </div>
    </div>

    <div className='bg-dark text-light'>
      <div className='d-flex'>
        <div className='ms-5 p-5'>
          <h4 className='mb-4'>{state.title1}</h4>
        {state.content1.map((value, index) => {
          return (
            <ul key={index} className='m-0 p-1'>
              <li className='hover'>{value}</li>
            </ul>
          )
        })}
        </div>
        <div className='me-5 p-5'>
          <h4 className='mb-4'>{state.title2}</h4>
          {state.content2.map((value, index) => {
            return(
            <ul key={index} className='m-0 p-1'>
              <li className='hover'>{value}</li>
            </ul>
            )
          })}
        </div>

        <div className='ms-5 pt-5 ps-5 mb-0 pb-0'>
          <h4 className='mb-4'>{state.title3}</h4>
          {state.content3.map((value,index) => {
            return (
              <ul key={index} className='m-0 p-1'>
                <li>{value}</li>
              </ul>
            )
          })}
        </div>
        </div>
        <hr />
        <Footer />
    </div>

    </div>
  )
}

export default Subscribe
