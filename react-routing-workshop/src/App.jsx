import { useState, useEffect } from "react";
// import { useService } from "./hooks/useService";
import { Routes, Route } from "react-router-dom";
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

import { AuthProvider } from "./contexts/AuthContext";

import { GameProvider, GamesContextLayout } from "./contexts/GameContext";
const baseUrl = "http://localhost:3030/jsonstore/games";
function App() {
    return (
        <AuthProvider>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route element={<GamesContextLayout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/catalog" element={<GameCatalog />} />
                            <Route
                                path="/game/create"
                                element={<GameCreate />}
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
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
