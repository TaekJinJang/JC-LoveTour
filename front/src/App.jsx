import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import AnnounceBoard from "./pages/announceBoard";
import AnnounceBoardAdd from "./pages/announceBoardAdd";
import AnnounceBoardPost from "./pages/announceBoardPost";
import AnnounceBoardUpdate from "./components/Board/announceBoardUpdate";
import GalleryBoard from "./pages/galleryBoard";
import GalleryBoardAdd from "./pages/galleryBoardAdd";
import AnnounceBoardSearch from "./components/Board/announceBoardSearch";
import ReviewBoard from "./pages/reviewBoard";
import ReviewBoardWrite from "./components/Board/reviewBoardWrite";
import ReviewBoardDetail from "./components/Board/reviewBoardDetail";
import ReviewBoardUpdate from "./components/Board/reviewBoardUpdate";
import BoardUI from "./components/UI/boardUI";
import Main from "./pages/main";
import Admin from "./pages/admin";
import React from "react";

import IntroduceBoard from "./pages/introduceBoard";

const Container = styled.div`
  margin: 10px auto;
  // width: 370px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Main />} />
          <Route path="/board/announce" element={<AnnounceBoard />} />
          <Route
            path="/board/announce/:boardid"
            element={<AnnounceBoardPost />}
          />
          <Route
            path="/board/announce/:boardid/update"
            element={<AnnounceBoardUpdate />}
          />
          <Route path="/board/announce/add" element={<AnnounceBoardAdd />} />
          <Route
            path="/board/announce/search/:search"
            element={<AnnounceBoardSearch />}
          />
          <Route path="/board/gallery" element={<GalleryBoard />} />
          <Route path="/board/gallery/add" element={<GalleryBoardAdd />} />
          <Route path="/board/introduce" element={<IntroduceBoard />} />
          <Route path="/board/review" element={<ReviewBoard />} />
          <Route path="/board/review/add" element={<ReviewBoardWrite />} />
          <Route
            path="/board/review/:boardid"
            element={<ReviewBoardDetail />}
          />
          <Route
            path="/board/review/:boardid/update"
            element={<ReviewBoardUpdate />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<BoardUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
