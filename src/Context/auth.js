import { createContext, useState } from "react";

export const authContext = createContext();


export default function AuthProvider({children}){

    function getFromLocal(){
        return JSON.parse(localStorage.getItem('user'));
    }
    function saveToLocal(val){
        localStorage.setItem("user",JSON.stringify(val));
    }

    const [user,setUser] = useState(getFromLocal() ?? false);

    function saveUserToLocalStorage(userInput){
        saveToLocal(userInput)
        setUser(userInput);
        console.log(userInput);
    }

    function deleteUserFromLocalStorage(){
        localStorage.removeItem('user');
    }
    const data = {
        user,
        saveUserToLocalStorage,
        deleteUserFromLocalStorage
    }

    return (
        <authContext.Provider value={data}>
            {children}
        </authContext.Provider>
    )
}