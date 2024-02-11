"use client"
import { UserPoolApi } from "../apis/UserPoolApi";

 
export default function Page() {

  const practiceLogin = async () => {

    const credentials = {
      username: "albertzeap",
      password: "Felix3271!"
    }

    const response = await UserPoolApi.signInUser(credentials);
    alert(response?.message);
   


  }


  return(
    <>
      <button onClick={practiceLogin}>Login</button>
    </>
  ) 
}