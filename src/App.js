import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/loader';
import { fetcher } from './assets/js/fetcher';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

// BRAIN project user interface
function App() {
  // consuming the brain api
  useEffect(fetcher, []);
  const [page_var, page_func] = useState(false);
  return (
    <div className="App bg-[#0B0E20] flex w-full h-full">
      {/* <span className="loader text-white w-12 h-12"></span> */}
      {!page_var ? <Loader/> : <Router>
        <Switch>
          <Route exact path="/" component={<Home/>} />
          <Route path="/home" component={<Home/>} />
        </Switch>
      </Router>}
    </div>
  );
} 

export default App;
