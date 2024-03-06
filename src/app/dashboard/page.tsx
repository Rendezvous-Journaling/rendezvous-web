"use client"
import { useEffect, useState } from "react";
import PromptApi from "../apis/PromptApi";
import { Prompt} from "../types/PromptTypes";


export default function Page() {

  const [prompts, setPrompts] = useState<Prompt[]>([]);

  useEffect(() => {

   PromptApi.getAllPrompt().then(data => setPrompts(data));
  }, [])


  return (
    <div>
    {prompts ? prompts.map((prompt: Prompt) => (
      <li key={prompt.id}>{prompt.content}</li>
    )): null}
    </div>
  )
}
