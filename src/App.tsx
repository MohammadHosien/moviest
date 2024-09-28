import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layouts/Layout.tsx";
import { PATH } from "./utils/path.ts";
import Home from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";
import Movies from "./components/Movies/Movies.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.discord} element={<Movies/>}/>
        <Route path={PATH.genre} element={<Movies/>}/>
        <Route path={PATH.movie} element={<Movie/>}/>
      </Route>
    </Routes>
  );
}

export default App;
