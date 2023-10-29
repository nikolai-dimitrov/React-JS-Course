import { useEffect } from "react";

export default function Todo({
  _id,
  text,
  isCompleted,
  changeStatusHandler,
  deleteTodoHandler,
  editTodoHandler,
}) {
  //Update
  useEffect(() => {
    console.log(`This task changed his status: ${text}`);
  }, [isCompleted]);
  // Delete
  useEffect(() => {
    return () => {
      console.log(`This task is Deleted: ${text}`);
    };
  }, [text]);
  return (
    <tr className={`todo ${isCompleted ? "is-completed" : ""}`}>
      <td>{text}</td>
      <td>{isCompleted ? "Complete" : "Not Complete"}</td>
      <td className="todo-action">
        <button
          className="btn todo-btn"
          onClick={() => changeStatusHandler(_id)}
        >
          Change status
        </button>
        <button
          className={"btn todo-btn"}
          onClick={() => deleteTodoHandler(_id)}
        >
          Delete
        </button>
        <button className={"btn todo-btn"} onClick={() => editTodoHandler(_id)}>
          Edit
        </button>
      </td>
    </tr>
  );
}
