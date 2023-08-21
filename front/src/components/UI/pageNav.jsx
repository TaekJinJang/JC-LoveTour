import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import logo from '../../assets/mainHeader-assets/logo.png';
import { Container, Nav, Figure, Navbar, Row, Col, Offcanvas, NavDropdown } from 'react-bootstrap';

function pageNav() {
    const [showMenu, setShowMenu] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = 'rgba(24, 242, 12, 0.5)';
        setShowMenu(true);
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = '';
        setShowMenu(false);
    };

    const handleOffcanvasToggle = () => {
        setShowOffcanvas((prevState) => !prevState);
        if (!showOffcanvas) {
            setShowMenu(false);
        }
    };

    return (
        <>
            <Row className="w-100 d-none d-md-flex m-0 p-0">
                <Col sm="4" className="p-0">
                    <Figure
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        className="mb-0 mt-3 ps-2"
                    >
                        <a href="/">
                            <Figure.Image width={250} height={50} src={logo} alt="logo" />
                        </a>
                    </Figure>
                </Col>
                <Col sm="8" className="mt-2 p-0 m-0">
                    <Navbar expand="md" className="bg-body-tertiary">
                        <Container style={{ width: '100%' }} className="mx-0">
                            <Navbar.Toggle aria-controls="navbar-offcanvas" onClick={handleOffcanvasToggle} />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav
                                    activeKey="/"
                                    onMouseEnter={() => setShowMenu(true)}
                                    onMouseLeave={() => setShowMenu(false)}
                                    className={`mb-5 ${showOffcanvas ? 'd-none d-md-flex' : ''}`}
                                >
                                    <Row
                                        style={{
                                            justifyContent: 'center',
                                            zIndex: '20',
                                            position: 'absolute',
                                            fontFamily: 'SUITE-Regular',
                                            alignItems: 'center',
                                        }}
                                        className="mx-0 pt-0 w-100"
                                    >
                                        <Col
                                            xs={3}
                                            style={{
                                                fontSize: '20px',
                                            }}
                                            className="px-0"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    href="/"
                                                    style={{
                                                        color: 'black',
                                                        fontWeight: 'bold',
                                                        fontSize: '22px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    러브투어
                                                </Nav.Link>
                                                {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                                                    <ul
                                                        style={{
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                            height: '250px',
                                                            marginTop: '0px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/introduce"
                                                            style={{
                                                                color: 'white',
                                                            }}
                                                        >
                                                            러브투어 소개
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/supportBenefit"
                                                            style={{
                                                                color: 'white',
                                                            }}
                                                        >
                                                            지원 혜택
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/gallery"
                                                            style={{ color: 'white' }}
                                                        >
                                                            사진 갤러리
                                                        </Nav.Link>
                                                    </ul>
                                                )}
                                            </Nav.Item>
                                        </Col>

                                        <Col
                                            xs={3}
                                            style={{
                                                fontSize: '20px',

                                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                                            }}
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    href="/board/touristSpot"
                                                    style={{
                                                        color: 'black',
                                                        fontWeight: 'bold',
                                                        fontSize: '22px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    이모저모
                                                </Nav.Link>
                                                {showMenu && (
                                                    <ul
                                                        style={{
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                            height: '250px',
                                                            marginTop: '0px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/touristSpot"
                                                            style={{ color: 'white' }}
                                                        >
                                                            관광지
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/traditionalMarket"
                                                            style={{ color: 'white' }}
                                                        >
                                                            전통시장
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/food"
                                                            style={{ color: 'white' }}
                                                        >
                                                            음식
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/accommodation"
                                                            style={{ color: 'white' }}
                                                        >
                                                            숙박
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/festival"
                                                            style={{ color: 'white' }}
                                                        >
                                                            축제/행사
                                                        </Nav.Link>
                                                    </ul>
                                                )}
                                            </Nav.Item>
                                        </Col>

                                        <Col
                                            xs={3}
                                            style={{
                                                fontSize: '20px',
                                                // display: 'flex',
                                                // justifyContent: 'center',
                                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                                            }}
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    href="/board/oksunbongPeakCourse"
                                                    style={{
                                                        color: 'black',
                                                        fontWeight: 'bold',
                                                        fontSize: '22px',
                                                        //width: '274px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    테마/코스
                                                </Nav.Link>
                                                {showMenu && (
                                                    <ul
                                                        style={{
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                            height: '250px',
                                                            marginTop: '0px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/oksunbongPeakCourse"
                                                            style={{ color: 'white' }}
                                                        >
                                                            옥순봉 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/cheongpunghoCourse"
                                                            style={{ color: 'white' }}
                                                        >
                                                            청풍호 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/museumCourse"
                                                            style={{ color: 'white' }}
                                                        >
                                                            박물관 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/shrineOfBaeronCourse"
                                                            style={{ color: 'white' }}
                                                        >
                                                            배론성지 코스
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/healingCourse"
                                                            style={{ color: 'white' }}
                                                        >
                                                            힐링 코스
                                                        </Nav.Link>
                                                    </ul>
                                                )}
                                            </Nav.Item>
                                        </Col>

                                        <Col
                                            xs={3}
                                            style={{
                                                fontSize: '20px',
                                                // display: 'flex',
                                                // justifyContent: 'center',
                                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                                            }}
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    href="/board/announce"
                                                    style={{
                                                        color: 'black',
                                                        fontWeight: 'bold',
                                                        fontSize: '22px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    알림마당
                                                </Nav.Link>
                                                {showMenu && (
                                                    <ul
                                                        style={{
                                                            background: 'rgba(17, 17, 17, 0.8)',
                                                            height: '250px',
                                                            marginTop: '0px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/announce"
                                                            style={{ color: 'white' }}
                                                        >
                                                            공지사항
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/faq"
                                                            style={{ color: 'white' }}
                                                        >
                                                            자주하는 질문
                                                        </Nav.Link>
                                                        <Nav.Link
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                            as="a"
                                                            href="/board/review"
                                                            style={{ color: 'white' }}
                                                        >
                                                            투어 후기
                                                        </Nav.Link>
                                                    </ul>
                                                )}
                                            </Nav.Item>
                                        </Col>
                                    </Row>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row className="d-md-none">
                {/* Offcanvas */}
                <div style={{ maxWidth: '500px' }}>
                    {[false].map((expand) => (
                        <Navbar key={expand} expand="xs" className="bg-body-tertiary pt-0 navbar fixed-top">
                            <Container fluid className="bg-success ps-0" style={{ width: '100%', overflowX: 'hidden' }}>
                                <Navbar.Brand href="/">러브투어</Navbar.Brand>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-${expand}`}
                                    placement="end"
                                    style={{ fontFamily: 'SUITE-Regular', maxWidth: '250px' }} // 폰트 스타일 지정
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                            러브투어 메뉴
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className="px-0">
                                        <Nav className="justify-content-end">
                                            {/* 제천 러브투어 */}
                                            <NavDropdown
                                                title="제천 러브투어"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                className="ps-2"
                                            >
                                                <NavDropdown.Item href="/board/introduce">
                                                    러브투어 소개
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/supportBenefit">
                                                    지원혜택
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/gallery">사진 갤러리</NavDropdown.Item>
                                            </NavDropdown>
                                            {/* 제천의 이모저모 */}
                                            <NavDropdown
                                                title="제천의 이모저모"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                className="ps-2"
                                            >
                                                <NavDropdown.Item href="/board/touristSpot">관광지</NavDropdown.Item>
                                                <NavDropdown.Item href="/board/traditionalMarket">
                                                    전통시장
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/food">음식</NavDropdown.Item>
                                                <NavDropdown.Item href="/board/accommodation">숙박</NavDropdown.Item>
                                                <NavDropdown.Item href="/board/festival">축제/행사</NavDropdown.Item>
                                            </NavDropdown>
                                            {/* 테마/코스 */}
                                            <NavDropdown
                                                title="테마/코스"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                className="ps-2"
                                            >
                                                <NavDropdown.Item href="/board/oksunbongPeakCourse">
                                                    옥순봉 코스
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/cheongpunghoCourse">
                                                    청풍호 코스
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/museumCourse">
                                                    박물관 코스
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/shrineOfBaeronCourse">
                                                    배론성지 코스
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="/board/healingCourse">
                                                    힐링 코스
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            {/* 알림마당 */}
                                            <NavDropdown
                                                title="알림마당"
                                                id={`offcanvasNavbarDropdown-expand-${expand}`}
                                                className="ps-2"
                                            >
                                                <NavDropdown.Item href="/board/announce">공지사항</NavDropdown.Item>
                                                <NavDropdown.Item href="/board/faq">자주하는 질문</NavDropdown.Item>
                                                <NavDropdown.Item href="/board/review">투어 후기</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    ))}
                </div>
            </Row>
        </>
    );
}

export default pageNav;
