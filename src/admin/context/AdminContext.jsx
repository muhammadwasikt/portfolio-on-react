import React, { createContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../../../firebase";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);

    const checkAdmin = () => {
           onAuthStateChanged(auth, (user) => {
            if (user) {
                setAdmin(true);
            } else {
                setAdmin(false);
            }
        });
    };

    useEffect(() => {
        checkAdmin(); 
    }, []);
    return (
        <AdminContext.Provider value={{ admin }}>
            {children}
        </AdminContext.Provider>
    );
};
