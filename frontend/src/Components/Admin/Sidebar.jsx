import React from 'react'
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faUserTie, faBuilding, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
         <Nav className="sidenav">
                <Nav.Link href="/university" className="nav-link">
                    <FontAwesomeIcon icon={faUniversity} className="icon" /> <span>University</span>
                </Nav.Link>
                <Nav.Link href="/faculty" className="nav-link">
                    <FontAwesomeIcon icon={faUserTie} className="icon" /> <span>Faculty</span>
                </Nav.Link>
                <Nav.Link href="/department" className="nav-link">
                    <FontAwesomeIcon icon={faBuilding} className="icon" /> <span>Department</span>
                </Nav.Link>
                <Nav.Link href="/details" className="nav-link">
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" /> <span>Details</span>
                </Nav.Link>
                <Nav.Link href="/user-question" className="nav-link">
                    <FontAwesomeIcon icon={faQuestionCircle} className="icon" /> <span>User Questions</span>
                </Nav.Link>
            </Nav>
    </div>
  )
}

export default Sidebar