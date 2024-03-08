
const PromptApi = {

    getAllPrompt : async () => {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prompts`, {
                headers: {
                    "Content-Type":  "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("idToken")}`
                }
            })

            if(response.ok){
                const data = await response.json();
                console.log(data);
                return data;
            
            } 
        } catch (error) {
            console.log(error);
        }
    },

    getRandomPrompt : async(idToken : string | undefined) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prompt`, {
                headers: {
                    "Content-Type":  "application/json",
                    "Authorization": `Bearer ${idToken}`
                }
            })

            if(response.ok){
                const data = await response.json();
                console.log(data);
                return data;
            
            } 

        } catch (error) {
            console.log(error);
        }
    }



}

export default PromptApi;