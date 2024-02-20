import { useState } from "react";

function AddTodo({ todos, setTodos }) {
  let [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }
  function handleClick() {
    if (text == "") {
      alert("please type  something");
      return;
    }

    setTodos([...todos, { text: text, checked: false, id: todos.length + 1 }]);
    localStorage.setItem(
      "todos",
      JSON.stringify([
        ...todos,
        { text: text, checked: false, id: todos.length + 1 },
      ])
    );

    setText("");
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <input type="button" value="add todo" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
