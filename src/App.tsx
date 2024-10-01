import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layouts/Layout.tsx";
import { PATH } from "./utils/path.ts";
import Home from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.home} element={<Home />} />
        <Route path={PATH.discord} element={<Home/>}/>
        <Route path={PATH.genre} element={<Home/>}/>
        <Route path={PATH.movie} element={<Movie/>}/>
      </Route>
    </Routes>
  );
}

export default App;
