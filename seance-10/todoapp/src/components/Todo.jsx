function Todo({ text, checked, id, deleteTodo, markAsDone }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={() => markAsDone(id)}
        />
        <span style={{ textDecoration: checked ? "line-through" : "" }}>
          {text}
        </span>
        <button onClick={() => deleteTodo(id)}>X</button>
      </li>
    </div>
  );
}

export default Todo;
