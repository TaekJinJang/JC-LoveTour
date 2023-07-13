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

// 백그라운드 임포트
import background from '../../assets/background.png';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function introduceBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('러브투어 소개'); // 현재 페이지 상태
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
      <Container style={{fontFamily: 'Pretendard-Regular',}}>
        <Header />
        <Container>
          <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <TopNavBar />
          </Row>
          <Row className="mt-3 ps-1" style={{ width: '100%' }}>
            <Col md={3}>
              <SideBar buttons={buttons} title={'러브투어 소개'} />
            </Col>
            <Col md={9}>
              <Row>
                <h3>러브투어 소개</h3>
                <hr />
              </Row>
              <Row>
                <Container>
                  {/* 그림이 왼쪽에 있어요 */}
                  <Row className="mb-2 ps-3">
                    <Col
                      md={4}
                      style={{
                        backgroundImage: `url(${background})`,
                        height: '250px',
                        width: '50%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        float: 'left',
                      }}
                    ></Col>
                    <Col md={4} style={{ position: 'relative' }}>
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '20%',
                          transform: 'translate(-50%, -50%)',
                          background: '#fff',
                          width: '200%',
                          height: '80%',
                          display: 'flex',
                          // alignItems: 'center',
                          justifyContent: 'left',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '20px',

                            color: 'black',
                          }}
                        >
                          <h3>러브투어 소개글</h3>
                          <p>
                            안녕하십니까 지금 만든 폼은 ■■이가 만들었어요
                            앞으로 내용을 넣을거에요
                          </p>
                        </span>
                      </div>
                    </Col>
                    <Col
                      md={2}
                      className="bg-primary"
                      style={{ float: 'right' }}
                    ></Col>
                  </Row>
                  {/* 그림이 오른쪽에 있어요 */}
                  <Row className="mb-2 ps-3">
                    <Col
                      md={2}
                      className="bg-primary"
                      style={{ float: 'right' }}
                    ></Col>
                    <Col md={4} style={{ position: 'relative' }}>
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '80%',
                          transform: 'translate(-50%, -50%)',
                          background: '#fff',
                          width: '200%',
                          height: '80%',
                          display: 'flex',
                          // alignItems: 'center',
                          justifyContent: 'left',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '20px',

                            color: 'black',
                          }}
                        >
                          <h3>러브투어 소개글</h3>
                          <p>
                            안녕하십니까 지금 만든 폼은 ■■이가 만들었어요
                            앞으로 내용을 넣을거예요
                          </p>
                        </span>
                      </div>
                    </Col>

                    <Col
                      md={4}
                      style={{
                        backgroundImage: `url(${background})`,
                        height: '250px',
                        width: '50%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        float: 'left',
                      }}
                    ></Col>
                  </Row>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default introduceBoardView;
