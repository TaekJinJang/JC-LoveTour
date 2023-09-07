import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';

// 상단 그림
import background2 from '../../assets/background2.png';

import styled from 'styled-components';
import { ButtonGroup, Button, Card, Stack, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// 공통부분
import { Container, Row, Col, Figure } from 'react-bootstrap';
import PageNav from '../UI/pageNav';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';
import Header from '../UI/header';

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

    // 사이드바 내용
    const buttons = [
        { label: '러브투어 소개', href: '/board/introduce' },
        { label: '지원 혜택', href: '/board/supportBenefit' },
        { label: '사진 갤러리', href: '/board/gallery' },
    ];

    return (
        <>
            <Header />
            {/* <PageNav /> */}
            <Container
                fluid
                style={{ fontFamily: 'SUITE-Regular', width: '100vw' }}
                className="container-fluid mx-0 px-0 "
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
                <Row xl={3}>
                    {/* 제목 */}
                    <Col xs={3} sm={3} xl={3} className="px-0 d-none d-lg-block ">
                        <SideBar buttons={buttons} title={'제천 러브투어'} />
                    </Col>
                    <Col xs={9} sm={9} xl={9}>
                        <h3>러브투어 소개</h3>
                        <hr />
                        <Col xs={12} sm={9} xl={9}>
                            <Container fluid="sm">
                                {/* 그림이 왼쪽에 있어요 */}
                                <Row className="mb-2 ps-3">
                                    <Col
                                        md={4}
                                        style={{
                                            backgroundImage: `url(${background})`,
                                            height: '250px',
                                            width: '40%',
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
                                                <p>
                                                    안녕하십니까 지금 만든 폼은 ■■이가 만들었어요 앞으로 내용을
                                                    넣을거에요
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={2} className="bg-primary" style={{ float: 'right' }}></Col>
                                </Row>
                                {/* 그림이 오른쪽에 있어요 */}
                                <Row className="mb-2 ps-3">
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
                                                <p>
                                                    안녕하십니까 지금 만든 폼은 ■■이가 만들었어요 앞으로 내용을
                                                    넣을거예요
                                                </p>
                                            </span>
                                        </div>
                                    </Col>

                                    <Col
                                        md={4}
                                        style={{
                                            backgroundImage: `url(${background})`,
                                            height: '250px',
                                            width: '40%',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            float: 'left',
                                        }}
                                    ></Col>
                                </Row>
                            </Container>
                        </Col>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default introduceBoardView;
