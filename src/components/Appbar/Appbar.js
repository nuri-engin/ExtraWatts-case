import React from "react";
import useStyles from "./Appbar.style.js";
//material-ui components
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Appbar(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            onClick={props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
