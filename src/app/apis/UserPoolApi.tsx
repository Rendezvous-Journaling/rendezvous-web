import 'dotenv/config'
import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandInput, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import {  SignInResponse, SignUpResponse } from "../types/UserPoolTypes";

const client = new CognitoIdentityProviderClient({region: "us-west-1"});
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

export const UserPoolApi = {

    signUpUser: async ({username, password, email, zoneInfo, birthdate, gender, picture, family_name, given_name}: {
        username: string;
        password: string;
        email:string;
        zoneInfo: string;
        birthdate: string;
        gender: string;
        picture: string;
        family_name: string;
        given_name: string;

    }) => {
        console.log(process.env.CLIENT_ID);
        console.log(process.env);
        const command = new SignUpCommand({
            ClientId: clientId,
            Username: username,
            Password: password,
            UserAttributes: [
                {Name: "email", Value: email}, {Name: "zoneinfo", Value: zoneInfo}, 
                {Name: "birthdate", Value: birthdate},
                {Name: "gender", Value: gender},
                {Name: "picture", Value: picture},
                {Name: "family_name", Value: family_name},
                {Name: "given_name", Value: given_name}
            ]
        });

        try{
            console.log("Command:", command);
            const response = await client.send(command);


            if(response){
                console.log(response);
                
                const signUpResponse : SignUpResponse = {
                    message: "Your account was created. You will be receiving an verification link in your email shortly.",
                    response: response
                }
                return signUpResponse;
            }


        } catch(error: any){

            const signUpResponse: SignUpResponse = {
                message: "Could not sign up",
                response: error
            }
            console.error("Error in signing user up", error);
            return signUpResponse;
           
        }
        
    },

    signInUser: async({username, password} : {
        username: string,
        password: string
    }) => {
        console.log(process.env.CLIENT_ID);
        console.log(process.env);
        const input: InitiateAuthCommandInput = {
            AuthFlow: "USER_PASSWORD_AUTH",
            AuthParameters: {
                USERNAME: username,
                PASSWORD: password,
            },
            ClientId: clientId,
        };
        
        const command = new InitiateAuthCommand(input);

        try {
            
            const response = await client.send(command);

            if(response){
                console.log(response);
                const signInResponse : SignInResponse = {
                    message: "You have logged in!",
                    response: response
                }

                sessionStorage.setItem("idToken", response.AuthenticationResult?.IdToken as string);

                return signInResponse;
            }

        } catch (error: any) {
            console.log(error);
            const errorResponse : SignInResponse = {
               message: "Invalid username or password",
               response: error
            }

            return errorResponse;
        }
        
    }

}