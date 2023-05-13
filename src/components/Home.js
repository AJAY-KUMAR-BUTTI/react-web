import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import TrStructure from "./TrStructure";

function Home() {
    const [state, setState] = useState([
        'HTML', 'Css', 'Javascript', 'React Js', 'Practice Sessions', 'One RealTime Project', 'Communication Skills'
    ])
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="heading">
          <h1>45 Days Front-end Training programe</h1>
        </div>
        <div className="flex">
          <h2 className="m-5 p-3">More about training programs</h2>
          <div>

          <h5 className="m-3">What are the courses covered</h5>
          {state.map((course,index) => (
                  <ul key={index}>
                      <li> <span><CheckIcon style={{ color : "blue", fontWeight : "bold"}} /></span>{course}</li>
                  </ul>
              ))}
          </div>
          </div>
          <hr />
          <TrStructure />
      </div>
    </div>
  );
}

export default Home;
