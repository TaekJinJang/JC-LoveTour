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
    Image,
} from 'react-bootstrap'; //부트스트랩 사용을 위한 임포트
import '../../../src/index.css'; //폰트설정을 위한 css 임포트
// import { FaSearch } from 'react-icons/fa'; //아이콘을 삽입을 위한 임포트

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
        e.target.style.backgroundColor = '#37ba86'; //마우스 호버시 배경 색을 초록색으로 설정
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
            <Container
                fluid
                className="justify-content-center align-items-center mx-0 px-0"
                style={{ fontFamily: 'SUITE-Regular', height: '70px' }}
            >
                <Row className="vw-100">
                    <Col xs={12} sm={6} xl={4}>
                        <Button href="https://www.jecheon.go.kr/www/index.do" variant="warning">
                            제천시청
                        </Button>
                        <Button href="https://tour.jecheon.go.kr/base/main/view" variant="success">
                            제천관광포털
                        </Button>
                        <Button href="http://citytour.jecheon.go.kr/index.php" variant="info">
                            제천택시투어
                        </Button>
                    </Col>
                    <Col xs={12} sm={10} xl={8} className="text-center">
                        <Button href="/admin" variant="light">
                            관리자 로그인
                        </Button>
                    </Col>
                </Row>

                <Navbar bg="white" className="px-0 text-center" expand="xl" style={{ zIndex: '30' }}>
                    <Row className="vw-100 px-0">
                        <Col xs={10} sm={10} xl={4} className="px-0">
                            <Figure
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                className="mb-0 px-0"
                            >
                                <a href="/">
                                    <Figure.Image className="mb-0" width={300} height={50} src={logo} alt="logo" />
                                </a>
                            </Figure>
                        </Col>
                        <Col
                            xs={2}
                            sm={2}
                            xl={8}
                            className="mt-3 justify-content-center"
                            onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                            onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
                        >
                            <Navbar.Toggle />
                            <Navbar.Offcanvas placement="end" className="mx-0">
                                <Offcanvas.Header
                                    closeButton
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderBottom: 'none',
                                    }}
                                >
                                    <Offcanvas.Title style={{ fontSize: '33px', fontWeight: 'bold' }}>
                                        러브투어 메뉴
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Row className="w-100 mx-0 ">
                                        <Nav className="px-0 text-center">
                                            <Col md={12} xl={3}>
                                                <Nav.Link
                                                    className="text-black"
                                                    href="/board/introduce"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    제천 러브투어
                                                </Nav.Link>
                                                <hr className="d-block d-md-none" />
                                                {showMenu && (
                                                    <div
                                                        className="d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            fontSize: '20px',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/introduce"
                                                        >
                                                            러브투어 소개
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/supportBenefit"
                                                        >
                                                            지원 혜택
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black "
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/gallery"
                                                        >
                                                            사진 갤러리
                                                        </Nav.Link>
                                                    </div>
                                                )}
                                            </Col>
                                            <Col md={12} xl={3}>
                                                <Nav.Link
                                                    className="text-black"
                                                    href="/board/touristSpot"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    여행정보
                                                </Nav.Link>
                                                <hr className=" d-block d-md-none" />
                                                {showMenu && (
                                                    <div
                                                        className="d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            fontSize: '20px',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/oksunbongPeakCourse"
                                                        >
                                                            테마/코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="board/touristSpot"
                                                        >
                                                            관광지
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/traditionalMarket"
                                                        >
                                                            전통시장
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/festival"
                                                        >
                                                            축제/행사
                                                        </Nav.Link>
                                                    </div>
                                                )}
                                            </Col>
                                            <Col md={12} xl={3}>
                                                <Nav.Link
                                                    className="text-black"
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
                                                    <div
                                                        className="d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            fontSize: '20px',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/announce"
                                                        >
                                                            공지사항
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/faq"
                                                        >
                                                            질문게시판
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/review"
                                                        >
                                                            투어후기
                                                        </Nav.Link>
                                                    </div>
                                                )}
                                            </Col>
                                            <Col md={12} xl={3}>
                                                <Nav.Link
                                                    className="text-black "
                                                    href="#"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    해설자방
                                                </Nav.Link>
                                                <hr className="d-block d-md-none" />
                                                {showMenu && (
                                                    <div
                                                        className="d-none d-lg-block " // 모바일 화면에서 숨김
                                                        style={{
                                                            fontSize: '20px',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="#"
                                                        >
                                                            자유게시판
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="#"
                                                        >
                                                            투어예약 현황
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="#"
                                                        >
                                                            해설사 근무배정표
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="#"
                                                        >
                                                            해설사 사진방
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="#"
                                                        >
                                                            해설사 현황
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="#"
                                                        >
                                                            통계자료방
                                                        </Nav.Link>
                                                    </div>
                                                )}
                                            </Col>
                                        </Nav>
                                    </Row>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Col>
                    </Row>
                </Navbar>
            </Container>

            {/*  캐러셀 */}
            <Container fluid className="vw-100 mx-0 px-0" style={{ fontFamily: 'SUITE-Regular' }}>
                <Row xl={12} className="px-0 mx-0">
                    <Col xl={12} className="px-0">
                        <Carousel style={{ fontFamily: 'SUITE-Regular' }}>
                            <Carousel.Item>
                                <img className="d-block" width="100%" height={600} src={uirimji} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>
                                    <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block" width="100%" height={600} src={Bakdaljae} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>
                                    <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    width="100%"
                                    height={600}
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
                                    className="d-block"
                                    width="100%"
                                    height={600}
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
                                    className="d-block"
                                    width="100%"
                                    height={600}
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
                                    className="d-block"
                                    width="100%"
                                    height={600}
                                    src={YonghagugokValley}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>
                                    <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    width="100%"
                                    height={600}
                                    src={SonggyeValley}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>
                                    <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    width="100%"
                                    height={600}
                                    src={OksunbongPeak}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>
                                    <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    width="100%"
                                    height={600}
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
                                    className="d-block"
                                    width="100%"
                                    height={600}
                                    src={BaeronHolyGround}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                    <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MainHeader;
