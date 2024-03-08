"use client"

import React from "react";
import { createContext } from "react";

type SetValue = (value: string | undefined) => void;
type DeleteValue = () => void;

export type UserContextInterface = {
    idToken: string | undefined,
    addIdToken: SetValue,
    deleteIdToken: DeleteValue,
}

export const UserContext = createContext<UserContextInterface | null>(null);

const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [idToken, setIdToken] = React.useState<string>();

    const addIdToken = (token : string | undefined) => {
        setIdToken(token);
    }

    const deleteIdToken = () => {
        setIdToken("");
    }

    return(
        <UserContext.Provider value={{idToken, addIdToken, deleteIdToken}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;