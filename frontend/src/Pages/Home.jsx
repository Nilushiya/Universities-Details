import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CustomNavbar from '../Components/CustomNavbar';
import kelaniya from '../Components/Assets/Kelaniya.jpg'
import Colombo from '../Components/Assets/Colombo.jpg'
import Moratuwa from '../Components/Assets/Moratuwa.jpg'
import Jaffna from '../Components/Assets/Jaffna.jpg'
import Jayawarthanapura from '../Components/Assets/Jayawarthanapura.jpg'
import Peradeniya from '../Components/Assets/Pera.jpg'
import Rayarata from '../Components/Assets/Rayarata.jpg'
import Ruhuna from '../Components/Assets/Ruhuna.jpg'
import Uwa from '../Components/Assets/Uwa.jpg'
import About from '../Components/About';
import Contact from '../Components/Contact';
import { decodeToken, useUserContext } from '../Context/UserContext';
import {about} from '../Components/Style/index'
import { useNavigate } from 'react-router-dom';
import Detailfrom from '../Components/Detailfrom';
// import { checklogin } from '../Context/UserContext';
// import './HomeDp.css'

const Home = () => {
  const navigate = useNavigate()
  const[stu_id , setStu_id] = useState('');
  const[customerName , setName] = useState('');
  const[role , setRole] = useState('');

  const decode = decodeToken();

  useEffect(() => {
     if(decode){
      const user = decode.studentId;
      const userName = decode.name;
      const userRole = decode.userType;
      setRole(userRole)
      setName(userName)
      setStu_id(user);
      if(userRole === 'ADMIN'){
        navigate('/adminprofile')
      }
      else{
        navigate('/')
      }
     }
  },[])


  return (
    <div>
      <CustomNavbar />
    <Carousel>
    <Carousel.Item>
      <img style={{height:'80vh'  }}
        className="d-block w-100"
        src={kelaniya}
        alt="First slide"
      />
      <Carousel.Caption>
      
       <h1>University of Kelaniya</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={Moratuwa}
        alt="Second slide"
      />

      <Carousel.Caption>
       
        <h1>University of Moratuwa</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Colombo}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>University of Colombo</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Jaffna}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1 style={{color:'black'}}>University of Jaffna</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Jayawarthanapura}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>University of Jayawarthanapura</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Peradeniya}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>University of Peradeniya</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Rayarata}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1  style={{color:'black'}}>University of Rayarata</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Ruhuna}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1  style={{color:'black'}}>University of Ruhuna</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}} 
        className="d-block w-100"
        src={Uwa}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h1>University of Uva Wellassa</h1>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    {/* <br />
    <Detailfrom 
      stu_id = {stu_id}
      customerName = {customerName}
    /> */}
    <br />
    <About />
    <br />
    <Contact />
  </div>
  )
}



export default Home;