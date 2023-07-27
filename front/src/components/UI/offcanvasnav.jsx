import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Offcanvasnav() {
  return (
    <>
      <div style={{ maxWidth: '500px' }}>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            // expand={expand}
            expand="xs"
            className="bg-body-tertiary pt-0 navbar fixed-top"
          >
            <Container fluid className="bg-success ps-1 pe-2">
              <Navbar.Brand href="/">러브투어</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                placement="end"
                style={{ fontFamily: 'SUITE-Regular', maxWidth: '250px' }} // 폰트 스타일 지정
              >
                <Offcanvas.Header closeButton className="ps-2">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    러브투어 메뉴
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end pe-3 ps-2">
                    {/* 제천 러브투어 */}
                    <NavDropdown
                      title="제천 러브투어"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/board/introduce">
                        러브투어 소개
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/supportBenefit">
                        지원혜택
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/gallery">
                        사진 갤러리
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* 제천의 이모저모 */}
                    <NavDropdown
                      title="제천의 이모저모"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/board/touristSpot">
                        관광지
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/traditionalMarket">
                        전통시장
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/food">
                        음식
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/accommodation">
                        숙박
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/festival">
                        축제/행사
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* 테마/코스 */}
                    <NavDropdown
                      title="테마/코스"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
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
                    >
                      <NavDropdown.Item href="/board/announce">
                        공지사항
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/faq">
                        자주하는 질문
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/board/review">
                        투어 후기
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default Offcanvasnav;
