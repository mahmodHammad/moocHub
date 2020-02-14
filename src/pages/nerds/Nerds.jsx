import React from 'react'
import DisplayContent from './../../components/DisplayContent';
export default function Nerds({todo ,addToTodo ,removeFromTodo}) {
    return (
        <div>
          lets Do some Nerding issues here ! :P
          {todo.map(e => (
            <div>
              <p>{e.name}</p> <span>{e.id}</span>{" "}
            </div>
          ))}
  
          <DisplayContent
            todo={todo}
            addToTodo={addToTodo}
            removeFromTodo={removeFromTodo}
          />
        </div>
      );
}
