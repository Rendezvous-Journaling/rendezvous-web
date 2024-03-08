// components/Navbar.tsx
"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './MyNavbar.module.css'


export const MyNavbar = () => {

  const [isSignedIn, setIsSignedIn] = useState(!!sessionStorage.getItem('idToken'));

  const handleSignout = () => {
    sessionStorage.removeItem('idToken');
    setIsSignedIn(false);
  }

  return (
    <Navbar expand="lg" className="py-4">
    <Container>
        <Navbar.Brand href="/">
          <span className={`${styles.navbarBrand} fw-bold`}>rendezvous.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">
              <span className={`${styles.navbarLink} px-4 `}>INFO</span>
            </Nav.Link>
            <Nav.Link href={isSignedIn ? "/dashboard" : "/signup"} className={`${styles.navbarLink} px-4`}>
              {isSignedIn ? "DASHBOARD" : "SIGN UP"}
            </Nav.Link>
            
            <Nav.Link href={isSignedIn ? "/" : "/signin"} className={`${styles.navbarLink} px-4`} onClick={isSignedIn ? handleSignout : ()=>{} }>
              {isSignedIn ? "LOGOUT" : "SIGN IN"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

