import { SignIn } from "@clerk/nextjs";
import { Navbar } from "../components/navbar/Navbar";
 
export default function Page() {
  return(
    <>
      <Navbar/>
      <SignIn />;
    </>
  ) 
}