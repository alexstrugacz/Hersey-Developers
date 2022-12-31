import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/landing-page/Landing';
import Projects from './components/project-page/ProjectsPage';
import ResourcePage from './components/resource-page/ResourcePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<ResourcePage />} />
      </Routes>
    </div>
  );
}

export default App;
