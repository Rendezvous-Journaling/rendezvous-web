import "bootstrap/dist/css/bootstrap.min.css";
import { MyNavbar } from './components/navbar/MyNavbar'
import { Prompt } from './components/prompt/Prompt'

export default function Home() {

  return (
    <main>
      <MyNavbar/>
      <Prompt/>
    </main>
  )
}
