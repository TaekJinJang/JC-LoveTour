import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import { Carousel, Container, Nav, Form, Button, Figure, Row, Col, InputGroup } from 'react-bootstrap';
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
                style={{
                    backgroundImage: `url(${background2})`,
                    height: '250px',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div style={{ height: '5px' }}></div>

                <hr
                    style={{
                        borderTop: '1px solid white',
                        margin: '0 auto',
                    }}
                />
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    <Nav
                        activeKey="/"
                        onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                        onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
                    >
                        <Row
                            style={{
                                justifyContent: 'center',
                                width: '100%',
                                zIndex: '20',
                                position: 'absolute',
                                marginLeft: 0,
                                marginRight: 0,
                                //background: 'rgba(17, 17, 17, 0.6)', //배경색
                                fontFamily: 'SUITE-Regular', // 폰트 스타일 지정
                            }}
                        >
                            <Col
                                xs={3}
                                style={{
                                    fontSize: '20px',
                                    // display: 'flex',
                                    // justifyContent: 'center',
                                    //background: 'rgba(17, 17, 17, 0.6)',
                                    paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                    paddingRight: 0, // 오른쪽 패딩 0으로 설정
                                }}
                            >
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="/"
                                        style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            fontSize: '22px',
                                            //width: '250px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        제천 러브투어
                                    </Nav.Link>

                                    {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                                        <ul
                                            style={{
                                                background: 'rgba(17, 17, 17, 0.8)',
                                                height: '239px',
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
                                    // display: 'flex',
                                    // justifyContent: 'center',
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
                                            //width: '274px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        제천의 이모저모
                                    </Nav.Link>
                                    {showMenu && (
                                        <ul
                                            style={{
                                                background: 'rgba(17, 17, 17, 0.8)',
                                                height: '239px',
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
                                                height: '239px',
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
                                            // width: '202px',
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
                                                height: '239px',
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

                    <Row>
                        <Col className="text-center">
                            <div
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    zIndex: '1',
                                    position: 'absolute',
                                    top: '150px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    fontFamily: 'SUITE-Regular',
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
