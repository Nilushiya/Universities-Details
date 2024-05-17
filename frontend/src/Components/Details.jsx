import React, { useEffect, useState } from 'react'
import { decodeToken } from '../Context/UserContext'
import { university } from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile} from '@fortawesome/free-solid-svg-icons';        
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
      <div className="uniName"><h1>Hello              
         <FontAwesomeIcon icon={faFaceSmile}  className='smile' size='1x' style={{color:"#ff5b25"}}/> 
<i>    {custemer},</i> 
<br />
Welcome to {name}</h1></div>
      
      {faculties && faculties.length > 0 ? (
        <div className="fac">
          <h3>Here you can see our Faculties</h3>
          {faculties.map((fac, index) => (
            <div className='facname' key={index}>
              {index+1} = {fac.facultyName}
              {/* <hr /> */}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Details