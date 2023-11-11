import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { GameContext } from "../../contexts/GameContext";
import { AuthContext } from "../../contexts/AuthContext";
import { gameServiceFactory } from "../../services/gameServiceFactory";
export const GameEdit = () => {
    const { gameEditHandler } = useContext(GameContext);
    const { token } = useContext(AuthContext);
    const { gameId } = useParams();
    const { formValues, onChangeHandler, onSubmit, changeInitialValues } =
        useForm(
            {
                title: "",
                imageUrl: "",
                summary: "",
                category: "",
                maxLevel: "",
            },
            gameEditHandler
        );

    const gameService = gameServiceFactory(token);

    useEffect(() => {
        gameService.getOne(gameId).then((res) => {
            const { title, imageUrl, summary, category, maxLevel } = res;
            return changeInitialValues({
                title,
                imageUrl,
                summary,
                category,
                maxLevel,
            });
        });
    }, [gameId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={(e) => onSubmit(e, gameId)}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formValues.title}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formValues.category}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={formValues.maxLevel}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={formValues.imageUrl}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formValues.summary}
                        onChange={onChangeHandler}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Edit Game"
                    />
                </div>
            </form>
        </section>
    );
};
