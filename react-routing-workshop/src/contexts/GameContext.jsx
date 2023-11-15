import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { gameServiceFactory } from "../services/gameServiceFactory";
import { AuthContext } from "./AuthContext";
export const GameContext = createContext();
export const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const gameService = gameServiceFactory(token);

    useEffect(() => {
        gameService.getAll().then((result) => setGames(Object.values(result)));
    }, []);

    //Create handler
    const gameCreateHandler = async (data) => {
        //TODO:Validation and Error Handling.
        //Create game.
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
    const gameContextValue = {
        gameDeleteHandler,
        gameEditHandler,
        gameCreateHandler,
        games,
    };

    return (
        //
        <GameContext.Provider value={gameContextValue}>
            {children}
        </GameContext.Provider>
    );
};

export const GamesContextLayout = () => {
    return (
        <GameProvider>
            <Outlet />
        </GameProvider>
    );
};
