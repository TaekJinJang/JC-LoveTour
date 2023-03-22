import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import AnnounceBoard from './pages/announceBoard';
import AnnounceBoardAdd from './pages/announceBoardAdd';
import AnnounceBoardDetail from './components/Board/announceBoardDetail';
import GalleryBoardView from './components/Board/galleryBoardView';
import Main from './pages/main';
import Admin from './pages/admin';
import React from 'react';

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
            element={<AnnounceBoardDetail />}
          />
          <Route path="/board/announce/add" element={<AnnounceBoardAdd />} />
          <Route path="/board/gallery" element={<GalleryBoardView />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
