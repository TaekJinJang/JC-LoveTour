import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import AnnounceBoard from './pages/announceBoard';
import AnnounceBoardAdd from './pages/announceBoardAdd';
import AnnounceBoardPost from './pages/announceBoardPost';
import AnnounceBoardUpdate from './components/Board/announceBoardUpdate';
import GalleryBoard from './pages/galleryBoard';
import GalleryBoardAdd from './pages/galleryBoardAdd';
import AnnounceBoardSearch from './components/Board/announceBoardSearch';
import ReviewBoard from './pages/reviewBoard';
import ReviewBoardWrite from './components/Board/reviewBoardWrite';
import ReviewBoardDetail from './components/Board/reviewBoardDetail';
import ReviewBoardUpdate from './components/Board/reviewBoardUpdate';
import BoardUI from './components/UI/boardUI';
import Main from './pages/main';
import Admin from './pages/admin';
import React from 'react';

import IntroduceBoard from './pages/introduceBoard';

import AccommodationBoard from './pages/accommodationBoard';
import CheongpunghoCourseBoard from './pages/cheongpunghoCourseBoard';
import MuseumCourseBoard from './pages/museumCourseBoard';
import FaqBoard from './pages/faqBoard';
import FestivalBoard from './pages/festivalBoard';
import FoodBoard from './pages/foodBoard';
import OksunbongPeakCourseBoard from './pages/oksunbongPeakCourseBoard';
import ShrineOfBaeronCourseBoard from './pages/shrineOfBaeronCourseBoard';
import HealingCourseBoard from './pages/healingCourseBoard';
import SupportBenefitBoard from './pages/supportBenefitBoard';
import TouristSpotBoard from './pages/touristSpotBoard';
import TraditionalMarketBoard from './pages/traditionalMarketBoard';
import VideoGalleryBoard from './pages/videoGalleryBoard';
import ReviewBoardAdd from './pages/reviewBoardAdd';

import './index.css'; //폰트설정을 위한 css 임포트

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
                    <Route path="/board/accommodation" element={<AccommodationBoard />} />
                    <Route path="/board/announce" element={<AnnounceBoard />} />
                    <Route path="/board/announce/:boardid" element={<AnnounceBoardPost />} />
                    <Route path="/board/announce/:boardid/update" element={<AnnounceBoardUpdate />} />
                    <Route path="/board/announce/add" element={<AnnounceBoardAdd />} />
                    <Route path="/board/announce/search/:search" element={<AnnounceBoardSearch />} />
                    <Route path="/board/gallery" element={<GalleryBoard />} />
                    <Route path="/board/gallery/add" element={<GalleryBoardAdd />} />
                    <Route path="/board/introduce" element={<IntroduceBoard />} />
                    <Route path="/board/review" element={<ReviewBoard />} />
                    <Route path="/board/review/add" element={<ReviewBoardAdd />} />
                    <Route path="/board/review/:boardid" element={<ReviewBoardDetail />} />
                    <Route path="/board/review/:boardid/update" element={<ReviewBoardUpdate />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/test" element={<BoardUI />} />

                    <Route path="/board/faq" element={<FaqBoard />} />
                    <Route path="/board/festival" element={<FestivalBoard />} />
                    <Route path="/board/food" element={<FoodBoard />} />
                    <Route path="/board/healingCourse" element={<HealingCourseBoard />} />
                    <Route path="/board/supportBenefit" element={<SupportBenefitBoard />} />
                    <Route path="/board/touristSpot" element={<TouristSpotBoard />} />
                    <Route path="/board/traditionalMarket" element={<TraditionalMarketBoard />} />
                    <Route path="/board/videoGallery" element={<VideoGalleryBoard />} />

                    <Route path="/board/cheongpunghoCourse" element={<CheongpunghoCourseBoard />} />
                    <Route path="/board/museumCourse" element={<MuseumCourseBoard />} />
                    <Route path="/board/oksunbongPeakCourse" element={<OksunbongPeakCourseBoard />} />
                    <Route path="/board/shrineOfBaeronCourse" element={<ShrineOfBaeronCourseBoard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
