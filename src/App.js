import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Layout from "./Components/Layout";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Motion from "./Components/Pages/Motion";
import Login from "./Components/Pages/Login";
import Table from "./Components/Pages/Table";
import Istatistikler from "./Components/Pages/Istatistikler";
import Loading from "./Components/Pages/Loading";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Motion" element={<Motion />} />
          <Route path="/Istatistikler" element={<Istatistikler />} />
          <Route path="/Loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
