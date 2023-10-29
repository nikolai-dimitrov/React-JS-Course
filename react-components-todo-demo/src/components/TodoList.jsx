import { useState, useEffect } from "react";
import Loading from "./Loading";
import Todo from "./Todo";

export default function TodoList() {
  let [todo, setTodo] = useState([]);
  //Initialize
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodo((state) => Object.values(data));
      });
  }, []);

  function changeStatusHandler(id) {
    setTodo((state) =>
      state.map((t) =>
        t._id === id ? { ...t, isCompleted: !t.isCompleted } : { ...t }
      )
    );
  }
  function deleteTodoHandler(id) {
    setTodo((state) => state.filter((t) => t._id !== id));
  }
  function editTodoHandler(id) {
    let newText = prompt("Enter new task text.");
    setTodo((state) =>
      state.map((t) => (t._id === id ? { ...t, text: newText } : { ...t }))
    );
  }
  function addTodoHandler() {
    let newTodoText = prompt("Enter new task");
    setTodo((state) => {
      let id = `todo_${state.length + 1}`;
      return [...state, { _id: id, text: newTodoText, isComplete: false }];
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        <div className="add-btn-container">
          <button className="btn" onClick={addTodoHandler}>
            + Add new Todo
          </button>
        </div>
        {todo.length === 0 ? (
          <Loading />
        ) : (
          todo.map((t) => (
            <Todo
              key={t._id}
              {...t}
              changeStatusHandler={changeStatusHandler}
              deleteTodoHandler={deleteTodoHandler}
              editTodoHandler={editTodoHandler}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

// Variant 1:
// setTodo((oldState) =>
//     oldState.map((t) => {
//       if (t._id === id) {
//         return { ...t, isCompleted: !t.isCompleted };
//       }else {
//         return {...t}
//       }
//     })
//   );
