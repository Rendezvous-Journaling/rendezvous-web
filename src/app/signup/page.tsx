"use client"
import { Container } from "react-bootstrap";
import { UserPoolApi } from "../apis/UserPoolApi";


 
export default function Page() {

  const createUser: () => boolean = () => {

    

    const userCredentials = {
      clientId: "4tpt5v7leo5nma2qg5fjn3739f",
      username: "albertpaez",
      password: "Password123!",
      email:"albertzeap@yahoo.com",
      zoneInfo: "string",
      birthdate: "11/14/2000",
      gender: "Male",
      picture: "string",
      family_name: "Paez",
      given_name: "Alby"
    }

    UserPoolApi.signUpUser(userCredentials);

    return true;
  };

  return (
    <Container>
      <button onClick={createUser}>Signup</button>
      
    </Container>
  )
}