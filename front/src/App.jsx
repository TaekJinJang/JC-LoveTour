import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import AnnounceBoard from './pages/announceBoard';
import AnnounceBoardAdd from './pages/announceBoardAdd';
import AnnounceBoardDetail from './components/Board/announceBoardDetail';
import AnnounceBoardUpdate from './components/Board/announceBoardUpdate';
import GalleryBoardView from './components/Board/galleryBoardView';
import AnnounceBoardSearch from './components/Board/announceBoardSearch';
import ReserveBoard from './pages/reserveBoard';
import ReserveBoardWrite from './components/Board/reserveBoardWrite';
import ReserveBoardDetail from './components/Board/reserveBoardDetail';
import ReserveBoardUpdate from './components/Board/reserveBoardUpdate';
import BoardUI from './components/UI/boardUI';
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
          <Route
            path="/board/announce/:boardid/update"
            element={<AnnounceBoardUpdate />}
          />
          <Route path="/board/announce/add" element={<AnnounceBoardAdd />} />
          <Route
            path="/board/announce/search/:search"
            element={<AnnounceBoardSearch />}
          />
          <Route path="/board/gallery" element={<GalleryBoardView />} />
          <Route path="/board/reserve" element={<ReserveBoard />} />
          <Route path="/board/reserve/add" element={<ReserveBoardWrite />} />
          <Route
            path="/board/reserve/:boardid"
            element={<ReserveBoardDetail />}
          />
          <Route
            path="/board/reserve/:boardid/update"
            element={<ReserveBoardUpdate />}
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<BoardUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
