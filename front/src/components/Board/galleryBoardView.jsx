import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';

// 상단 그림
import background2 from '../../assets/background2.png';

// 공통부분
import { Container, Row, Col, Figure, Button, Stack, Form } from 'react-bootstrap';
import PageNav from '../UI/pageNav';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';
import Header from '../UI/header';

import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function galleryBoardView() {
    // 페이지 버튼 눌린 상태로 만드려고 생성
    const [currentPage, setCurrentPage] = useState('사진 갤러리'); // 현재 페이지 상태
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
    // 사이드바 내용
    const buttons = [
        { label: '러브투어 소개', href: '/board/introduce' },
        { label: '지원 혜택', href: '/board/supportBenefit' },
        { label: '사진 갤러리', href: '/board/gallery' },
    ];
    return (
        <>
            <Header />

            {/* 상단이미지 */}
            <Container
                fluid
                style={{ height: '40vh', width: '100vw', overflowX: 'hidden' }}
                className="container-fluid m-0 p-0"
            >
                <div
                    style={{
                        backgroundImage: `url(${background2})`,
                        height: '37vh',
                        width: '100vw',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center', // 가로 방향 가운데 정렬
                        alignItems: 'center', // 세로 방향 가운데 정렬
                    }}
                >
                    <h1 style={{ color: 'white' }}>제천 러브투어</h1>
                </div>
            </Container>
            <Container fluid="sm" className="mt-5">
                <Row>
                    {/* 사이드바 */}
                    <Col xs={12} lg={3} sm={3} className="px-0">
                        <SideBar buttons={buttons} title={'제천 러브투어'} />
                    </Col>
                    {/* 제목 */}
                    <Col xs={12} lg={9} sm={9}>
                        <Col xs={12} lg={12} sm={12}>
                            <h3>사진 갤러리</h3>
                            <hr />
                        </Col>

                        <Col xs={12} lg={12} sm={12}>
                            <Row className="mt-2 px-3">
                                <Col className="bg-light border pt-1">
                                    <Col className="mb-1" style={{ float: 'right' }}>
                                        <Stack direction="horizontal" gap={3}>
                                            <Form.Control className="ms-auto" />
                                            <Button variant="success" text="white" style={{ width: '130px' }}>
                                                검색
                                            </Button>
                                        </Stack>
                                    </Col>
                                    {/* 서치바 드롭다운 메뉴 통일 */}
                                    <Form.Select className="me-2" style={{ float: 'right', width: '100px' }}>
                                        <option>전체</option>
                                        <option value="1">최신순</option>
                                        <option value="2">게시글순</option>
                                        <option value="3">왓에버순</option>
                                    </Form.Select>

                                    {admin && (
                                        <Link to="/board/gallery/add">
                                            <Button>글쓰기</Button>
                                        </Link>
                                    )}
                                </Col>
                            </Row>
                            <Row className="mt-2 px-3">
                                {currentPosts.map((post, index) => (
                                    <GalleryBoardList key={post.id} post={post} />
                                ))}
                            </Row>
                            <Row>
                                <Pagination
                                    activePage={page}
                                    itemsCountPerPage={10}
                                    totalItemsCount={gallery.length}
                                    pageRangeDisplayed={5}
                                    prevPageText={'‹'}
                                    nextPageText={'›'}
                                    onChange={handlePageChange}
                                />
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
            {/* 푸터 */}
            <Container fluid style={{ width: '100vw', overflowX: 'hidden' }} className="container-fluid mx-0 p-0">
                <Footer />
            </Container>
        </>
    );
}

export default galleryBoardView;
