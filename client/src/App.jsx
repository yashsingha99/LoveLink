import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import useDarkMode from './components/hooks/useDarkMode';
import Header from "./components/Header/Header";


function App() {
  const { darkModeEnabled, toggleMode } = useDarkMode();
  return (
    <>
      <Header darkModeEnabled={darkModeEnabled} toggleMode={toggleMode} />
      <Outlet />
    </>
  );
}

export default App;
