import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import Homepage from "./Pages/Homepage";
import Thermometry from './Pages/Thermometry/Thermometry.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/GHAv3/' element={<Homepage/>}/>
          <Route path='/GHAv3/Thermometry' element={<Thermometry/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;