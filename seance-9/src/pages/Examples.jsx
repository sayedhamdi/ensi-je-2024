import { useState } from "react";

export default function Examples() {
  let [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative">
      {isOpen ? (
        <div className="flex flex-col h-[400px] bg-blue-200 absolute z-20 top-[40px] left-[50%]">
          <h1>Sign up</h1>
          login
          <input type="text" />
          <br />
          password
          <input type="text" />
          <br />
          <input type="button" value="login" />
        </div>
      ) : (
        ""
      )}

      <button className="bg-orange-300" onClick={handleClick}>
        sign up !
      </button>
    </div>
  );
}
