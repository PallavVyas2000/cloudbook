import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is a demo alert message."/>
          <div className="container">
          <Routes>
            {/* Previous syntax was:-   <Route exact path"/">
              .                             <Home/>
              .                         </Route>                       This Doesn't work anymore */}

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
        </Router >
      </NoteState>
    </>
  );
}

export default App;
