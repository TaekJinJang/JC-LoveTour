import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Carousel,
  Nav,
} from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
const All = styled.div`
  position: relative;
  height: 89px;
  box-shadow: 0px 0px 6px 0px rgba(41, 42, 42, 0.15);
  text-align: center;
  padding: 20px;
`;

// 지도 글씨
const Maptext = styled.div`
  font-size: 11px;
  font-weight: bold;
`;

// 검색창
const Label = styled.label`
  position: relative;
  input {
    padding: 0 50px 0 20px;
    height: 45px;
    line-height: 50px;
    border: 0;
    width: 480px;
    font-size: 16px;
    box-sizing: border-box;
    background: #eef0f2;
    border-radius: 10px;
  }
  button {
    position: absolute;
    top: 0;
    right: 7px;
    bottom: 0px;
    border-color: #eef0f2;
    border: none;
    height: 20px;
    margin-top: 6px;
  }
`;
const NavUl = styled.ul`
  list-style: none;
  padding: auto;
  padding-left: 0px;
  display: none;
  position: absolute;
  z-index: 1;
  top: 1;
  left: 0;
`;

const NavItem = styled(Nav.Item)`
  position: relative;
  margin-right: 65px;

  &:hover ${NavUl} {
    display: block;
    color: black;
  }
`;

const NavLi = styled(Nav.Link)`
  color: black;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    color: black;
  }
  white-space: nowrap;
  display: inline-block;
`;

const NavLi2 = styled(Nav.Link)`
  &:hover {
    color: black;
  }
  width: 200px;
  height: 50px;
  background-color: rgba(17, 17, 17, 0.4);
  color: white;
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 600;
  line-height: 30px;
`;

const Center = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
`;
function mainHeader() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container>
        <All>
          <Row>
            <Col xs="4">
              <img alt="logo" src={logo} width="300" height="52" />
            </Col>
            <Col xs="auto">
              <Label>
                <input
                  type="text"
                  placeholder="어디로, 어떤 여행을 떠날 예정인가요?"
                  title="검색"
                  autoComplete="on"
                />
                <button>
                  <img src={map} alt="search" width="25" height="25" />
                </button>
              </Label>
            </Col>
            <Col xs="1">
              <img
                className="Image-map"
                alt="map"
                src={map}
                width="25"
                height=""
              />
              <Maptext>지도로 보기</Maptext>
            </Col>
          </Row>
        </All>
      </Container>
      {/* 메뉴바 */}
      <Center>
        <Nav activeKey="/home">
          <NavItem>
            <NavLi href="/home">제천 러브투어</NavLi>
            <NavUl>
              <NavLi2 href="#">러브투어 소개</NavLi2>
              <NavLi2 href="#">지원 혜택</NavLi2>
              <NavLi2 href="#">사진 갤러리</NavLi2>
              <NavLi2 href="#">영상 갤러리</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">제천의 이모저모</NavLi>
            <NavUl>
              <NavLi2 href="#">관광지</NavLi2>
              <NavLi2 href="#">전통시장</NavLi2>
              <NavLi2 href="#">음식</NavLi2>
              <NavLi2 href="#">숙박</NavLi2>
              <NavLi2 href="#">축제/행사</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">테마/코스</NavLi>
            <NavUl>
              <NavLi2 href="#">기본코스</NavLi2>
              <NavLi2 href="#">힐링코스</NavLi2>
              <NavLi2 href="#">가스트로투어</NavLi2>
              <NavLi2 href="#">제천시티투어</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">예약</NavLi>
            <NavUl>
              <NavLi2 href="#">예약 신청</NavLi2>
              <NavLi2 href="#">예약 조회/취소</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">알림마당</NavLi>
            <NavUl>
              <NavLi2 href="#">공지사항</NavLi2>
              <NavLi2 href="#">자주하는 질문</NavLi2>
              <NavLi2 href="#">1:1고객센터</NavLi2>
            </NavUl>
          </NavItem>
        </Nav>
      </Center>
      {/* 캐러셀 */}
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{ height: '400px', width: '200px' }}
              className="d-block w-100"
              src={one}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>첫번째 슬라이드 입니다.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '400px', width: '200px' }}
              className="d-block w-100"
              src={two}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>두번째 슬라이드 입니다.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '400px', width: '200px' }}
              className="d-block w-100"
              src={three}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>세번째 슬라이드 입니다.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default mainHeader;
