import React from "react";
import useStyles from "./App.style.js";
//components
import Map from "../components/Map/Map";
import Sidebar from "../components/Sidebar/Sidebar";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Map />
      </main>
    </div>
  );
}

export default App;
