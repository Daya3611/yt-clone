import React, {useContext,createContext,useState} from 'react';


const ThemeContext= createContext();


export const ThemeProvider= ({children}) =>{
    const [isDarkMode,setIsDarkMode]= useState();
    const toggleTheme= () =>{
        setIsDarkMode(prevMode=> !prevMode);
    }
    return (
        <ThemeContext.Provider
        value={{toggleTheme,isDarkMode}}
        >
         {children}
        </ThemeContext.Provider>
    )
}

export const useTheme= () => useContext(ThemeContext)