import { createContext, useContext, useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

const ThemeContext=createContext()

export const useTheme=()=>{
    return useContext(ThemeContext)
}

export const ThemeProvider=({children})=>{
    const [isDarkmode,setisDarkmode]=useState(false)

    const toggletheme=()=>{
       
     
        setisDarkmode((e)=>!e)
    }

    const theme=isDarkmode ? "dark" : "light"

    useEffect(()=>{
        document.documentElement.setAttribute("lv-theme",theme)
    },[isDarkmode])

    return (
        <ThemeContext.Provider value={{theme,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}