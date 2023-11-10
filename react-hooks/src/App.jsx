import { useState, useEffect } from "react";
import { TodoContext } from "./contexts/TodoContext";
import * as todoService from "./services/todoService";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoCreateModal } from "./components/TodoCreateModal/TodoCreateModal";
import styles from "./components/TodoList/TodoList.module.css";

const baseUrl = "http://localhost:3030/jsonstore/todos";
function App() {
    const [todos, setTodos] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const openCreateModal = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
    };

    useEffect(() => {
        todoService.getAll(baseUrl).then((data) => setTodos(data));
    }, []);

    const todoCreate = async (data) => {
        const result = await todoService.create(baseUrl, data);
        setTodos((state) => [...state, result]);
        closeCreateModal();
    };
    const todoDelete = async (todoId) => {
        await todoService.remove(`${baseUrl}/${todoId}`, todoId);
        setTodos((state) => state.filter((x) => x._id !== todoId));
    };

    const todoComplete = async (title, isCompleted, todoId) => {
        const data = {
            title,
            isCompleted: !isCompleted,
            _id: todoId,
        };

        const result = await todoService.changeStatus(
            `${baseUrl}/${todoId}`,
            data
        );
        setTodos((state) => state.map((x) => (x._id === todoId ? result : x)));
    };
    const contextValue = {
        todoComplete,
        todoDelete,
    };
    return (
        <>
            <div className="box">
                <TodoContext.Provider value={contextValue}>
                    <TodoList
                        todos={todos}
                        todoCreate={todoCreate}
                        closeCreateModal={closeCreateModal}
                        openCreateModal={openCreateModal}
                    >
                        <button
                            className={styles["todo__btn-add"]}
                            onClick={openCreateModal}
                        >
                            Add
                        </button>
                    </TodoList>
                </TodoContext.Provider>
                {showCreateModal && (
                    <TodoCreateModal
                        closeCreateModal={closeCreateModal}
                        todoCreate={todoCreate}
                    />
                )}
            </div>
        </>
    );
}

export default App;
