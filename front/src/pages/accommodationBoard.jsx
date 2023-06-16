import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccommodationBoardView from '../components/Board/accommodationBoardView';

function accommodationBoard() {
  const buttons = [
    { label: '관광지', href: '/board/touristSpot' },
    { label: '전통시장', href: '/board/traditionalMarket' },
    { label: '음식', href: '/board/food' },
    { label: '숙박', href: '/board/accommodation' },
    { label: '축제/행사', href: '/board/festival' },
  ];
  return (
    <>
      <AccommodationBoardView />
    </>
  );
}
export default accommodationBoard;
