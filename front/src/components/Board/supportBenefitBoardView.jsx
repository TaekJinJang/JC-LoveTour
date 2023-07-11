import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import {
  ButtonGroup,
  Button,
  Card,
  Stack,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function supportBenefitBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('지원혜택'); // 현재 페이지 상태
  const { admin } = useSelector((state) => state.admin);
  const { gallery } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const indexOfLastPost = page * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    setCurrentPosts(gallery.slice(indexOfFirstPost, indexOfLastPost));
  }, [gallery, indexOfFirstPost, indexOfLastPost, page]);

  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_POSTS_REQUEST,
    });
  }, []);

  // 사이드바 내용
  const buttons = [
    { label: '러브투어 소개', href: '/board/introduce' },
    { label: '지원 혜택', href: '/board/supportBenefit' },
    { label: '사진 갤러리', href: '/board/gallery' },
  ];

  return (
    <>
      <Container>
        <Header />
        <Container>
          <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <TopNavBar />
          </Row>
          <Row className="mt-3 ps-1" style={{ width: '100%' }}>
            <Col md={3}>
              <SideBar buttons={buttons} title={'지원혜택'} />
            </Col>
            <Col md={9}>
              <Row className="mb-1">
                <h3>지원혜택</h3>
                <hr />
              </Row>
              <Row>
                <h3>지원지침</h3>
                <p>
                  거주지에서 관광버스를 임차하여 제천에 들어와 관내 관광과
                  전통시장 투어 시,
                  <br />
                  아래 지원조건에 맞을 때 지원한다.
                </p>
              </Row>
              <Row>
                <h3>지원조건</h3>
                <p>
                  - 참가인원 : 35명이상 (코로나19 방역해제 전 한시적
                  적용30명이상)
                  <br />
                  - 제천관내 식당에서 중식 이용시
                  <br />- 제천여행 후 출발 전 전통시장 & 약초시장에서 1시간30분
                  정도 관광시
                </p>
              </Row>
              <Row>
                <h3>지원금액</h3>
                <p>
                  - 1일 : 1대당 35만원 ※1식 중식 + 관광 + 전통시장 1곳 쇼핑
                  <br />
                  - 1박2일 : 1대당 55만원 ※3식+숙박+관광+전통시장 2곳 쇼핑
                  <br />
                  - 지원금 지급 : 구비서류 접수완료 후 제천화폐로 당일지급.
                  <br />
                  <h5 style={{ fontWeight: 'bold' }}>
                    &nbsp;&nbsp;※ 단, 제천화폐 소진 시 투어종료 후 대표자의
                    통장계좌로 입금.
                  </h5>
                </p>
              </Row>
              <Row>
                <h3>기타 지원사항</h3>
                <p>
                  - 청풍호유람선 승선료 할인 : 18,000원 → 12,000원
                  <br />- 청풍문화재단지 입장료 할인 : 3,000 → 1,500원
                  <br />- 청풍케이블카 탑승료 할인 : 18,000원 → 16,000원
                  <br />- 세계기독교박물관 입장료 할인 : 10,000 → 7,000원
                  <br />- 제천시 관광해설사 탑승. 투어코스 안내 및 해설
                  <br />
                  <h5 style={{ fontWeight: 'bold' }}>
                    &nbsp;&nbsp;※ 열차편으로 제천역 도착 시 관광버스 무상지원
                    1일 최대 20대까지
                  </h5>
                </p>
              </Row>
              <Row>
                <h3>구비서류(팩스 & 이메일 제출)</h3>
                <p>
                  - 참여약정서 (별도양식 – 투어 전 운영실 제출)
                  <br />
                  - 관광일정표 (운영실과 사전협의)
                  <br />
                  - 대표자 신분증사본 (※공기관은 등록증 사본으로 대체 할 수
                  있음.)
                  <br />
                  - 참가자명부 : 성명. 성별. 나이. 전화
                  <br />
                  - 통장사본 : 대표자명의 통장사본 (지원금 계좌입금용)
                  <br />- 단체사진 2매 : 전통시장과 관광지에서 찍은 사진.
                  (사진전송: 카톡이나 메일)
                </p>
              </Row>
              <Row>
                <h3>문의사항</h3>
                <p>
                  - 관련기관 : 체전시 일자리 경제과(전통시장 러브투어 운영실)
                  <br />- 전화번호 : 043-641-4805 &nbsp;&nbsp; 팩스 :
                  043-642-4205
                  <br />- E-mail : hanbio5@hanmail.net
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default supportBenefitBoardView;
