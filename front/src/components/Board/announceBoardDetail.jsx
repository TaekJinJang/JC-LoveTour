import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { REMOVE_POST_REQUEST } from '../../reducers/post';

// 상단 그림
import background2 from '../../assets/background2.png';

// 준비중 그림
import setting from '../../assets/setting.jpg';

// 공통부분
import { Container, Row, Col, Figure, Button } from 'react-bootstrap';
import PageNav from '../UI/pageNav';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';
import Header from '../UI/header';

import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import '../UI/boardUI.css';
import { backUrl } from '../../../config/config';

function announceBoardDetail() {
    const { admin } = useSelector((state) => state.admin);
    // const { mainPosts, REMOVE_POST_REQUEST } = useSelector((state) => state.post);
    const location = useLocation();
    const { post } = location?.state;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(post);

    const deleteBoard = useCallback(() => {
        navigate('/board/announce');
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, []);

    const updateBoard = useCallback(() => {
        navigate(`/board/announce/${post.id}/update`, { state: { post } });
    }, []);

    // 사이드바 내용
    const buttons = [
        { label: '공지사항', href: '/board/announce' },
        { label: '자주하는 질문', href: '/board/faq' },
        { label: '투어 후기', href: '/board/review' },
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
                    <h1 style={{ color: 'white' }}>알림마당</h1>
                </div>
            </Container>
            <Container fluid="sm" className="mt-5">
                <Row>
                    {/* 사이드바 */}
                    <Col xs={12} lg={3} sm={3} className="px-0">
                        <SideBar buttons={buttons} title={'상세보기'} />
                    </Col>
                    {/* 제목 */}
                    <Col xs={12} lg={9} sm={9}>
                        <Col xs={12} lg={12} sm={12}>
                            <h3>상세보기</h3>
                            <hr />
                        </Col>

                        <Col xs={12} lg={12} sm={12}>
                            <Row className="ps-4 pe-4">
                                <div className="w-100% p-0">
                                    {/* 제목은 나중에 수정 */}
                                    <h2>{post.title}</h2>
                                    <div style={{ float: 'right' }}>
                                        <span>작성일: </span>
                                        <span>{post.date} </span>
                                        <span>작성자: </span>
                                        <span>관리자 </span>
                                        <span>조회수: </span>
                                        <span>{post.views}</span>
                                    </div>
                                </div>

                                {post.Images.length > 0 &&
                                    post.Images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`${image.src}`}
                                            alt={`${image.src}`}
                                            // 사진 크기는 수정 해야함
                                            style={{ width: '300px', height: '200px' }}
                                        />
                                    ))}

                                <div className="w-100% p-0">{post.content}</div>
                                {/* {admin && ( */}
                                <>
                                    <Button variant="danger" onClick={deleteBoard}>
                                        삭제
                                    </Button>
                                    <Button variant="info" onClick={updateBoard}>
                                        수정
                                    </Button>
                                </>
                                {/* )} */}
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
export default announceBoardDetail;
