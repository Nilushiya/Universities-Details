import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {

  const [question , setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!question.trim()){
      alert("Pleace send any question");
      return;
    }
    else{
      alert("Questions have send");
    }
    setQuestion('');
  }
  const token = 1;
  return (
    <div className='contact'>
        <div className="row m-0">
            <div className="col-lg-5 col-md-6 col-12">
                 <h1>Ask your Questions</h1>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="details">
                <div className="info">
                  <p>You questions will help to build the information more usefull</p>
                  <p>Go and Get your informatins 
                    <Link to='/university'>Here</Link>
                  </p>
                </div>
                <div className="form">
                  <textarea 
                  className='textareas'
                     value={question}
                     onChange= {(e) => setQuestion(e.target.value)}
                     placeholder="Your Qustions?"
                     style={{ width: '80%', height: '80%' }}
                  />
                  {token
                   ? <button onClick={handleSubmit} className='submit'>Submit</button>
                    : <button className='login'><Link to='/login'>Login</Link></button>}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact