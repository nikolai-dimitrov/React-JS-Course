import { useForm } from "../../hooks/useForm";
import styles from "./TodoCreateModal.module.css";
export const TodoCreateModal = ({ closeCreateModal, todoCreate }) => {
    const { formValues, onChangeHandler, onSubmit } = useForm(
        {
            title: "",
            isCompleted: false,
        },
        todoCreate
    );

    return (
        <div className={styles["todo__modal-background"]}>
            <form className={styles["todo__form"]} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formValues.title}
                    onChange={onChangeHandler}
                />
                <button>Add</button>
                <button onClick={closeCreateModal}>Close</button>
            </form>
        </div>
    );
};
