import React ,{useState} from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import  Typography  from '@material-ui/core/Typography';
export default function Nerds({ todo, removeFromTodo }) {
  const [opened, setopened] = useState([])
  return (
    <div>
      <Scroll opened />
      {todo.length ? (
        <DisplayContent
          todo={todo}
          removeFromTodo={removeFromTodo}
          setopened={setopened}
          opened={opened}
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
