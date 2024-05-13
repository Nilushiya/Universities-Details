import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {

  const [question , setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Questions have send");
    setQuestion('');
  }
  const token = 1;
  return (
    <div className='contact'>
        <div className="row m-0">
            <div className="col-lg-5">
                 <h1>Ask your Questions</h1>
            </div>
            <div className="col-lg-7">
              <div className="details">
                <div className="info">
                  <p>You questions will help to build the information more usefull</p>
                  <p>Go and Get your informatins 
                    <Link to='/university'>Here</Link>
                  </p>
                </div>
                <div className="form">
                  <textarea 
                     value={question}
                     onChange= {(e) => setQuestion(e.target.value)}
                     placeholder="Your Qustions?"
                  />
                  {token ? <button onClick={handleSubmit}>Submit</button> : <button><Link to='/login'>Login</Link></button>}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact