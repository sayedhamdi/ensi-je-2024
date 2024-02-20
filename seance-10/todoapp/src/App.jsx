import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

export default function App() {
  let [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    calculateDone();
  }, [todos]);

  let [done, setDone] = useState(0);
  function deleteTodo(id) {
    console.log(id);
    let newTodoList = todos.filter((todo) => todo.id != id);
    setTodos(newTodoList);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  }
  function markAsDone(id) {
    let newTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function calculateDone() {
    let nb = 0;
    for (let el of todos) {
      if (el.checked) {
        nb++;
      }
    }
    setDone(nb);
  }
  let doneElements = todos.reduce((acc, cv) => (acc + cv.checked ? 1 : 0), 0);

  return (
    <div>
      <h1>Todo list app</h1>
      <h3>
        todos : {doneElements}/{todos.length}
      </h3>
      <AddTodo todos={todos} setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} markAsDone={markAsDone} />
    </div>
  );
}
