import { useParams, useNavigate, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { CharacterFilms } from "./CharacterFilms";
import styles from "./Navigation.module.css";

const baseUrl = "https://swapi.dev/api/people";

export const Character = () => {
    const { characterId } = useParams();
    const [character, setCharacters] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`${baseUrl}/${characterId}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data);
            });
    }, [characterId]);

    const backBtnHandler = () => {
        navigate(-1); // One page before.
        // navigate("/characters"); // To specific route.
    };
    return (
        <>
            <h1>Character details page.</h1>
            <h1>{character.name}</h1>
            <button onClick={backBtnHandler}>Back</button>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link to="films">Films</Link>
                    </li>
                    <li>
                        <Link to="vehicles">Vehicles</Link>
                    </li>
                    <li>
                        <Link to="starships">Starships</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/films" element={<CharacterFilms />} />
                <Route path="/vehicles" element={<h4>Vehicles h4</h4>} />
                <Route path="/starships" element={<h4>Star Ships h4</h4>} />
            </Routes>
        </>
    );
};
