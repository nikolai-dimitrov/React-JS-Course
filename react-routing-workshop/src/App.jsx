import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { GameCatalog } from "./components/GameCatalog/GameCatalog";
import { GameCreate } from "./components/GameCreate/GameCreate";
import { GameEdit } from "./components/GameEdit/GameEdit";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Footer } from "./components/Footer/Footer";
import { get, post } from "./utils/requester";
import * as gameService from "./services/gameService";
const baseUrl = "http://localhost:3030/jsonstore/games";
function App() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll().then((result) => setGames(Object.values(result)));
    }, []);

    const gameCreateHandler = async (data) => {
        //Create game
        const result = await gameService.create(data);
        //Add into state.
        setGames((state) => [...state, result]);
        //Redirect to games catalog.
        navigate("/catalog");
    };
    console.log("RENDERING APP");
    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/catalog"
                        element={<GameCatalog games={games} />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/game/create"
                        element={
                            <GameCreate gameCreateHandler={gameCreateHandler} />
                        }
                    />
                    <Route
                        path="/game/details/:gameId"
                        element={<GameDetails />}
                    />
                    {/* <Route path="/game/edit/:gameId" element={<GameEdit />} /> */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
