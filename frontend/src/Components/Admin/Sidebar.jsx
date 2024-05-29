import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faUserTie, faBuilding, faInfoCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleSelect = (eventKey) => {
        setActiveLink(eventKey);
    };

    return (
        <div className='sidebar'>
            <Nav className="sidenav" activeKey={activeLink} onSelect={handleSelect}>
                <Nav.Link href="/adminUniversity" eventKey="/adminUniversity" className={`nav-link ${activeLink === '/adminUniversity' ? 'active' : ''}`} onClick={() => handleSelect('/adminUniversity')}>
                    <FontAwesomeIcon icon={faUniversity} className="icon" /> <span>University</span>
                </Nav.Link>
                <Nav.Link href="/adminFac" eventKey="/adminFac" className={`nav-link ${activeLink === '/adminFac' ? 'active' : ''}`} onClick={() => handleSelect('/adminFac')}>
                    <FontAwesomeIcon icon={faUserTie} className="icon" /> <span>Faculty</span>
                </Nav.Link>
                <Nav.Link href="/department" eventKey="/department" className={`nav-link ${activeLink === '/department' ? 'active' : ''}`} onClick={() => handleSelect('/department')}>
                    <FontAwesomeIcon icon={faBuilding} className="icon" /> <span>Department</span>
                </Nav.Link>
                <Nav.Link href="/details" eventKey="/details" className={`nav-link ${activeLink === '/details' ? 'active' : ''}`} onClick={() => handleSelect('/details')}>
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" /> <span>Details</span>
                </Nav.Link>
                <Nav.Link href="/user-question" eventKey="/user-question" className={`nav-link ${activeLink === '/user-question' ? 'active' : ''}`} onClick={() => handleSelect('/user-question')}>
                    <FontAwesomeIcon icon={faQuestionCircle} className="icon" /> <span>User Questions</span>
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
