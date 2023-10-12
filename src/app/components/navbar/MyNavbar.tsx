// components/Navbar.tsx
"use client"

import React from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './MyNavbar.module.css'


export const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="py-4">
    <Container>
        <Navbar.Brand href="/" className={`${styles.navbarBrand} fw-bold`}>rendezvous.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className={`${styles.navbarLink} px-4`} py-4>INFO</Nav.Link>
            <Nav.Link href="/signup" className={`${styles.navbarLink} px-4`}>SIGN UP</Nav.Link>
            <Nav.Link href="/signin" className={`${styles.navbarLink} px-4`}>LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

