import React, { useState } from 'react'
import{login} from '../Components/Style/index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom'
import { checklogin, decodeToken } from '../Context/UserContext.jsx';

const Login = () => {
    const [formdata , setFormdata] = useState({
        email : '',
        password : ''
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
    <div className='login'>
         <div className="box1"></div>
     
        <div className="loginBox">
            <div className="heder">
                <h1>Login</h1>
            </div>
            <div className="loginbody">
                  <form action="" onSubmit={handleSubmit}>
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
                    <button type='submit'>Submit</button>
                    <Link to='/' className='forgot'>Forgot password</Link>
                    <Link to='/register' className='reg'>Signup</Link>
                  </form>  
            </div>
        </div>
        <div className="box2"></div> 
    </div>
  )
}

export default Login