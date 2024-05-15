import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom'
import { checklogin, decodeToken } from '../Context/UserContext.jsx';
import { register } from '../Components/Style';
const Register = () => {
  const [formdata , setFormdata] = useState({
    name:'',
    email : '',
    password : '',
    confirmPassword:'',
    userType: 'USER'
})

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Email:', formdata.email);
  console.log('Password:', formdata.password);
  // if(!formdata.email){
  //     setEmailError('Email cannot be empty.');
  // }
  // else if(!formdata.password){
  //     setPasswordError('Password cannot be empty.');
  // }
  // else{
      try{
          const loginda = await checklogin(formdata); 
          const token = loginda.data.token; 

          localStorage.setItem('token', token);
          const decoded = decodeToken();
          // console.log('lo :', decoded.userType)
          const userType = decoded.userType
        
      if(userType == 'USER')
      window.location.href = '/';
      else   
      window.location.href = '/register'
      }
      catch(err){
          alert('error', err);
      }
// }
  setFormdata({ email: '', password: '' });
};
  return (
    <div className='register '>
      <div className="registerbox">
        <div className="heder">
            <h1>Register</h1>
        </div>
        <div className="registerbody">
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                    <FontAwesomeIcon icon={faUser}  className='envelope' size='x'/> 
                    <input 
                        type='text'
                        value={formdata.name}
                        name='name'
                        placeholder='Enter your name'
                        onChange={(e) => setFormdata({...formdata, name:e.target.value})}
                        required
                    />
                    {/* {emailError && <h6 style={{color:"red"}}>{emailError}</h6>} */}
                </div>
                <div className="mail">
                    <FontAwesomeIcon icon={faEnvelope}  className='envelope' size='x'/> 
                    <input 
                        type='email'
                        value={formdata.email}
                        name='email'
                        placeholder='Enter your email'
                        onChange={(e) => setFormdata({...formdata, email:e.target.value})}
                        required
                    />
                    {/* {emailError && <h6 style={{color:"red"}}>{emailError}</h6>} */}
                </div>
                <div className="pass">
                    <FontAwesomeIcon icon={faLock}  className='lock' size='x'/> 
                    <input 
                        type='password'
                        value={formdata.password}
                        name='password'
                        placeholder='Enter you password'
                        onChange={(e) => setFormdata({...formdata, password:e.target.value})}
                        required
                    />
                    {/* {passwordError && <h6 style={{color:"red"}}>{passwordError}</h6>} */}
                </div>
                <div className="conpass">
                    <FontAwesomeIcon icon={faLock}  className='lock' size='x'/> 
                    <input 
                        type='password'
                        value={formdata.confirmPassword}
                        name='confirmPassword'
                        placeholder='Enter you confirmPassword'
                        onChange={(e) => setFormdata({...formdata, confirmPassword:e.target.value})}
                        required
                    />
                    {/* {passwordError && <h6 style={{color:"red"}}>{passwordError}</h6>} */}
                </div>
                <button type='submit'>Submit</button>
                <p style={{color:"white"}}>Already have an account?<Link to='/login' className='log'>Login</Link></p>
            </form> 
        </div>
      </div>
    </div>
  )
}

export default Register