import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

function Dropdown1() {
    const [state, setState] = useState({
        title : 'JavaScript Advanced - 10 sessions',
        title1 : 'React Js - 10 sessions',
        content : ['Promises', 'Async/await', 'ES6 Features', 'Array Methods', 'Map and Set', 'Object Destructuring', 'Classes', 'Error Handling', 'Fetch', 'Events and Form Controls'],
        content1 : ['Introduction', 'Create simple React app', 'JSX & Components', 'Functional Components', 'Props', 'Class Components', 'State', 'Hooks', 'Lifecycle Methods', 'Conditional rendering', 'Forms', 'Data fetching']
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
            <DropdownButton id="dropdown-basic-button" title={state.title}>
                <ol type='1'>   
                    {state.content.map((value, index) =>  (
                        <div key={index}>
                            <Dropdown.Item href="#/action-1">
                                <li>{value}</li>
                            </Dropdown.Item>
                        </div>
                    ))}
                </ol>
            </DropdownButton>
        </div>
        <div className='col-md-12'>
        <DropdownButton id="dropdown-basic-button" title={state.title1}>
            <ol type='1'>   
                {state.content1.map((value, index) =>  (
                    <div key={index}>
                        <Dropdown.Item href="#/action-1">
                            <li>{value}</li>
                        </Dropdown.Item>
                    </div>
                ))}
            </ol>
            </DropdownButton>  
        </div>
    </div>
  )
}

export default Dropdown1
