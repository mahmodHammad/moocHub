import React ,{useState} from 'react'
import Sidebar from "./Sidebar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
// import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
// import DetailsIcon from '@material-ui/icons/Details';
// import EjectIcon from '@material-ui/icons/Eject';
// import GroupWorkIcon from '@material-ui/icons/GroupWork';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// import HistoryIcon from '@material-ui/icons/History';
// import SchoolIcon from '@material-ui/icons/School';
// import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
// import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
// import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
// import HomeIcon from '@material-ui/icons/Home';

import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   toolbar: {
//     minHeight: 128,
//     alignItems: 'flex-start',
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     alignSelf: 'flex-end',
//   },
// }));

// export default class Navbar extends Component {
  

  // handleToggle = () => {
  //   this.setState({ menuOpen: !this.state.menuOpen });
  // };
  // handleClose = () => {
  //   this.setState({ menuOpen: false });
  // };

  // handleSelect = community => {
  //   this.handleClose();
  //   window.localStorage.setItem(
  //     "community",
  //     `/${community.name}/${community.id}`
  //   );
  //   this.props.getCommunity();
  // };
 
// }



export default function Navbar({ todo, removeFromTodo, communities }) {
  const [open, setopen] = useState(false)
  return (
    <div>
        <AppBar position="sticky" className="nav">
          <Toolbar variant="dense"  >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setopen(!open)}
            >
              <MenuIcon />
            </IconButton>

            <Button color="inherit" component={Link} to="/" size="large">
              <Typography color="inherit"> Asu</Typography> 
              <Typography color="secondary">Engineer </Typography> 
            </Button>
            {/* <div className="contactus">
            <Button size="small" variant="outlined" color="secondary"  >ContactUs</Button>
            </div> */}
          </Toolbar>
        </AppBar>

        <Sidebar
        open={open}
        setopen={setopen}
          todo={todo}
          removeFromTodo={removeFromTodo}
        />
      </div>
  )
}
