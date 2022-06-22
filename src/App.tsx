import React from "react";
import { Instructions } from "./pages/instructions/instructions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MovieDetails from "./pages/movieDetails/movieDetails";
import SearchResults from "./pages/searchResults/searchResults";
import Watchlist from "./components/watchlist/watchlist";
import Header from './components/header/header';

export function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<MovieDetails />} />
          <Route path="search/:searchQuery" element={<SearchResults />} />
          <Route path="instructions" element={<Instructions />} />
        </Routes>
        <Watchlist />
      </Router>

    </div>
  );
}
