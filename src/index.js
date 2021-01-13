import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import persegi from './persegi';
import segitiga from './segitiga';

//Rio Suga Catra Pratama
//41817110155

// ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/persegi" component={persegi} />
        <Route path="/segitiga" component={segitiga} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );
