import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/loader';
import { fetcher } from './assets/js/fetcher';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Index from './pages';

// BRAIN project user interface
function App() {
  // consuming the brain api
  const [page_var, page_func] = useState(false);
  // useEffect(fetcher, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index/>} />
      </Routes>
    </Router>
  );
} 

export default App;
