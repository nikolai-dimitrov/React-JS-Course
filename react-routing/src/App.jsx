import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navigation } from "./components/Navigation";
import { CharacterList } from "./components/CharacterList";
import { Character } from "./components/Character";
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about/me" element={<h1>About me</h1>} />
                    <Route
                        path="/about/*"
                        element={<h1>All routes about</h1>}
                    />
                    <Route
                        path="/characters/:characterId/*" // nested router in it
                        element={<Character />}
                    />
                    <Route path="/characters" element={<CharacterList />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </header>
            <h3>TEST INTO APP BELOW NAV</h3>
        </div>
    );
}

export default App;
