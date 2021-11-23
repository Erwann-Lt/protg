import React from "react"
import logo2 from './logo2.png'
import {  useHistory } from "react-router-dom"
const Context = React.createContext()


function ContextProvider(props) {


const smallLogo= <img src={logo2} alt='' />


let history = useHistory();

const backHomePage = () => {
    history.push("/");
}


 
return (
<Context.Provider value={{smallLogo, backHomePage}}>
{props.children}
</Context.Provider>
)
}

export {ContextProvider, Context}