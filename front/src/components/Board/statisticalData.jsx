import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';

// 상단 그림
import background2 from '../../assets/background2.png';
// 준비중 그림
import setting from '../../assets/setting.jpg';
// 공통부분
import { Container, Row, Col, Figure } from 'react-bootstrap';
import PageNav from '../UI/pageNav';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';
import Header from '../UI/header';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function statisticalData() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('통계 자료방'); // 현재 페이지 상태
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
    { label: '자유게시판', href: '/board/narrator' },
    { label: '투어예약 현황', href: '/board/tourReservation' },
    { label: '해설자 근무배정표', href: '/board/narratorSchedule' },
    { label: '해설자 사진방', href: '/board/narratorPhoto' },
    { label: '해설자 현황', href: '/board/narratorCS' },
    { label: '통계 자료방', href: '/board/statisticalData' },
  ];

  return (
    <>
      <Header />
      {/* 상단이미지 */}
      <Container
        fluid
        style={{ height: '40vh', width: '98vw', overflowX: 'hidden' }}
        className="container-fluid m-0 p-0"
      >
        <div
          style={{
            backgroundImage: `url(${background2})`,
            height: '37vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center', // 가로 방향 가운데 정렬
            alignItems: 'center', // 세로 방향 가운데 정렬
          }}
        >
          <h1 style={{ color: 'white' }}>해설자방</h1>
        </div>
      </Container>
      <Container fluid="sm" className="mt-5">
        <Row>
          {/* 사이드바 */}
          <Col xs={12} lg={3} sm={3} className="px-0">
            <SideBar buttons={buttons} title={'해설자방'} />
          </Col>
          {/* 제목 */}
          <Col xs={12} lg={9} sm={9}>
            <Col xs={12} lg={12} sm={12}>
              <h3>통계자료방</h3>
              <hr />
            </Col>

            <Col xs={12} lg={12} sm={12}>
              <Figure>
                <Figure.Image src={setting} alt="Setting Image" />
              </Figure>
            </Col>
          </Col>
        </Row>
      </Container>
      {/* 푸터 */}
      <Container
        fluid
        style={{ width: '98vw', overflowX: 'hidden' }}
        className="container-fluid mx-0 p-0"
      >
        <Footer />
      </Container>
    </>
  );
}

export default statisticalData;
