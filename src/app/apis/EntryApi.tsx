
const EntryApi = {

    getAllEntries : async (idToken : string | undefined) => {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/entries/${process.env.NEXT_PUBLIC_UID}`, {
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
    },

    getEntry : async (idToken : string | undefined, entryId : number) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/entry/${entryId}/${process.env.NEXT_PUBLIC_UID}`, {
                headers: {
                    "Content-Type":  "application/json",
                    "Authorization": `Bearer ${idToken}`
                }
            })

            if(response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            }

        } catch (error) {
            console.log(error);
        }
    }

    



}

export default EntryApi;