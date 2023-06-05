import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import { Container, Row, Col, ButtonGroup, Button, Card, Stack, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function accommodationBoardView() {
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
                    <Navbar bg="success" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <h4>홈</h4>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <NavDropdown as="h5" title="제천 러브투어" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown as="h5" title="러브투어 소개" id="basic-nav-dropdown">
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

                {/* 사이드 메뉴 */}
                <Row className="mt-3 ps-1" style={{ width: '100%' }}>
                    <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
                        <Card bg="success" text="white" style={{ height: '150px' }}>
                            <Card.Body className="bp-0">
                                <Card.Title className="my-3 mx-7 h-1">
                                    <h2>숙박</h2>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <ButtonGroup vertical>
                            <Button
                                href="/board/touristSpot"
                                variant="outline-success"
                                className="mb-2 p-2 rounded"
                                size="lg"
                                block
                            >
                                관광지
                            </Button>
                            <Button
                                href="/board/traditionalMarket"
                                variant="outline-success"
                                className="mb-2 p-2 rounded"
                                size="lg"
                                block
                            >
                                전통시장
                            </Button>
                            <Button
                                href="/board/food"
                                variant="outline-success"
                                className="mb-2 p-2 rounded"
                                size="lg"
                                block
                            >
                                음식
                            </Button>
                            <Button
                                href="/board/accommodation"
                                variant="outline-success"
                                className="mb-2 p-2 rounded"
                                size="lg"
                                block
                            >
                                숙박
                            </Button>
                            <Button
                                href="/board/festival"
                                variant="outline-success"
                                className="mb-2 p-2 rounded"
                                size="lg"
                                block
                            >
                                축제/행사
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
                            <h2>숙박</h2>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default accommodationBoardView;
