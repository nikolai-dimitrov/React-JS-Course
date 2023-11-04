import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterFilms = () => {
    const [films, setFilms] = useState([]);
    const { characterId } = useParams();

    // fetch data from server -> '/characters/characterId/films' -> return all films for this character.
    // Fetch all films because SW API doesn't support fetching films for specific character only.
    useEffect(() => {
        fetch(`https://swapi.dev/api/films`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFilms(data.results);
            });
    }, [characterId]);
    return (
        <>
            <h5>Character films: </h5>
            {films.map((f) => {
                const id = f.url
                    .split("/")
                    .filter((x) => x)
                    .slice(-1)
                    .toString();
                return (
                    <li key={f.url}>
                        <Link to={`/films/${id}`}>{f.title}</Link>
                    </li>
                );
            })}
        </>
    );
};
