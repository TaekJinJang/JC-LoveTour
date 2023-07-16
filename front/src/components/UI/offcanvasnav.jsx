import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Container,
} from "react-bootstrap";

function Offcanvasnav() {
  return (
    <>
      <Container className="bg-light" style={{ height: "65px" }}></Container>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary pt-0 navbar fixed-top"
        >
          <Container fluid className="bg-success">
            <Navbar.Brand href="/">러브투어</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              placement="end"
              style={{ fontFamily: "SUITE-Regular" }} // 폰트 스타일 지정
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{
                    fontSize: "30px",
                  }}
                >
                  러브투어 메뉴
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body
                style={{
                  fontSize: "25px",
                }}
              >
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{ fontSize: "20px" }}
                >
                  {/* 제천 러브투어 */}
                  <NavDropdown
                    title="제천 러브투어"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{
                      fontSize: "25px",
                    }}
                  >
                    <NavDropdown.Item
                      href="/board/introduce"
                      style={{ fontSize: "20px" }}
                    >
                      러브투어 소개
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/supportBenefit"
                      style={{ fontSize: "20px" }}
                    >
                      지원혜택
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/gallery"
                      style={{ fontSize: "20px" }}
                    >
                      사진 갤러리
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* 제천의 이모저모 */}
                  <NavDropdown
                    title="제천의 이모저모"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href="/board/touristSpot"
                      style={{ fontSize: "20px" }}
                    >
                      관광지
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/traditionalMarket"
                      style={{ fontSize: "20px" }}
                    >
                      전통시장
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/food"
                      style={{ fontSize: "20px" }}
                    >
                      음식
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/accommodation"
                      style={{ fontSize: "20px" }}
                    >
                      숙박
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/festival"
                      style={{ fontSize: "20px" }}
                    >
                      축제/행사
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* 테마/코스 */}
                  <NavDropdown
                    title="테마/코스"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href="/board/oksunbongPeakCourse"
                      style={{ fontSize: "20px" }}
                    >
                      옥순봉 코스
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/cheongpunghoCourse"
                      style={{ fontSize: "20px" }}
                    >
                      청풍호 코스
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/museumCourse"
                      style={{ fontSize: "20px" }}
                    >
                      박물관 코스
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/shrineOfBaeronCourse"
                      style={{ fontSize: "20px" }}
                    >
                      배론성지 코스
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/healingCourse"
                      style={{ fontSize: "20px" }}
                    >
                      힐링 코스
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* 알림마당 */}
                  <NavDropdown
                    title="알림마당"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href="/board/announce"
                      style={{ fontSize: "20px" }}
                    >
                      공지사항
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/faq"
                      style={{ fontSize: "20px" }}
                    >
                      자주하는 질문
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/board/review"
                      style={{ fontSize: "20px" }}
                    >
                      투어 후기
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Offcanvasnav;
