import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/landing-page/Landing';
import Projects from './components/project-page/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
