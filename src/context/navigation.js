import { createContext, useState,useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {
const [currentPath,setCurrentPath] = useState(window.location.pathname);

useEffect(()=>{
    const handler = () =>{
        setCurrentPath(window.location.pathname)
    };
    window.addEventListener('popstate',handler)
    return ()=> {window.removeEventListener()}
},[])

    function navigate(path){
        window.history.pushState({},'',path);
        setCurrentPath(path);
    }

 return <NavigationContext.Provider value={{navigate, currentPath}}>
    {children}
 </NavigationContext.Provider>
}

export {NavigationContext};
export default NavigationProvider;