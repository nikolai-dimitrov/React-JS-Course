import { useContext } from "react";
import { TodoContext } from "../../../contexts/TodoContext";
import styles from "./TodoItem.module.css";
export const TodoItem = ({ title, _id, isCompleted }) => {
    const { todoComplete, todoDelete } = useContext(TodoContext);
    return (
        <li className={styles["todo__item"]}>
            <p
                className={`${styles["todo__title"]} ${
                    isCompleted ? styles["crossed"] : ""
                }`}
            >
                {title}
            </p>
            <div className={styles["todo__btn-container"]}>
                <button
                    onClick={() => todoComplete(title, isCompleted, _id)}
                    className={
                        isCompleted
                            ? styles["not-complete"]
                            : styles["complete"]
                    }
                >
                    {isCompleted ? "Renew" : "Complete"}
                </button>
                <button onClick={() => todoDelete(_id)}>X</button>
            </div>
        </li>
    );
};
