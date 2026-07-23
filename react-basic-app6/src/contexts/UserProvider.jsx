import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

const initialUser = {
    name: "성선혁",
    email: "learner@example.com",
    role: "수강생",
};

function UserProvider({ children }) {
    const [user, setUser] = useState(initialUser);

    const updateRole = (role) => {
        setUser((prevUser) => ({
            ...prevUser,
            role,
        }));
    };

    const updateName = (name) => {
        setUser((prevUser) => ({
            ...prevUser,
            name,
        }));
    };

    const resetUser = () => {
        setUser(initialUser);
    };

    const value = useMemo(
        () => ({
            user,
            updateRole,
            updateName,
            resetUser,
        }),
        [user]
    );

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser는 UserProvider 안에서 사용해야 합니다.");
    }

    return context;
}

export default UserProvider