import React from "react";
import useStyles from "./App.style.js";

// Components
import Map from "../components/Map/Map";
import Sidebar from "../components/Sidebar/Sidebar";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
        <Map />
    </div>
  );
}

export default App;
