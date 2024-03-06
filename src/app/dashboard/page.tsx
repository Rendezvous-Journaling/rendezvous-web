"use client"
import { useEffect, useState } from "react";
import PromptApi from "../apis/PromptApi";
import { Prompt} from "../types/PromptTypes";


export default function Page() {

  const [prompt, setPrompt] = useState<Prompt>();

  useEffect(() => {

   PromptApi.getRandomPrompt().then(data => setPrompt(data));
  }, [])


  return (
    <div className="d-flex justify-content-center align-items-center">
    {prompt ? <>{prompt.content}</> : <></>}
    </div>
  )
}
