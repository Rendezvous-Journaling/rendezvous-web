"use client"
import { Col, Container, Row } from "react-bootstrap";
import { UserPoolApi } from "../apis/UserPoolApi";
import Link from "next/link";
import { FormEvent } from "react";

 
export default function Page() {

  const initiateAuth = async (username : string, password: string) => {

    const credentials = {
      username: username,
      password: password
    }

    const response = await UserPoolApi.signInUser(credentials);
    alert(response?.message);
   
  }

  const handleSignIn = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let username = (e.currentTarget.elements.namedItem('uname') as HTMLInputElement)?.value;
    let password = (e.currentTarget.elements.namedItem('pwd') as HTMLInputElement)?.value;

    initiateAuth(username, password);
  }


  return(
    <Container>

      <Container fluid>
        <div className="text-center">
          <h1 className="fs-3 fw-bold py-2">Let's get you logged in.</h1>
          <p className="py-2">Don't have an account? <Link href="/signin">Sign up here</Link></p>
        </div>
        <form className="reg-form d-flex justify-content-center align-items-center" name="regForm" method="post" onSubmit={handleSignIn}>

          <Row>

            <Col>
             
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
                  id="pwd"
                  type="password"
                  name="pwd"
                  placeholder="Password"
                />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="d-flex justify-content-center align-items-center py-5">
                <input className="fw-bold py-2 px-5" type="submit" value="Sign In"/>
              </div>

            </Col>

          </Row>
        </form>
      </Container>
      
    </Container>
  ) 
}