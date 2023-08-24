import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themeOption";


const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const defaultValue = JSON.parse(localStorage.getItem('theme')) || themeOptions[0].value;
    const[theme,setTheme]=useState(defaultValue)

    const values={
        theme,
        setTheme
    }
    return(<ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>)
}
export const useTheme=()=>useContext(ThemeContext);