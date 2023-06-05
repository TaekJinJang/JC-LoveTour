import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import HealingImage1 from '../../assets/Healing/Healing1.jpg';
import HealingImage2 from '../../assets/Healing/Healing2.jpg';
import HealingImage3 from '../../assets/Healing/Healing3.jpg';
import lunch1 from '../../assets/Healing/lunch1.jpg';
import Market1 from '../../assets/Healing/Market1.jpg';

import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Card,
  Stack,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function healingCourseBoardView() {
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

  return (
    <>
      <Container>
        {/* 상단 네비바 */}
        <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <Navbar bg="success" expand="lg" className="p-0">
            <Container style={{ top: '-2px' }}>
              <Navbar.Brand href="#home">
                <h6>홈</h6>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown
                    as="h6"
                    title="제천 러브투어"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    as="h6"
                    title="러브투어 소개"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>

        {/* 사이드바 */}
        <Row className="mt-3 ps-1" style={{ width: '100%' }}>
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white">
              <Card.Body className="pb-1 pt-1">
                <Card.Title style={{ textAlign: 'center' }}>
                  <h3 className="mb-0">힐링코스</h3>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                러브투어 소개
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                지원 혜택
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                사진 갤러리
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block
              >
                영상 갤러리
              </Button>
              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
          {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
          {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
          <Col md={9}>
            <Row>
              <h2>힐링코스</h2>
              <hr />
            </Row>
            {/* 청풍문화재단지-------------------------------------- */}
            <Row className="mb-2">
              <div className="card">
                <div
                  className="card-body mt-2"
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#fda172',
                  }}
                >
                  <h4 className="card-title" style={{ fontWeight: 'bold' }}>
                    청풍문화재단지
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={HealingImage1}
                      class="img-fluid"
                      alt="청풍문화재단지"
                      style={{ width: '550px', height: '370px' }}
                    ></img>
                  </div>
                  <p className="card-text">
                    청풍지역은 자연경관이 수려하고 문물이 번성 했던 곳으로 많은
                    문화유적이 있었으나 충주 댐 건설로 수몰될 위기에 놓였다.{' '}
                    <br />
                    1983년부터 3년간 수몰지역의 문화재를 원형대로 현재 위치에
                    이전 복원해 단지를 조성했다.
                  </p>
                  <div
                    className="card"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p>
                      <i
                        className="bi bi-house"
                        style={{ fontSize: '1.5rem' }}
                      ></i>
                      주소: 제천시 청풍면 청풍호로 2048 &nbsp;&nbsp; 전화번호:
                      043)641-5532~5
                    </p>
                  </div>
                </div>
                {/* 화살표------------------------------------------------ */}
                <div
                  className="mt-2"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </div>
                {/* 중식시간 -------------------------------------------------------------------------*/}
                <div
                  className="d-flex justify-content-center align-items-center mt-2"
                  style={{ height: '100%' }}
                >
                  <div className="card text-center" style={{ width: '300px' }}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <h5
                        className="card-title"
                        style={{ marginBottom: '0', width: '50%' }}
                      >
                        점심시간
                      </h5>
                      <img
                        src={lunch1}
                        className="img-fluid"
                        alt="점심시간 사진"
                        style={{ width: '50%', marginRight: '10px' }}
                      />
                    </div>
                  </div>
                </div>
                {/* 화살표------------------------------------------------ */}
                <div
                  className="mt-2"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </div>
                {/* 국립 제천 치유의 숲 ---------------------------------------------------*/}
                <div
                  className="card-body mt-2"
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#fda172',
                    width: '100%',
                  }}
                >
                  <h4 className="card-title" style={{ fontWeight: 'bold' }}>
                    국립 제천 치유의 숲
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={HealingImage2}
                      class="img-fluid"
                      alt="국립 제천 치유의 숲"
                      style={{ width: '550px', height: '370px' }}
                    ></img>
                  </div>
                  <p className="card-text">
                    제천을 대표하는 한방 약초원과 풍부한 수계 자원을 활용한
                    산림치유 프로그램을 채험할 수 있다. 금수산을 배경으로 건강,
                    음이온, 숲내음, 자작나무 등 4코스의 치유숲길과 명산치유,
                    오감힐링, 웃음치유등 테라피 프로그램을 체험할 수 있다.
                  </p>
                  <div
                    className="card"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p>
                      <i
                        className="bi bi-house"
                        style={{ fontSize: '1.5rem' }}
                      ></i>
                      주소: 제천시 청풍면 학현소야로 590 &nbsp;&nbsp; 전화번호:
                      043)653-9869
                    </p>
                  </div>
                </div>
                {/* 화살표------------------------------------------------ */}
                <div
                  className="mt-2"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </div>
                {/* 삼한의 초록길 ---------------------------------------------------*/}
                <div
                  className="card-body mt-2"
                  style={{
                    borderRadius: '15px',
                    backgroundColor: '#fda172',
                    width: '100%',
                  }}
                >
                  <h4 className="card-title" style={{ fontWeight: 'bold' }}>
                    삼한의 초록길
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={HealingImage3}
                      class="img-fluid"
                      alt="삼한의 초록길"
                      style={{ width: '550px', height: '370px' }}
                    ></img>
                  </div>
                  <p className="card-text">
                    청전동과 의림지 사이에 위치한 자연 생태체험공간 으로 2km에
                    달하는 1자형 걷기길에 수목류, 초화류 등 140여종의 식물을
                    식재하여 시민들의 많은 사랑을 받고 있는 산책로이다.
                  </p>
                  <div
                    className="card"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p>
                      <i
                        className="bi bi-house"
                        style={{ fontSize: '1.5rem' }}
                      ></i>
                      주소: 충북 제천시 성봉로 30 일대
                    </p>
                  </div>
                </div>
                {/* 화살표------------------------------------------------ */}
                <div
                  className="mt-2"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-down-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                    />
                  </svg>
                </div>
                {/* 중식시간 -------------------------------------------------------------------------*/}
                <div
                  className="d-flex justify-content-center align-items-center mt-2 mb-2"
                  style={{ height: '100%' }}
                >
                  <div className="card text-center" style={{ width: '500px' }}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <Col md={5}>
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: '0',
                            width: '100%',
                          }}
                        >
                          <b>전통시장</b>
                        </h4>
                        <img
                          src={Market1}
                          className="img-fluid"
                          alt="시장 사진"
                          style={{ width: '100%', marginRight: '10px' }}
                        />
                      </Col>
                      <Col>
                        <p>
                          역전한마음시장, 중앙 내토 동문시장
                          <br />
                          약초시장, 고추시장, 덕산시장
                          <br />
                          박달재 전통시장
                        </p>
                      </Col>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default healingCourseBoardView;
