import { Prompt } from "./PromptTypes";

export interface Entry {
    id: number,
    content: string,
    userId: string,
    prompt: Prompt,
    createdAt: Date
}