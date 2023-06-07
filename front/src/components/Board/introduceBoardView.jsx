import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import { Container, Row, Col, ButtonGroup, Button, Card, Stack, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// 백그라운드 임포트
import background from '../../assets/background.png';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function introduceBoardView() {
    // 페이지 버튼 눌린 상태로 만드려고 생성
    const [currentPage, setCurrentPage] = useState('러브투어 소개'); // 현재 페이지 상태
    const { admin } = useSelector((state) => state.admin);
    const { gallery } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    // 페이지네이션
    const [page, setPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState([]);
    const indexOfLastPost = page * 10;
    const indexOfFirstPost = indexOfLastPost - 10;
    const handlePageChange = (page) => {
        setPage(page);
    };
    useEffect(() => {
        setCurrentPosts(gallery.slice(indexOfFirstPost, indexOfLastPost));
    }, [gallery, indexOfFirstPost, indexOfLastPost, page]);

    useEffect(() => {
        dispatch({
            type: LOAD_GALLERY_POSTS_REQUEST,
        });
    }, []);

    return (
        <>
            <Container>
                {/* 상단 네비바 */}
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    <Navbar bg="success" expand="lg" className="p-0">
                        <Container style={{ top: '-2px' }}>
                            <Navbar.Brand href="#home">
                                <h6>홈</h6>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <NavDropdown as="h6" title="제천 러브투어" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown as="h6" title="러브투어 소개" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>

                {/* 사이드바 */}
                <Row className="mt-3 ps-1" style={{ width: '100%' }}>
                    <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
                        <Card bg="success" text="white" className="rounded-0">
                            <Card.Body className="pb-1 pt-1">
                                <Card.Title style={{ textAlign: 'center' }}>
                                    <h3 className="mb-0">러브투어 소개</h3>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <ButtonGroup vertical>
                            <Button
                                href="/board/introduce"
                                variant={currentPage === '러브투어 소개' ? 'success' : 'outline-success'} // 현재 페이지에 따라 스타일 설정
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                                onClick={() => setCurrentPage('러브투어 소개')} // 버튼 클릭 시 현재 페이지 업데이트
                            >
                                러브투어 소개
                            </Button>
                            <Button
                                href="/board/supportBenefit"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                지원 혜택
                            </Button>
                            <Button
                                href="/board/gallery"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                사진 갤러리
                            </Button>
                            <Button
                                href="/board/videoGallery"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                            >
                                영상 갤러리
                            </Button>
                            {/* block button 세로 길이 조정 */}
                        </ButtonGroup>
                    </Col>
                    {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
                    {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
                    <Col md={9}>
                        <Row>
                            <h3>러브투어 소개</h3>
                            <hr />
                        </Row>
                        {/* 그림이 왼쪽에 있어요 */}
                        <Row className="mb-2">
                            <Col
                                md={4}
                                style={{
                                    backgroundImage: `url(${background})`,
                                    height: '250px',
                                    width: '50%',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    float: 'left',
                                }}
                            ></Col>
                            <Col md={4} style={{ position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '20%',
                                        transform: 'translate(-50%, -50%)',
                                        background: '#fff',
                                        width: '200%',
                                        height: '80%',
                                        display: 'flex',
                                        // alignItems: 'center',
                                        justifyContent: 'left',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '20px',

                                            color: 'black',
                                        }}
                                    >
                                        <h3>러브투어 소개글</h3>
                                        <p>안녕하십니까 지금 만든 폼은 세일이가 만들었어요 앞으로 내용을 넣을거예여</p>
                                    </span>
                                </div>
                            </Col>
                            <Col md={2} className="bg-primary" style={{ float: 'right' }}></Col>
                        </Row>
                        {/* 그림이 오른쪽에 있어요 */}
                        <Row className="mb-2">
                            <Col md={2} className="bg-primary" style={{ float: 'right' }}></Col>
                            <Col md={4} style={{ position: 'relative' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '80%',
                                        transform: 'translate(-50%, -50%)',
                                        background: '#fff',
                                        width: '200%',
                                        height: '80%',
                                        display: 'flex',
                                        // alignItems: 'center',
                                        justifyContent: 'left',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '20px',

                                            color: 'black',
                                        }}
                                    >
                                        <h3>러브투어 소개글</h3>
                                        <p>안녕하십니까 지금 만든 폼은 세일이가 만들었어요 앞으로 내용을 넣을거예여</p>
                                    </span>
                                </div>
                            </Col>

                            <Col
                                md={4}
                                style={{
                                    backgroundImage: `url(${background})`,
                                    height: '250px',
                                    width: '50%',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    float: 'left',
                                }}
                            ></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default introduceBoardView;
