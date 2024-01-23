import { CognitoIdentityClient, ListIdentityPoolsCommand } from "@aws-sdk/client-cognito-identity";
import { CognitoIdentityProviderClient, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";

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
        const client = new CognitoIdentityProviderClient({region: "us-west-1"});

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
            }


        } catch(error){
            console.error("Error in signing user up", error);
        }
            

        
    }

}