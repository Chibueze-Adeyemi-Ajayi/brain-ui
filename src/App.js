import { useEffect } from 'react';
import './App.css';
import Loader from './components/loader';
import { fetcher } from './assets/js/fetcher';

// BRAIN project user interface
function App() {
  // consuming the brain api
  useEffect(fetcher, []);
  return (
    <div className="App bg-[#0B0E20] flex w-full h-full">
      {/* <span className="loader text-white w-12 h-12"></span> */}
      <Loader/>
    </div>
  );
} 

export default App;
