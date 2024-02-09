import './styles/App.css';
import ViewLeague from './ViewLeague.js';
import ViewPredHistory from './ViewPredHistory.js';
import PredictionInput from './PredictionInput.js';
import NavBar from './NavBar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<PredictionInput />} />
          <Route path="/Predict" element={<PredictionInput />} />
          <Route path="/ViewLeague" element={<ViewLeague />} />
          <Route path="/ViewPredHistory" element={<ViewPredHistory />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
