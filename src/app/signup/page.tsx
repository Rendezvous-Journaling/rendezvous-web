"use client"
import { Col, Container, Row } from "react-bootstrap";
import { UserPoolApi } from "../apis/UserPoolApi";
import { MyNavbar } from "../components/navbar/MyNavbar";
import Link from "next/link";
import { FormEvent } from "react";

import styles from './Signup.module.css';


 
export default function Page() {

  const createUser:  (
    givenName: string,
    familyName: string,
    username: string,
    email: string,
    password: string,
    birthdate: string,
    gender: string,
    picture: string,) => void = async (givenName, familyName, username, email, password, birthday, gender, picture) => {

    const userCredentials = {
      clientId: "4tpt5v7leo5nma2qg5fjn3739f",
      username: username,
      password: password,
      email: email,
      zoneInfo: "PST",
      birthdate: birthday,
      gender: gender,
      picture: picture,
      family_name: familyName,
      given_name: givenName
    }

    const response = await UserPoolApi.signUpUser(userCredentials);
    alert(response);

  };

  const handleSignUp = (e : FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    let givenName = (e.currentTarget.elements.namedItem('fname') as HTMLInputElement)?.value;
    let familyName = (e.currentTarget.elements.namedItem('lname') as HTMLInputElement)?.value;
    let username = (e.currentTarget.elements.namedItem('uname') as HTMLInputElement)?.value;
    let email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)?.value;
    let password = (e.currentTarget.elements.namedItem('pwd') as HTMLInputElement)?.value;
    let birthday = (e.currentTarget.elements.namedItem('bday') as HTMLInputElement)?.value;
    let gender = (e.currentTarget.elements.namedItem('gender') as HTMLInputElement)?.value;
    let picture = (e.currentTarget.elements.namedItem('picture') as HTMLInputElement)?.value;

    createUser(givenName, familyName, username, email, password, birthday, gender, picture);

    console.log(givenName, familyName, username, email, password, birthday, gender, picture);
  }

 

  return (
    <Container>
      <MyNavbar/>

      <Container>
        <h1>Sign Up</h1>
        <p>Already have an account? <Link href="/signin">Sign in here</Link></p>
        <form className="reg-form" name="regForm" method="post" onSubmit={handleSignUp}>

        <Row>
          <Col>
            <label className="form-label" htmlFor="uname">Username</label>
            <input required
              className="form-control"
              id="uname"
              type="text"
              name="uname"
              placeholder="Username"
            />

            <label className="form-label" htmlFor="email">Email</label>
            <input required
              className="form-control"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />

            <label className="form-label" htmlFor="password">Password</label>
            <input required
              className="form-control"
              id="pwd"
              type="password"
              name="pwd"
              placeholder="Password"
            />
          </Col>


          <Col className={`${styles.personalInfo}`}>
            <Row>
              <Col>
                <label className="form-label" htmlFor="fname">First Name</label>
                <input required
                  className="form-control"
                  id="fname"
                  type="text"
                  name="fname"
                  placeholder="First Name"

                />
              </Col>  
              <Col>
                <label className="form-label" htmlFor="lname">Last Name</label>
                <input required
                  className="form-control"
                  id="lname"
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                />
              </Col>            
            </Row>


            <label className="form-label" htmlFor="bday">Birthday</label>
            <input required
              className="form-control"
              id="bday"
              type="text"
              name="bday"
              placeholder="1/1/2000"
            />

            <label className="form-label" htmlFor="email">Gender</label>
            <input required
              className="form-control"
              id="gender"
              type="text"
              name="gender"
              placeholder="Male"
            />

            <label className="form-label" htmlFor="email">Picture</label>
            <input required
              className="form-control"
              id="picture"
              type="text"
              name="picture"
              placeholder="Picture"
            />

          </Col>
          <input className="my-3" type="submit" value="Create Account"/>
        </Row>



        </form>
      </Container>
      
    </Container>
  )
}