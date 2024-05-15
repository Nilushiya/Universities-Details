import React, { useEffect, useState } from 'react'
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
} from 'cdbreact';

const University = () => {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split('/');
    const universityId = pathSegments[2]; 
    const universityName = pathSegments[3];
    // console.log('universityId', universityId);
    // console.log('universityName' , universityName)
    setId(universityId);
    setName(decodeURIComponent(universityName));
   
  }, []);
  // console.log('id', id);
  // console.log('name' , name)
  return (
    <div className='university'>
      <div className="row">
      <div className="col-lg-4">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
            Contrast Multi Level
          </CDBSidebarHeader>

          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem
                suffix={
                  <CDBBadge color="danger" size="small" borderType="pill">
                    new
                  </CDBBadge>
                }
                icon="th-large"
              >
                Dashboard
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem
                icon="sticky-note"
                suffix={
                  <CDBBadge color="danger" size="small" borderType="pill">
                    new
                  </CDBBadge>
                }
              >
                Components
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
            <CDBSidebarMenu>
              <CDBSidebarSubMenu title="Sidemenu" icon="th">
                <CDBSidebarMenuItem> submenu 1</CDBSidebarMenuItem>
                <CDBSidebarMenuItem> submenu 2</CDBSidebarMenuItem>
                <CDBSidebarMenuItem> submenu 3</CDBSidebarMenuItem>
              </CDBSidebarSubMenu>
              <CDBSidebarSubMenu
                title="Sidemenu2"
                icon="book"
                suffix={
                  <CDBBadge color="danger" size="small" borderType="pill">
                    new
                  </CDBBadge>
                }
              >
                <CDBSidebarMenuItem>submenu 1</CDBSidebarMenuItem>
                <CDBSidebarMenuItem>submenu 2</CDBSidebarMenuItem>
                <CDBSidebarMenuItem>submenu 3</CDBSidebarMenuItem>
              </CDBSidebarSubMenu>
              <CDBSidebarSubMenu title="MultiLevel with Icon" icon="table">
                <CDBSidebarMenuItem>submenu 1 </CDBSidebarMenuItem>
                <CDBSidebarMenuItem>submenu 2 </CDBSidebarMenuItem>
                <CDBSidebarSubMenu title="submenu 3">
                  <CDBSidebarMenuItem>submenu 3.1 </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem>submenu 3.2 </CDBSidebarMenuItem>
                  <CDBSidebarSubMenu title="subnt">
                    <CDBSidebarMenuItem>submenu 3.3.1 </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem>submenu 3.3.2 </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem>submenu 3.3.3 </CDBSidebarMenuItem>
                  </CDBSidebarSubMenu>
                </CDBSidebarSubMenu>
              </CDBSidebarSubMenu>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: '20px 5px',
              }}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
      <div className="col-lg-8">
          <h1>Welcome to </h1>
          <h1>{name}</h1>
      </div>
      </div>
    </div>
  )
}

export default University