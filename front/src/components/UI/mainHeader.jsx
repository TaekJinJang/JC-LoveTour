import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    Container,
    Nav,
    Form,
    Button,
    Figure,
    Row,
    Col,
    InputGroup,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';

import logo from '../../assets/mainHeader-assets/logo.png';
import map from '../../assets/mainHeader-assets/map.png';
import search from '../../assets/mainHeader-assets/search.png';
import uirimji from '../../assets/mainHeader-assets/uirimji.png';
import Bakdaljae from '../../assets/mainHeader-assets/Bakdaljae.png';
import WoraksanMountain from '../../assets/mainHeader-assets/WoraksanMountain.png';
import CheongpungCultural from '../../assets/mainHeader-assets/CheongpungCultural.png';
import GeumsusanMountain from '../../assets/mainHeader-assets/Geumsusan Mountain.png';
import YonghagugokValley from '../../assets/mainHeader-assets/Yonghagugok Valley.png';
import SonggyeValley from '../../assets/mainHeader-assets/Songgye Valley.png';
import OksunbongPeak from '../../assets/mainHeader-assets/Oksunbong Peak.png';
import TaksajeongPavilion from '../../assets/mainHeader-assets/Taksajeong Pavilion.png';
import BaeronHolyGround from '../../assets/mainHeader-assets/Baeron Holy Ground.png';

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
        <>
            <Container>
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0, height: '80px' }}>
                    <Col md={4} className="mt-3">
                        <Figure>
                            <a href="/">
                                <Figure.Image width={300} height={52} src={logo} alt="logo" />
                            </a>
                        </Figure>
                    </Col>
                    <Col md="auto" className="mt-4">
                        <InputGroup>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
                                aria-label="Search"
                                style={{
                                    backgroundColor: '#F0F0F0',
                                    width: '430px',
                                    borderRadius: '10px',
                                }}
                            />
                            <Button
                                variant="none"
                                href="#"
                                style={{
                                    backgroundImage: `url(${search})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: '40px',
                                    height: '40px',
                                    padding: 0,
                                    border: 'none',
                                }}
                            ></Button>
                        </InputGroup>
                    </Col>
                    <Col md="auto" className="mt-3">
                        <Figure className="text-center">
                            <a href="#">
                                <Figure.Image width={30} height={30} src={map} alt="map" />
                            </a>
                            <Figure.Caption className="text-dark" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                지도로 보기
                            </Figure.Caption>
                        </Figure>
                    </Col>

                    {/* <Form className="d-flex">
                            <InputGroup
                                style={{
                                    width: '430px',
                                }}
                            >
                                <Form.Control
                                placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
                                placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
                                className="me-2 mt-1"
                                    placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
                                className="me-2 mt-1"
                                    aria-label="Search"
                                    style={{
                                        backgroundColor: '#D9D9D9',
                                        width: '430px',
                                    }}
                                />
                            </InputGroup>
                            <Button
                                variant="outline-secondary"
                                style={{
                                    backgroundImage: `url(${search})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: '40px',
                                    height: '40px',
                                    padding: 0,
                                    border: 'none',
                                }}
                            ></Button>
                        </Form> */}

                    {/* <Col md={2} className="mt-3">
                        <Figure className="text-center">
                            <a href="/">
                                <Figure.Image className="mt-3" width={30} height={30} src={map} alt="map" />
                            </a>
                            <Figure.Caption className="text-dark" style={{ fontSize: '12px' }}>
                                지도로 보기
                            </Figure.Caption>
                        </Figure>
                    </Col> */}
                </Row>
            </Container>

            {/* 메뉴 */}

            <Container>
                <Nav
                    bg="dark"
                    expand="lg"
                    style={{
                        justifyContent: 'center',
                        width: '100%',
                        zIndex: '20',
                        position: 'absolute',
                        paddingRight: 'calc(10px - 10px)',
                        // backgroundColor: 'white',
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
                                    fontSize: '20px',
                                    width: '200px',
                                }}
                            >
                                제천 러브투어
                            </Nav.Link>

                            {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                                <ul
                                    style={{
                                        background: 'rgba(17, 17, 17, 0.7)',
                                        height: '250px',
                                        marginTop: '11px',
                                        fontSize: '18px',
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
                                    fontSize: '20px',
                                    width: '200px',
                                }}
                            >
                                제천의 이모저모
                            </Nav.Link>
                            {showMenu && (
                                <ul
                                    style={{
                                        background: 'rgba(17, 17, 17, 0.7)',
                                        height: '250px',
                                        marginTop: '11px',
                                        fontSize: '18px',
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
                                    fontSize: '20px',
                                    width: '200px',
                                }}
                            >
                                테마/코스
                            </Nav.Link>
                            {showMenu && (
                                <ul
                                    style={{
                                        background: 'rgba(17, 17, 17, 0.7)',
                                        height: '250px',
                                        marginTop: '11px',
                                        fontSize: '18px',
                                    }}
                                >
                                    <Nav.Link as="a" href="/board/oksunbongPeakCourse" style={{ color: 'white' }}>
                                        옥순봉 코스
                                    </Nav.Link>
                                    <Nav.Link as="a" href="/board/cheongpunghoCourse" style={{ color: 'white' }}>
                                        청풍호 코스
                                    </Nav.Link>
                                    <Nav.Link as="a" href="/board/museumCourse" style={{ color: 'white' }}>
                                        박물관 코스
                                    </Nav.Link>
                                    <Nav.Link as="a" href="/board/shrineOfBaeronCourse" style={{ color: 'white' }}>
                                        배론성지 코스
                                    </Nav.Link>
                                    <Nav.Link as="a" href="/board/healingCourse" style={{ color: 'white' }}>
                                        힐링 코스
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
                                    fontSize: '20px',
                                    width: '200px',
                                }}
                            >
                                알림마당
                            </Nav.Link>
                            {showMenu && (
                                <ul
                                    style={{
                                        background: 'rgba(17, 17, 17, 0.7)',
                                        height: '250px',
                                        marginTop: '11px',
                                        fontSize: '18px',
                                    }}
                                >
                                    <Nav.Link as="a" href="/board/announce" style={{ color: 'white' }}>
                                        공지사항
                                    </Nav.Link>
                                    <Nav.Link as="a" href="/board/faq" style={{ color: 'white' }}>
                                        자주하는 질문
                                    </Nav.Link>
                                    <Nav.Link as="a" href="/board/review" style={{ color: 'white' }}>
                                        투어 후기
                                    </Nav.Link>
                                </ul>
                            )}
                        </Nav.Item>
                    </Col>
                </Nav>
            </Container>

            {/* // 캐러셀 */}
            <Container>
                <Carousel style={{ zIndex: '10', marginTop: '58px' }}>
                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={uirimji} alt="First slide" />
                        <Carousel.Caption>
                            <h3>제천 전통시장 러브투어 소식 광고 알림</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={Bakdaljae} alt="Second slide" />

                        <Carousel.Caption>
                            <h3>제천 전통시장 러브투어 소식 광고 알림</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src={WoraksanMountain}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>각기 다른 알림 문구를 올릴 수 있습니다.</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src={CheongpungCultural}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>제천 전통시장 러브투어 소식 광고 알림</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src={GeumsusanMountain}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>각기 다른 알림 문구를 올릴 수 있습니다.</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src={YonghagugokValley}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>제천 전통시장 러브투어 소식 광고 알림</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={SonggyeValley} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>각기 다른 알림 문구를 올릴 수 있습니다.</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={OksunbongPeak} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>제천 전통시장 러브투어 소식 광고 알림</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src={TaksajeongPavilion}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>각기 다른 알림 문구를 올릴 수 있습니다.</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800}
                            height={400}
                            src={BaeronHolyGround}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>제천 전통시장 러브투어 소식 광고 알림</h3>

                            <p>제천 전통시장 러브투어 소식 광고 알림을 업로드하는 곳입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}

export default MainHeader;
