import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import TV from "./pages/TV";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Movie} />
          <Route path="/search" component={Search} />
          <Route path="/tv" component={TV} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/tv/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
