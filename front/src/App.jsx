import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import BoardUI from "./components/UI/boardUI";

// 메인페이지 + 관리자 페이지
import Main from "./pages/main";
import Admin from "./pages/admin";

// 리뉴얼
// 투어소개 TourIntroduction

import IntroduceBoard from "./pages/TourIntroductionPages/introduceBoard"; // 러브투어 소개
import GalleryBoard from "./pages/TourIntroductionPages/galleryBoard"; // 사진갤러리 <홍보물로 수정 예정>
import GalleryBoardAdd from "./pages/TourIntroductionPages/galleryBoardAdd";

import ReviewBoard from "./pages/TourIntroductionPages/reviewBoard"; // 투어 후기

import ReviewBoardDetail from "./components/Board/TourIntroduction/reviewBoardDetail";
import ReviewBoardUpdate from "./components/Board/TourIntroduction/reviewBoardUpdate";
import ReviewBoardAdd from "./pages/TourIntroductionPages/reviewBoardAdd";

// 예약
import SupportBenefitBoard from "./pages/ReservationPages/supportBenefitBoard"; // 지원혜택
import TourReservation from "./pages/ReservationPages/tourReservation"; // 투어 예약 현황
import ReservationInquiry from "./pages/ReservationPages/reservationInquiry"; // 예약 문의

// 여행 정보
import TouristSpot from "./pages/TravelInformationPages/touristSpot"; // 관광지
import TraditionalMarket from "./pages/TravelInformationPages/traditionalMarket"; // 전통 시장
import FestivalBoard from "./pages/TravelInformationPages/festivalBoard"; // 축제 / 행사

// 고객센터
import AnnounceBoard from "./pages/CustomerServicePages/announceBoard"; // 공지사항
import AnnounceBoardAdd from "./pages/CustomerServicePages/announceBoardAdd";
import AnnounceBoardPost from "./pages/CustomerServicePages/announceBoardPost";
import AnnounceBoardUpdate from "./components/Board/CustomerService/announceBoardUpdate";
import AnnounceBoardSearch from "./components/Board/CustomerService/announceBoardSearch";
import FaqBoard from "./pages/CustomerServicePages/faqBoard"; // 1:1 문의 <수정예정>
import NarratorBoard from "./pages/CustomerServicePages/narratorBoard"; // 해설사 게시판

import "./index.css"; //폰트설정을 위한 css 임포트

const Container = styled.div`
  margin: 10px auto;
  // width: 370px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" exact={true} element={<Main />} />
          {/* 투어소개 */}
          {/* 러브투어 소개 */}
          <Route path="/board/introduce" element={<IntroduceBoard />} />
          {/* 홍보물 */}
          <Route path="/board/gallery" element={<GalleryBoard />} />
          <Route path="/board/gallery/add" element={<GalleryBoardAdd />} />
          {/* 투어 후기 */}
          <Route path="/board/review" element={<ReviewBoard />} />
          <Route path="/board/review/add" element={<ReviewBoardAdd />} />
          <Route
            path="/board/review/:boardid"
            element={<ReviewBoardDetail />}
          />
          <Route
            path="/board/review/:boardid/update"
            element={<ReviewBoardUpdate />}
          />
          {/* 예약 */}
          {/* 지원혜택 */}
          <Route
            path="/board/supportBenefit"
            element={<SupportBenefitBoard />}
          />
          {/* 예약 현황 */}
          <Route path="/board/tourReservation" element={<TourReservation />} />
          {/* 예약 문의 */}
          <Route
            path="/board/reservationInquiry"
            element={<ReservationInquiry />}
          />
          {/* 여행정보 */}
          {/* 관광지 */}
          <Route path="/board/touristSpot" element={<TouristSpot />} />
          {/* 전통시장 */}
          <Route
            path="/board/traditionalMarketBoard"
            element={<TraditionalMarket />}
          />
          {/* 축제/행사 */}
          <Route path="/board/festival" element={<FestivalBoard />} />
          {/* 고객센터 */}
          {/* 공지사항 */}
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
          {/* 1:1 문의 */}
          <Route path="/board/faq" element={<FaqBoard />} />
          {/* 해설사 게시판*/}
          <Route path="/board/narrator" element={<NarratorBoard />} />
          {/* 관리자 및 테스트 */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/test" element={<BoardUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
