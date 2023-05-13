import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Dropdown1 from './Dropdown1';

function Dropdowns() {
   const [state, setState] = useState(
    {
        title : 'HTML - 7 sessions',
        title1 : 'CSS - 7 sessions',
        title2 : 'JavaScript basics - 7 sessions',
        content : [
            {
                id : 1,
                title : 'Class 1',
                content : 'Introduction to Front-end development and HTML',
                content1 : 'Style Types, Syntax, Selectors, Comments',
                content2 : 'JavaScript & ES6 Introduction'
            },
            {
                id : 2,
                title : 'Class 2',
                content : 'Elements, Headings, Paragraphs, Comments',
                content1 : 'Color, Backgrounds, Text, Font',
                content2 : 'Code Editors, Run JS program, write, console, use strict'
            },
            {
                id : 3,
                title : 'Class 3',
                content : 'Attributes, Links, Images, Styles, Class & ID',
                content1 : 'Box Model, Margin, Padding, Border, Height & Width',
                content2 : 'Interactions, Data types, variables'
            },
            {
                id : 4,
                title : 'Class 4',
                content : 'Semantics, Lists, Tables',
                content1 : 'Links, Lists, Tables, Pseudo classes',
                content2 : 'Type Conversions, Math & Comparison Operators'
            },
            {
                id : 5,
                title : 'Class 5',
                content : 'Layout, File Paths, Block & Inline, Head',
                content1 : 'Display, Position, Overflow, Visibility, float',
                content2 : 'Logical & Nullish Operators'
            },
            {
                id : 6,
                title : 'Class 6',
                content : 'Forms',
                content1 : 'Max-width, Inline-block, z-index',
                content2 : 'Functions, Conditional Statements (If else, ternary, unary)'
            }, 
            {
                id : 7,
                title : 'Class 7',
                content : 'Forms(Pending), remaining',
                content1 : 'CSS forms, remaining',
                content2 : 'Loops, arrow functions, Switch'
            }
        ]
    }
)
  return (
    <div className='row'>
        <div className='col-md-12'>
            <DropdownButton id="dropdown-basic-button" title={state.title}>
                {state.content.map(value =>  (
                    <div key={value.id}>
                        <Dropdown.Item href="#/action-1">
                            <b>{value.title}-</b> {value.content}
                        </Dropdown.Item>
                    </div>
                ))}
            </DropdownButton>
        </div>
        <div className='col-md-12'>     
            <DropdownButton id="dropdown-basic-button" title={state.title1}>
                {state.content.map(value =>  (
                        <div key={value.id}>
                            <Dropdown.Item href="#/action-1">
                            <b>{value.title}-</b> {value.content1}
                            </Dropdown.Item>
                        </div>
                ))}
            </DropdownButton>
        </div>
        <div className='col-md-12'>
            <DropdownButton id="dropdown-basic-button" title={state.title2}>
                {state.content.map(value =>  (
                        <div key={value.id}>
                        <Dropdown.Item href="#/action-1">
                            <b>{value.title}-</b> {value.content2}
                        </Dropdown.Item>
                        </div>
                ))}
            </DropdownButton>
            <Dropdown1 />
        </div>
    </div>
  )
}

export default Dropdowns;
