import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    Container,
    Nav,
    FormControl,
    Button,
    Figure,
    Row,
    Col,
    InputGroup,
    Navbar,
    NavDropdown,
    Offcanvas,
    Dropdown,
} from 'react-bootstrap'; //부트스트랩 사용을 위한 임포트
import '../../../src/index.css'; //폰트설정을 위한 css 임포트
import { FaSearch } from 'react-icons/fa'; //아이콘을 삽입을 위한 임포트

//사진을 넣기 위한 임포트..
import logo from '../../assets/mainHeader-assets/logo.png';
import map from '../../assets/mainHeader-assets/map.png';
import search from '../../assets/mainHeader-assets/search.png';
import uirimji from '../../assets/mainHeader-assets/Uirimji.png';
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

// src 속 뜨지 않던 holder.js -> https://via.placeholder.com/이미지규격 으로 변경시 전부 정상으로 뜸
// react.svg 사용하지 않았기에 삭제

function MainHeader() {
    const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#4FD174'; //마우스 호버시 배경 색을 초록색으로 설정
        // setHover(true);
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = ''; //마우스가 떠나면 원래 배경으로 돌아옴
        // setHover(false);
    };

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

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
        // header - 러브투어 로고, 검색 지도 아이콘
        <>
            <Container fluid="sm" style={{ fontFamily: 'SUITE-Regular' }}>
                <Row>
                    <Col xs={12} sm={12} xl={3}>
                        <Figure
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            className="mb-0 mt-2 ps-2"
                        >
                            <a href="/">
                                <Figure.Image width={300} height={50} src={logo} alt="logo" />
                            </a>
                        </Figure>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        xl={9}
                        className="mt-2"
                        onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                        onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
                    >
                        <Navbar
                            bg="white"
                            className=" mt-2 px-0 text-center"
                            expand="lg"
                            style={{ width: '100%', height: '55px', zIndex: '30' }}
                        >
                            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                            <Navbar.Toggle />
                            <Navbar.Offcanvas placement="start" className="mx-0">
                                <Offcanvas.Header
                                    closeButton
                                    style={{ backgroundColor: 'transparent', borderBottom: 'none' }}
                                >
                                    <Offcanvas.Title style={{ fontSize: '33px', fontWeight: 'bold' }}>
                                        러브투어 메뉴
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Row className="w-100 mx-0 ">
                                        <Nav className=" px-0 text-center">
                                            <Col md={12} lg={3}>
                                                <Nav.Link
                                                    className="text-black"
                                                    href="/"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    제천 러브투어
                                                </Nav.Link>
                                                <hr className="d-block d-md-none" />
                                                {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                                                    <Col
                                                        md={3}
                                                        lg={3}
                                                        className="mt-3 d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            // textAlign: 'center',
                                                            fontSize: '20px',
                                                            position: 'absolute',
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/introduce"
                                                        >
                                                            러브투어 소개
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/supportBenefit"
                                                        >
                                                            지원 혜택
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white "
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/gallery"
                                                            style={{ marginBottom: '92px' }}
                                                        >
                                                            사진 갤러리
                                                        </Nav.Link>
                                                    </Col>
                                                )}
                                            </Col>
                                            <Col md={12} lg={3}>
                                                <Nav.Link
                                                    className="text-black"
                                                    href="/board/touristSpot"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    제천의 이모저모
                                                </Nav.Link>
                                                <hr className=" d-block d-md-none" />
                                                {showMenu && (
                                                    <Col
                                                        md={3}
                                                        lg={3}
                                                        className=" mt-3 d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            // textAlign: 'center',
                                                            fontSize: '20px',
                                                            position: 'absolute',
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/touristSpot"
                                                            s
                                                        >
                                                            관광지
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/traditionalMarket"
                                                        >
                                                            전통시장
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/food"
                                                        >
                                                            음식
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/accommodation"
                                                        >
                                                            숙박
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/festival"
                                                        >
                                                            축제/행사
                                                        </Nav.Link>
                                                    </Col>
                                                )}
                                            </Col>
                                            <Col md={12} lg={3}>
                                                <Nav.Link
                                                    className="text-black"
                                                    href="/board/oksunbongPeakCourse"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    테마/코스
                                                </Nav.Link>
                                                <hr className="d-block d-md-none" />
                                                {showMenu && (
                                                    <Col
                                                        md={3}
                                                        lg={3}
                                                        className="mt-3 d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            // textAlign: 'center',
                                                            fontSize: '20px',
                                                            position: 'absolute',
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/oksunbongPeakCourse"
                                                        >
                                                            옥순봉 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/cheongpunghoCourse"
                                                        >
                                                            청풍호 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/museumCourse"
                                                        >
                                                            박물관 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/shrineOfBaeronCourse"
                                                        >
                                                            배론성지 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/healingCourse"
                                                        >
                                                            힐링 코스
                                                        </Nav.Link>
                                                    </Col>
                                                )}
                                            </Col>
                                            <Col md={12} lg={3}>
                                                <Nav.Link
                                                    className="text-black "
                                                    href="/board/announce"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    알림마당
                                                </Nav.Link>
                                                <hr className="d-block d-md-none" />
                                                {showMenu && (
                                                    <Col
                                                        md={3}
                                                        lg={3}
                                                        className="mt-3 d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            // textAlign: 'center',
                                                            fontSize: '20px',
                                                            position: 'absolute',
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/announce"
                                                        >
                                                            공지사항
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/faq"
                                                        >
                                                            자주하는 질문
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-white"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/review"
                                                            style={{ marginBottom: '92px' }}
                                                        >
                                                            투어 후기
                                                        </Nav.Link>
                                                    </Col>
                                                )}
                                            </Col>
                                        </Nav>
                                    </Row>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            {/*  캐러셀 */}
            <Container fluid="sm">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={uirimji} alt="First slide" />
                        <Carousel.Caption>
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={Bakdaljae} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
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
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
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
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
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
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다 .</p>
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
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={SonggyeValley} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" width={800} height={400} src={OksunbongPeak} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
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
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
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
                            <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                            <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}

export default MainHeader;
