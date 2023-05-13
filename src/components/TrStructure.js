import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Dropdowns from './Dropdowns';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Choose from './Choose';
// import DropdownText from 'react-bootstrap/DropdownText';

const TrStructure = () => {
 const [state, setState] = useState([
    {   
        id : 1,
        title : "Here you can click and see on each course to see number of sessions and concepts to be covered for each session",
        content : "Each Course is divided into multiple classes and concepts to be covered in each class."
    }, 
    {
        id : 2,
        title : "Tests for Each section",
        content : "After completion of each part, mock tests will be conducted and provide help to improve."
    },
    {
        id : 3,
        title : "Certification Exam",
        content : "On successful completion of course an Exam will be conducted on overall course and will be awarded with Certification"
    }
])

  return (
    <div className='row'>
    <div className='m-5 d-flex col-md-12'>
        <h2 className='m-5'>Structure of Training sessions</h2>
      <div className='ms-5 ps-5'>
        {state.map(value => ( 
          <div key={value.id}>
            <DropdownButton id="dropdown-basic-button" title={value.title}>
            <Dropdown.Item href="#/action-1">{value.content}</Dropdown.Item>
            </DropdownButton>
          </div>
        ))}
        <Dropdowns />
      </div>
    </div>
      <Choose />
    </div>
  )
}

export default TrStructure
