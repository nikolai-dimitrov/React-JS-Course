import { TodoItem } from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos, children }) => {
    return (
        <div className={styles["todo__container"]}>
            <ul className={styles["todo_list"]}>
                {todos.map((todo) => (
                    <TodoItem key={todo._id} {...todo} />
                ))}
            </ul>
            {children}
        </div>
    );
};
