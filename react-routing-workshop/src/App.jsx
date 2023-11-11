import { useState, useEffect } from "react";
// import { useService } from "./hooks/useService";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Logout } from "./components/Logout/Logout";
import { Home } from "./components/Home/Home";
import { GameCatalog } from "./components/GameCatalog/GameCatalog";
import { GameCreate } from "./components/GameCreate/GameCreate";
import { GameEdit } from "./components/GameEdit/GameEdit";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Footer } from "./components/Footer/Footer";
import { NotFound } from "./components/NotFound/NotFound";
import { gameServiceFactory } from "./services/gameServiceFactory";
import { authServiceFactory } from "./services/authServiceFactory";

import { AuthContext } from "./contexts/AuthContext";
import { GameContext } from "./contexts/GameContext";

const baseUrl = "http://localhost:3030/jsonstore/games";
function App() {
    const [games, setGames] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const authService = authServiceFactory(user.accessToken);
    const gameService = gameServiceFactory(user.accessToken);

    useEffect(() => {
        gameService.getAll().then((result) => setGames(Object.values(result)));
    }, []);

    //Create handler
    const gameCreateHandler = async (data) => {
        //TODO:Validation and Error Handling.
        //Create game
        const result = await gameService.create(data);
        //Add into state.
        setGames((state) => [...state, result]);
        //Redirect to games catalog.
        navigate("/catalog");
    };

    //Edit handler
    const gameEditHandler = async (formData, gameId) => {
        //TODO:Validation and Error Handling.
        const result = await gameService.edit(formData, gameId);
        setGames((state) => state.map((g) => (g._id === gameId ? result : g)));
        navigate(`/game/details/${gameId}`);
    };

    //Delete handler
    const gameDeleteHandler = async (e, gameId) => {
        //TODO: Modal to confirm deletion.
        await gameService.remove(gameId);
        setGames((state) => state.filter((g) => g._id !== gameId));
        navigate("/catalog");
    };

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
    const gameContextValue = {
        gameDeleteHandler,
        gameEditHandler,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <GameContext.Provider value={gameContextValue}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/catalog"
                                element={<GameCatalog games={games} />}
                            />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/logout" element={<Logout />} />

                            <Route
                                path="/game/create"
                                element={
                                    <GameCreate
                                        gameCreateHandler={gameCreateHandler}
                                    />
                                }
                            />
                            <Route
                                path="/game/details/:gameId"
                                element={<GameDetails />}
                            />
                            <Route
                                path="/game/edit/:gameId"
                                element={<GameEdit />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </GameContext.Provider>
                </main>
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
