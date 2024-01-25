"use client"
import { Col, Container, Row } from "react-bootstrap";
import { UserPoolApi } from "../apis/UserPoolApi";
import { MyNavbar } from "../components/navbar/MyNavbar";
import Link from "next/link";
import { FormEvent } from "react";

import styles from './Signup.module.css';
import { useRouter } from "next/navigation";




 
export default function Page() {

  const router = useRouter();

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

    router.push('signup/verify');

    

  

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

      <Container fluid>
        <div className="text-center">
          <h1 className="fs-3 fw-bold py-2">Need an account? Lets create one here.</h1>
          <p className="py-2">Already have an account? <Link href="/signin">Sign in here</Link></p>
        </div>
        <form className="reg-form d-flex justify-content-center align-items-center" name="regForm" method="post" onSubmit={handleSignUp}>

          <Row>

            <Col className={`${styles.personalInfo}`}>
              <Row>
                <Col>
                  <div className="form-floating mb-3">
                    <input required
                      className="form-control"
                      id="fname"
                      type="text"
                      name="fname"
                      placeholder="First Name"
                    />
                    <label className="form-label" htmlFor="fname">First Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input required
                      className="form-control"
                      id="bday"
                      type="date"
                      name="bday"
                      placeholder="1/1/2000"
                    />
                <label className="form-label" htmlFor="bday">Birthday</label>  


              </div>
                
                </Col>

                <Col>
                  <div className="form-floating mb-3">
                    <input required
                      className="form-control"
                      id="lname"
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                    />
                    <label className="form-label" htmlFor="lname">Last Name</label>                  
                  </div>
                
                  <div className="form-floating mb-3">
                    <input required
                      className="form-control"
                      id="gender"
                      type="text"
                      name="gender"
                      placeholder="Male"
                    />
                    <label className="form-label" htmlFor="email">Gender</label>              
                  </div>

                </Col>
              </Row>
                      

              
              <div className="form-floating mb-3">
                <input required
                  className="form-control"
                  id="picture"
                  type="file"
                  name="picture"
                  placeholder="Picture"
                />
                <label className="form-label" htmlFor="email">Picture</label>
              </div>


              {/* <h2 className="text-center">Account Credentials</h2> */}
              <div className="form-floating mb-3">
                <input required
                  className="form-control"
                  id="uname"
                  type="text"
                  name="uname"
                  placeholder="Username"
                />
                <label className="form-label" htmlFor="uname">Username</label>

              </div>

              <div className="form-floating mb-3">
                <input required
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <label className="form-label" htmlFor="email">Email</label>
              </div>

              <div className="form-floating mb-3">
                <input required
                  className="form-control"
                  id="pwd"
                  type="password"
                  name="pwd"
                  placeholder="Password"
                />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="d-flex justify-content-center align-items-center py-5">
                <input className="fw-bold py-2 px-5" type="submit" value="Create Account"/>
              </div>

            </Col>

          </Row>
        </form>
      </Container>
      
    </Container>
  )
}