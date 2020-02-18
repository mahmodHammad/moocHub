import React from "react";
import DisplayContent from "./components/DisplayContent";
export default function Nerds({ todo, addToTodo, removeFromTodo }) {
 

  return (
    <div>
     {
       todo.length?
       <DisplayContent
         todo={todo}
         addToTodo={addToTodo}
         removeFromTodo={removeFromTodo}
       />:
       <p className="warning">you should add content first then come here again  to  see it   </p>
     }
    </div>
  );
}