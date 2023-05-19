import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

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
} from 'react-bootstrap';
import background from '../../assets/background.png';

function header() {
  const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값
  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${background})`,
          height: '400px',
          width: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Row>
          <Col style={{ height: '55px' }}></Col>
        </Row>
        <hr
          style={{
            borderTop: '1px solid white',
            margin: '0 auto',
          }}
        />
        <Row>
          <Nav
            style={{
              justifyContent: 'center',
              width: '100%',
              zIndex: '30',
              position: 'absolute',
              paddingRight: 'calc(10px - 10px)',
            }}
            onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
            onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
          >
            <Col
              md="auto"
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              <Nav.Item as="li">
                <Nav.Link
                  href="/"
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    width: '194px',
                  }}
                >
                  제천 러브투어
                </Nav.Link>

                {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                  <ul
                    style={{
                      background: 'rgba(17, 17, 17, 0.8)',
                      height: '250px',
                      marginTop: '0px',
                    }}
                  >
                    <Nav.Link as="a" href="#">
                      러브투어 소개
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      지원 혜택
                    </Nav.Link>
                    <Nav.Link as="a" href="/board/gallery">
                      사진 갤러리
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
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
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    width: '194px',
                  }}
                >
                  제천의 이모저모
                </Nav.Link>

                {showMenu && (
                  <ul
                    style={{
                      background: 'rgba(17, 17, 17, 0.8)',
                      height: '250px',
                      marginTop: '0px',
                    }}
                  >
                    <Nav.Link as="a" href="#">
                      관광지
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      전통시장
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      음식
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      숙박
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
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
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    width: '175px',
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
                    }}
                  >
                    <Nav.Link as="a" href="#">
                      기본코스
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      힐링코스
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      가스트로투어
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
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
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    width: '170px',
                  }}
                >
                  예약
                </Nav.Link>

                {showMenu && (
                  <ul
                    style={{
                      background: 'rgba(17, 17, 17, 0.8)',
                      height: '250px',
                      marginTop: '0px',
                    }}
                  >
                    <Nav.Link as="a" href="#">
                      예약 신청
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      예약 조회/취소
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
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '22px',
                    width: '190px',
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
                    }}
                  >
                    <Nav.Link as="a" href="/board/announce">
                      공지사항
                    </Nav.Link>
                    <Nav.Link as="a" href="#">
                      자주하는 질문
                    </Nav.Link>
                  </ul>
                )}
              </Nav.Item>
            </Col>
          </Nav>

          <Row>
            <Col className="text-center">
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  zIndex: '1',
                  position: 'absolute',
                  top: '300px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <h2>제천여행</h2>
                <h6>머물고 싶은 자연 치유도시 제천 여행</h6>
              </div>
            </Col>
          </Row>
        </Row>
        <hr
          style={{
            borderTop: '1px solid white',
            marginTop: '47px',
          }}
        />
      </Container>
    </>
  );
}

export default header;
