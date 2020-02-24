import React from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import  Typography  from '@material-ui/core/Typography';
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
        <div className="warning">
          <Typography variant="h5" >Study List Is Empty ! </Typography>
          you should add content first then come  again to see it here
        </div>
      )}
    </div>
  );
}
