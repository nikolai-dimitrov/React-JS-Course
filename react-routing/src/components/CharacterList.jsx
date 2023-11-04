import { useEffect, useState } from "react";
import { CharacterListItem  } from "./CharacterListItem ";
const baseUrl = "https://swapi.dev/api/people";
export const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(baseUrl)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
            });
    }, []);
    return (
        <>
            <h1>Star Wars Characters</h1>
            <ul>
                {characters.map((character) => (
                    <CharacterListItem key={character.url} {...character} />
                ))}
            </ul>
        </>
    );
};
