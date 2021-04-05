import React from "react";
import "./styles.scss";
import Images from "./Images";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Water from "./pages/Water";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/water' component={Water} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className='container'>
      {Images.map(({ img, idx, title, desc, link, type }) => (
        <div className='imgContainer'>
          <h4> {title} </h4>
          <img key={idx} src={img} alt='image' />
          <p> {desc} </p>
          <a href={link} class='button' target='_blank' rel='noreferrer'>
            Check price
          </a>
        </div>
      ))}
    </div>
  );
}
export default App;
