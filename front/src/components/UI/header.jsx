import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import { Container, Nav, Figure, Row, Col, Navbar, Offcanvas, Button } from 'react-bootstrap';
import background2 from '../../assets/background2.png';
import logo from '../../assets/mainHeader-assets/logo.png';

function header() {
    const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#37ba86'; //마우스 호버시 배경 색을 초록색으로 설정
        setHover(true);
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = ''; //마우스가 떠나면 원래 배경을 돌아옴
        setHover(false);
    };
    return (
        <>
            {/* <Container
                className=" px-0 d-none d-lg-block "
                fluid="sm"
                style={{
                    backgroundImage: `url(${background2})`,
                    height: '250px',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    fontFamily: 'SUITE-Regular', // 폰트 스타일 지정
                    position: 'relative',
                }}
                onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
            > */}
            <Container
                fluid
                className="justify-content-center align-items-center mx-0 px-0"
                style={{ fontFamily: 'SUITE-Regular', height: '150px' }}
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
                    <Col xs={12} sm={10} xl={8} className="text-end">
                        <Button href="/admin" variant="light">
                            관리자 로그인
                        </Button>

                        <Button href="/admin" variant="light">
                            관리자 페이지
                        </Button>
                    </Col>
                </Row>

                <Navbar className="px-0" bg="white" expand="lg" style={{ zIndex: '30' }}>
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
                                    <Figure.Image className="mb-0" width={280} height={50} src={logo} alt="logo" />
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
                                                    투어소개
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
                                                            href="/board/gallery"
                                                        >
                                                            홍보물
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black "
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
                                                            href="/board/touristSpot"
                                                        >
                                                            관광지
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/traditionalMarketBoard"
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
                                                    href="/board/tourReservation"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    예약
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
                                                            href="/board/supportBenefit"
                                                        >
                                                            지원혜택
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/tourReservation"
                                                        >
                                                            예약현황
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/reservationInquiry"
                                                        >
                                                            예약문의
                                                        </Nav.Link>
                                                    </div>
                                                )}
                                            </Col>
                                            <Col md={12} xl={3}>
                                                <Nav.Link
                                                    className="text-black "
                                                    href="/board/announce"
                                                    style={{
                                                        fontSize: '25px',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    고객센터
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
                                                            1:1문의
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            className="text-black"
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            href="/board/narrator"
                                                        >
                                                            해설사방
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
        </>
    );
}

export default header;
