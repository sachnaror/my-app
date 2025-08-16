import { createContext, useState } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
    const [user, setUser] = useState({ name: "Guest", role: "Visitor" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
