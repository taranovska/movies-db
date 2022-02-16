import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movies/:id" children={<Movie />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
