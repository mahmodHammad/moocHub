import React from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
export default function Nerds({ todo, addToTodo, removeFromTodo }) {
  return (
    <div>
      <Scroll />
      {todo.length ? (
        <DisplayContent
          todo={todo}
          addToTodo={addToTodo}
          removeFromTodo={removeFromTodo}
        />
      ) : (
        <p className="warning">
          you should add content first then come here again to see it{" "}
        </p>
      )}
    </div>
  );
}
