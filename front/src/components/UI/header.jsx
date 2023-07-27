import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

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
} from 'react-bootstrap';
import background2 from '../../assets/background2.png';

function header() {
    const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = 'rgba(24, 242, 12, 0.5)'; //마우스 호버시 배경 색을 초록색으로 설정
        setHover(true);
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = ''; //마우스가 떠나면 원래 배경을 돌아옴
        setHover(false);
    };
    return (
        <>
            <Container
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
            >
                <Navbar className=" px-0 text-center" expand="lg" style={{ width: '100%', height: '55px' }}>
                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Offcanvas placement="end" className="mx-0">
                        <Offcanvas.Header closeButton style={{ backgroundColor: 'transparent', borderBottom: 'none' }}>
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
                                                className="d-none d-lg-block " // 모바일 화면에서 숨김
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
                                        <hr className="d-block d-md-none" />
                                        {showMenu && (
                                            <Col
                                                md={3}
                                                lg={3}
                                                className="d-none d-lg-block " // 모바일 화면에서 숨김
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
                                                className="d-none d-lg-block " // 모바일 화면에서 숨김
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
                                                className="d-none d-lg-block " // 모바일 화면에서 숨김
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
            </Container>
        </>
    );
}

export default header;
