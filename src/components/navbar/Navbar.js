//import useState hook to create menu collapse state
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <>
      <Navbar
        style={{
          marginLeft: '1vh',
          height: '6.5vh',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgb(0,0,0,0.1)',
        }}
      >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a>Account</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavBar;
