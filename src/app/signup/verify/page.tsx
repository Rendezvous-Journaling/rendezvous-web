import { MyNavbar } from "@/app/components/navbar/MyNavbar"

 
export default function Page() {
    return(
      <>
        <MyNavbar/>
        <p>Verfication Code has been sent to </p>
        <form className="ver-form" name="verForm" method="post">
            <label className="form-label" htmlFor="verCode">Verification Code</label>
            <input 
                className="form-control" 
                id="verCode" 
                name="verCode"
                type="text"
                placeholder="Verification Code"
            />
        </form>
      </>
    ) 
  }