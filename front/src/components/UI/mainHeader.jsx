import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Nav, Form, Button, Figure, Row, Col, InputGroup } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
import search from '../../assets/search.png';
import { fa } from 'faker/lib/locales';
import { LOAD_ALL_POSTS_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

// import styled from 'styled-components';

// src 속 뜨지 않던 holder.js -> https://via.placeholder.com/이미지규격 으로 변경시 전부 정상으로 뜸
// react.svg 사용하지 않았기에 삭제

function MainHeader() {
    const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값
    const { mainPosts } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        if (mainPosts.length === 0) {
            dispatch({
                type: LOAD_ALL_POSTS_REQUEST,
            });
        }
    }, []);

    return (
        // header - logo, search, mapicon
        <Container>
            <Container className="justify-content-md-center">
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    <Col md={4} className="mt-3">
                        <Figure>
                            <a href="/">
                                <Figure.Image className="me-2 mt-1" width={300} height={52} src={logo} alt="logo" />
                            </a>
                        </Figure>
                    </Col>
                    <Col md={6} className="mt-4">
                        {/* 버튼을 인풋안에 넣었음 */}
                        {/* <InputGroup>
          <Form.Control
              type="search"
              placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
              aria-label="Search"
              style={{ backgroundColor: '#D9D9D9' }}
            />
            <Figure className="m-0 me-2 mt-1">
            <Figure.Image
            style={{ backgroundColor: '#D9D9D9' }}
              width={30}
              height={30}
              src={search}
              alt="search"/>
              </Figure>
          </InputGroup> */}

                        {/* 아래 주석을 풀면 버튼은 인풋 밖으로 나옴 */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
                                className="me-2 mt-1"
                                aria-label="Search"
                                style={{ backgroundColor: '#D9D9D9', width: '400px' }}
                            />
                            <Button
                                variant="none"
                                className="me-2 mt-1"
                                style={{
                                    backgroundImage: `url(${search})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: '40px',
                                    height: '40px',
                                    padding: 0,
                                    border: 'none',
                                }}
                            />
                        </Form>
                    </Col>

                    <Col md={2} className="mt-3">
                        <Figure className="text-center">
                            <a href="/">
                                <Figure.Image className="mt-3" width={30} height={30} src={map} alt="map" />
                            </a>
                            <Figure.Caption className="text-dark" style={{ fontSize: '12px' }}>
                                지도로 보기
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>

            {/* // 메뉴 */}

            {/* 메뉴바 */}

            <Nav
                style={{
                    justifyContent: 'center',
                    width: '100%',
                    zIndex: '20',
                    position: 'absolute',
                    paddingRight: 'calc(10px - 10px)',
                }}
                activeKey="/"
                onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
            >
                <Col
                    md="auto"
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <Nav.Item as="li">
                        <Nav.Link
                            href="/"
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '22px',
                                width: '200px',
                            }}
                        >
                            제천 러브투어
                        </Nav.Link>

                        {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                            <ul
                                style={{
                                    background: 'rgba(17, 17, 17, 0.8)',
                                    height: '250px',
                                    marginTop: '11px',
                                }}
                            >
                                <Nav.Link
                                    as="a"
                                    href="/board/introduce"
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    러브투어 소개
                                </Nav.Link>
                                <Nav.Link
                                    as="a"
                                    href="/board/supportBenefit"
                                    style={{
                                        color: 'white',
                                    }}
                                >
                                    지원 혜택
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/gallery" style={{ color: 'white' }}>
                                    사진 갤러리
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/videoGallery" style={{ color: 'white' }}>
                                    영상 갤러리
                                </Nav.Link>
                            </ul>
                        )}
                    </Nav.Item>
                </Col>

                <Col
                    md="auto"
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <Nav.Item as="li">
                        <Nav.Link
                            href="/"
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '22px',
                                width: '200px',
                            }}
                        >
                            제천의 이모저모
                        </Nav.Link>
                        {showMenu && (
                            <ul
                                style={{
                                    background: 'rgba(17, 17, 17, 0.8)',
                                    height: '250px',
                                    marginTop: '11px',
                                }}
                            >
                                <Nav.Link as="a" href="/board/touristSpot" style={{ color: 'white' }}>
                                    관광지
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/traditionalMarket" style={{ color: 'white' }}>
                                    전통시장
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/food" style={{ color: 'white' }}>
                                    음식
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/accommodation" style={{ color: 'white' }}>
                                    숙박
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/festival" style={{ color: 'white' }}>
                                    축제/행사
                                </Nav.Link>
                            </ul>
                        )}
                    </Nav.Item>
                </Col>

                <Col
                    md="auto"
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <Nav.Item as="li">
                        <Nav.Link
                            href="/"
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '22px',
                                width: '200px',
                            }}
                        >
                            테마/코스
                        </Nav.Link>
                        {showMenu && (
                            <ul
                                style={{
                                    background: 'rgba(17, 17, 17, 0.8)',
                                    height: '250px',
                                    marginTop: '11px',
                                }}
                            >
                                <Nav.Link as="a" href="/board/basicCourse" style={{ color: 'white' }}>
                                    기본코스
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/healingCourse" style={{ color: 'white' }}>
                                    힐링코스
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/gastroTour" style={{ color: 'white' }}>
                                    가스트로투어
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/cityTour" style={{ color: 'white' }}>
                                    제천시티투어
                                </Nav.Link>
                            </ul>
                        )}
                    </Nav.Item>
                </Col>

                <Col
                    md="auto"
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <Nav.Item as="li">
                        <Nav.Link
                            href="/board/review"
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '22px',
                                width: '200px',
                            }}
                        >
                            후기 게시판
                        </Nav.Link>
                        {showMenu && (
                            <ul
                                style={{
                                    background: 'rgba(17, 17, 17, 0.8)',
                                    height: '250px',
                                    marginTop: '11px',
                                }}
                            >
                                <Nav.Link as="a" href="#" style={{ color: 'white' }}>
                                    후기 작성
                                </Nav.Link>
                                <Nav.Link as="a" href="#" style={{ color: 'white' }}>
                                    후기 조회/삭제
                                </Nav.Link>
                            </ul>
                        )}
                    </Nav.Item>
                </Col>

                <Col
                    md="auto"
                    style={{
                        fontSize: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    <Nav.Item as="li">
                        <Nav.Link
                            href="/board/announce"
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '22px',
                                width: '200px',
                            }}
                        >
                            알림마당
                        </Nav.Link>
                        {showMenu && (
                            <ul
                                style={{
                                    background: 'rgba(17, 17, 17, 0.8)',
                                    height: '250px',
                                    marginTop: '11px',
                                }}
                            >
                                <Nav.Link as="a" href="/board/announce" style={{ color: 'white' }}>
                                    공지사항
                                </Nav.Link>
                                <Nav.Link as="a" href="/board/faq" style={{ color: 'white' }}>
                                    자주하는 질문
                                </Nav.Link>
                            </ul>
                        )}
                    </Nav.Item>
                </Col>
            </Nav>
            {/* // 캐러셀 */}
            <Container>
                <Carousel style={{ zIndex: '10', marginTop: '60px' }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>

                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src="https://via.placeholder.com/800x400"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src="https://via.placeholder.com/800x400"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Container>
    );
}

export default MainHeader;
