import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
export const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext);
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/catalog">All games</Link>
                {/* Logged-in users */}
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/game/create">Create Game</Link>
                        {email}
                        <Link to="/logout">Logout</Link>
                    </div>
                )}

                {/* Guest users */}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};
