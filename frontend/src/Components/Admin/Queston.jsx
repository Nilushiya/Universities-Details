import React, { useEffect, useState } from 'react'
import { queston } from '../Style'
import NavAdmin from './NavAdmin'
import Sidebar from './Sidebar'
import { deleteQuestions, fetchQuestions } from '../../Context/UserContext'
const Queston = () => {
    const [Questions, setQuestions] = useState([]);
   
    useEffect(() => {
      const getQuestions = async () => {
        const Questions = await fetchQuestions();
        // console.log("Questions" , Questions[0])
        setQuestions(Questions);
      };
      getQuestions();
    }, []);
    const handleDelete = async (question_id) => {
        await deleteQuestions(question_id);
        setQuestions(Questions.filter((questions) => questions.question !== question_id));
        window.location.reload()
      };
  return (
    <div className='question'>
        <div className="adminProfileContainer">
        <NavAdmin />
          <div className="row m-0 adminRow" style={{backgroundColor:"#DCF2F1"}}>
            <div className="col-lg-4 col-md-2 col-2  sidebarr" >
              <Sidebar />        
            </div>
            <div className="col-lg-8 col-md-10 col-10  AdminPro" >
              <div className="profileAdmincontainer">
                <div className="uni">
                  <h1>Question Management</h1>
                  <ul className="university-list">
                    {Questions.map((Question ) => (
                        <li key={Question.question_id} className="university-item">
                        {Question.question} 
                            <button  onClick={() => handleDelete(Question.question_id)}>Delete</button>   
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>         
          </div>
      </div>
    </div>
  )
}

export default Queston