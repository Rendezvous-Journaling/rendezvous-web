// components/Navbar.tsx
"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './MyNavbar.module.css'
import { UserContext, UserContextInterface } from "@/app/context/UserProvider";

export const MyNavbar = () => {

  const { idToken, deleteIdToken } = React.useContext(UserContext) as UserContextInterface;
  const [isSignedIn, setIsSignedIn] = useState(!!idToken);

  useEffect(() => {
    idToken ? setIsSignedIn(true) : setIsSignedIn(false);
    console.log(idToken);
  },[idToken] )

  const handleSignout = () => {
    deleteIdToken();
  }

  return (
    <Navbar expand="lg" className="py-4">
    <Container>
        <Navbar.Brand>
          <Link href={"/"} className={`${styles.navbarBrand} fw-bold`}>rendezvous.</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          
            <Link href={'/'} className={`${styles.navbarLink} px-4 `}>
              INFO
            </Link>
     
            <Link href={isSignedIn ? "/dashboard" : "/signup"} className={`${styles.navbarLink} px-4`}> 
              {isSignedIn ? "DASHBOARD" : "SIGN UP"}
            </Link>
          
            <Link href={isSignedIn ? "/" : "/signin"} className={`${styles.navbarLink} px-4`} onClick={isSignedIn ? handleSignout : ()=>{} } > 
              {isSignedIn ? "LOGOUT" : "SIGN IN"}
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

