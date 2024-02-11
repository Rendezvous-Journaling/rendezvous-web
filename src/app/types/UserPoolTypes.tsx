
import { InitiateAuthCommandOutput, SignUpCommandOutput } from "@aws-sdk/client-cognito-identity-provider"


export interface SignUpResponse {
    message: string,
    response: SignUpCommandOutput
}

export interface SignInResponse {
    message: string,
    response: InitiateAuthCommandOutput
   
}
