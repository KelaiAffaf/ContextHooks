import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="about" element={<Layout />} />
      </Routes>
    </div>