// components/Navbar.tsx
"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './MyNavbar.module.css'


export const MyNavbar = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect( () => {
    sessionStorage.getItem('token') ? setIsSignedIn(true) : setIsSignedIn(false);
  },[])

  return (
    <Navbar expand="lg" className="py-4">
    <Container>
        <Navbar.Brand href="/" className={`${styles.navbarBrand} fw-bold`}>rendezvous.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className={`${styles.navbarLink} px-4 `}>INFO</Nav.Link>
            <Nav.Link href={isSignedIn ? "/" : "/signup"} className={`${styles.navbarLink} px-4`}>{isSignedIn ? "HOME" : "SIGN UP"}</Nav.Link>
            <Nav.Link href={isSignedIn ? "/" : "/signin"} className={`${styles.navbarLink} px-4`}>{isSignedIn ? "LOGOUT" : "SIGN IN"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

