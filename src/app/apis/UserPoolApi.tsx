import { CognitoIdentityClient, ListIdentityPoolsCommand, NotAuthorizedException } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandInput, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import {  SignInResponse, SignUpResponse } from "../types/UserPoolTypes";

const client = new CognitoIdentityProviderClient({region: "us-west-1"});
export const UserPoolApi = {

    signUpUser: async ({clientId, username, password, email, zoneInfo, birthdate, gender, picture, family_name, given_name}: {
        clientId: string;
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

        const input: InitiateAuthCommandInput = {
        
            AuthFlow: "USER_PASSWORD_AUTH",
            AuthParameters: {
                USERNAME: username,
                PASSWORD: password,
            },
            ClientId: "4tpt5v7leo5nma2qg5fjn3739f",
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

                sessionStorage.setItem("token", response.AuthenticationResult?.AccessToken as string);

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