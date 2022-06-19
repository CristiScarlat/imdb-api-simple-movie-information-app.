import React from "react";
import { Instructions } from "./pages/instructions/instructions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MovieDetails from "./pages/movieDetails/movieDetails";
import Header from './components/header/header';
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<MovieDetails />} />
          <Route path="instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </div>
  );
}
