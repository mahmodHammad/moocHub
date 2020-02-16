import React from "react";
import DisplayContent from "./../../components/DisplayContent";
export default function Nerds({ todo, addToTodo, removeFromTodo }) {
  let  gettodo = window.localStorage.getItem("todo")
  //  if(gettodo){
  //    todo = gettodo
  //  }

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