import React from "react";
import useStyles from "./Appbar.style.js";
//material-ui components
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
//assets
import { ReactComponent as AppName } from "../../assets/logo/kiwi.svg";

export default function Appbar(props) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="end"
            onClick={props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <AppName />
        </Toolbar>
      </AppBar>
    </div>
  );
}
