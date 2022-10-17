import React, { createContext, useEffect } from "react";

export const WindowContext = createContext<any>({});

export const WindowProvider = ({ children }: any) => {

    const [scroll, setScroll] = React.useState<any>("auto");

    useEffect(() => {
        window.document.body.style.overflowY = scroll;
        window.document.body.style.touchAction = "none";
    }, [scroll]);

    return <WindowContext.Provider value={{scroll, setScroll}}>
        {children}
    </WindowContext.Provider>
};