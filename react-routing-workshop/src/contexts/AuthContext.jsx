import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useService } from "../hooks/useService";
import { authServiceFactory } from "../services/authServiceFactory";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState({});
    const [user, setUser] = useLocalStorage("user", {});
    const navigate = useNavigate();
    const authService = authServiceFactory(user.accessToken);

    //Login handler
    const loginHandler = async (formData) => {
        //TODO: Show error for incorrect username or password.
        try {
            const userData = await authService.login(formData);
            const { _id, accessToken, email } = { ...userData };
            setUser({ email, _id, accessToken });
            navigate("/");
        } catch (error) {
            console.log("There is an error.");
        }
    };

    //Register handler
    const registerHandler = async (formData) => {
        const { confirmPassword, ...userCredentials } = formData;
        if (confirmPassword !== userCredentials.password) {
            //TODO: Error message
            return;
        }
        const user = await authService.register(formData);
        //TODO: Add user data into state and redirect to home page.(auto)
        navigate("/login");
    };

    //Logout handler
    const logoutHandler = async () => {
        setUser({});
        authService.logout();
    };

    //Auth Context
    const authContextValue = {
        loginHandler,
        registerHandler,
        logoutHandler,
        userId: user._id,
        email: user.email,
        token: user.accessToken,
        isAuthenticated: !!user.accessToken,
    };
    return (
        //
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

//Easier to import context into components as hook.
// export const useAuthToken = () => {
//     const context = useContext(AuthContext);
//     return context
// };
