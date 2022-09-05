import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Water from "./pages/Water";
import Counters from "./pages/Counters";
import Upload from "./pages/Upload";
import Nav from "./components/Nav";
import Gear from "./pages/Gear";

function App() {
  return (
    <Router>
    <Nav />
    <Switch>
    <Route path='/water' component={Water} />
    <Route path='/' exact component={Home} />
    <Route path='/counters' component={Counters} />
    <Route path='/gear' component={Gear} />
    <Route path='/upload' component={Upload} />
  </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      Hi
    </div>
  )
}
export default App;
