import React, { useEffect, useState } from 'react'
import { decodeToken } from '../Context/UserContext'

         
 const Details = ({name, faculties}) => {
    const[userId , setUserId] = useState('');
    const[custemer , setName] = useState('');
    useEffect(() => {
        const decode = decodeToken();
        if(decode){
         const user = decode.studentId;
         const userName = decode.name;
         setName(userName)
         setUserId(user);
        //  console.log('name' , custemer);
        }
        else{
         const user = null;
         const userName = "there"
         setName(userName)
         setUserId(user);
        }
      },[])
    console.log(faculties)
  return (
    <div className='details'>
      <div className="uniName"><h1>Hello <i>{custemer}</i> Welcome to </h1>{name}</div>
      
      {faculties && faculties.length > 0 ? (
        <div className="fac">
          <h3>Here you can see our Faculties</h3>
          {faculties.map((fac, index) => (
            <div key={index}>
              {fac.facultyName}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Details