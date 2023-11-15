import { useState, useEffect, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameServiceFactory";
import * as commentService from "../../services/commentService";
import { AuthContext } from "../../contexts/AuthContext";
import { GameContext } from "../../contexts/GameContext";
import { AddComment } from "./AddComment/AddComment";
import { gameReducer } from "../../reducers/gameReducer";

export const GameDetails = () => {
    const { token, userId, isAuthenticated, email } = useContext(AuthContext);
    const { gameDeleteHandler } = useContext(GameContext);
    const [game, dispatch] = useReducer(gameReducer, {});

    const { gameId } = useParams();

    const gameService = gameServiceFactory(token);

    useEffect(() => {
        Promise.all([
            gameService.getOne(gameId),
            commentService.getAll(gameId),
        ]).then(([gameData, comments]) => {
            const gameObj = {
                ...gameData,
                comments,
            };
            dispatch({ type: "GAME_FETCH", game: gameObj });
        });
    }, [gameId]);
    
    const isOwner = game._ownerId === userId;

    const onCommentSubmit = async (value) => {
        const result = await commentService.create(gameId, value);
        dispatch({ type: "COMMENT_ADD", payload: result, email: email });
    };
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>
                {/* Comments */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {game.comments?.map((c) => (
                            <li className="comment" key={c._id}>
                                <p>
                                    {c?.author.email}: {c.comment}
                                </p>
                            </li>
                        ))}
                    </ul>
                    {!game.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/game/edit/${gameId}`} className="button">
                            Edit
                        </Link>
                        <a
                            href="#"
                            className="button"
                            onClick={(e) => gameDeleteHandler(e, gameId)}
                        >
                            Delete
                        </a>
                    </div>
                )}
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            {isAuthenticated && (
                <AddComment onCommentSubmit={onCommentSubmit} />
            )}
        </section>
    );
};
