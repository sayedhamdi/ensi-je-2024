import Todo from "./Todo";

function TodoList({ todos, deleteTodo, markAsDone }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            checked={todo.checked}
            id={todo.id}
            deleteTodo={deleteTodo}
            markAsDone={markAsDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
