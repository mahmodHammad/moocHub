import React ,{useState} from "react";
import Scroll from "./components/Scoll";
import DisplayContent from "./components/DisplayContent";
import  Typography  from '@material-ui/core/Typography';
import Video from "../../core/demo/Video"
export default function Nerds({ todo, removeFromTodo }) {
  const [opened, setopened] = useState([])
  const [At, setAt] = useState(0)
  console.log("oopen" ,opened)
  return (
    <div>
      <Scroll opened={opened} At={At} setAt={setAt}/>

      <Video/>
      {/* {todo.length ? (
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
      )} */}
    </div>
  );
}
