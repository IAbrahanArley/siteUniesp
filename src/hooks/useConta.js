import { useEffect, useState } from "react";

export const useConta = () => {

    const [ auth, setAuth] = useState(false);
    useEffect(() =>{
        const user = JSON.parse(localStorage.getItem('user') ) || null;
        user ? setAuth(true) : setAuth(false);

    },  [])
    return { auth };
};