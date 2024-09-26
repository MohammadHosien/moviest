import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layouts/Layout.tsx";
import { PATH } from "./utils/path.ts";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.home} element={<Home />} />
        <Route path={'/:actions'} element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
