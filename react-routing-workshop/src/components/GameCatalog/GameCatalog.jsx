import { GameItem } from "./GameItem/GameItem";
export const GameCatalog = ({ games }) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games ? (
                games.map((g) => <GameItem key={g._id} {...g} />)
            ) : (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};
