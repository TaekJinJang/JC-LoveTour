import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Board from "./pages/Board";
import React from "react";

const Container = styled.div`
  margin: 10px auto;
  // width: 370px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/1" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
