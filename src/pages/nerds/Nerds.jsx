import React from "react";
import DisplayContent from "./../../components/DisplayContent";
export default function Nerds({ todo, addToTodo, removeFromTodo }) {
  return (
    <div>
      <DisplayContent
        todo={todo}
        addToTodo={addToTodo}
        removeFromTodo={removeFromTodo}
      />
    </div>
  );
}
