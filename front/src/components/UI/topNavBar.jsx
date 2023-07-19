import React from 'react';
import { Row, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function topNavBar() {
    return (
        <Navbar
            bg="success"
            expand="lg"
            className="p-1"
            style={{
                fontFamily: 'Pretendard-Regular', // 폰트 스타일 지정
            }}
        >
            <Container>
                <Navbar.Brand href="/">
                    <h5>홈</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown as="h5" title="제천 러브투어" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/board/supportBenefit">지원혜택</NavDropdown.Item>
                            <NavDropdown.Item href="/board/gallery">사진 갤러리</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown as="h5" title="제천의 이모저모" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/board/touristSpot">관광지</NavDropdown.Item>
                            <NavDropdown.Item href="/board/traditionalMarket">전통시장</NavDropdown.Item>
                            <NavDropdown.Item href="/board/food">음식</NavDropdown.Item>
                            <NavDropdown.Item href="/board/accommodation">숙박</NavDropdown.Item>
                            <NavDropdown.Item href="/board/festival">축제/행사</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown as="h5" title="테마/코스" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/board/oksunbongPeakCourse">옥순봉 코스</NavDropdown.Item>
                            <NavDropdown.Item href="/board/cheongpunghoCourse">청풍호 코스</NavDropdown.Item>
                            <NavDropdown.Item href="/board/museumCourse">박물관 코스</NavDropdown.Item>
                            <NavDropdown.Item href="/board/shrineOfBaeronCourse">배론성지 코스</NavDropdown.Item>
                            <NavDropdown.Item href="/board/healingCourse">힐링 코스</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown as="h5" title="알림마당" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/board/announce">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="/board/faq">자주하는 질문</NavDropdown.Item>
                            <NavDropdown.Item href="/board/review">투어 후기</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default topNavBar;
