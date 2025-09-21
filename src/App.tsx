import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./Components/Pages/Registration";
import { Welcome } from "./Components/Pages/Welcome";
import { GamePage } from "./Components/Pages/GamePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Welcome />}></Route>
          <Route path="registration" element={<Registration />}></Route>
          <Route path="Game" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
