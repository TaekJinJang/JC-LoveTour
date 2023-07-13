import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import styled from 'styled-components';
import { ButtonGroup, Button, Card, Stack, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_GALLERY_POSTS_REQUEST } from '../../reducers/post';

function festivalBoardView() {
    // 페이지 버튼 눌린 상태로 만드려고 생성
    const [currentPage, setCurrentPage] = useState('축제/행사'); // 현재 페이지 상태
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

    // 행사 부분 클릭
    const handleLinkClick = (url) => {
        window.location.href = url;
    };

    const buttons = [
        { label: '관광지', href: '/board/touristSpot' },
        { label: '전통시장', href: '/board/traditionalMarket' },
        { label: '음식', href: '/board/food' },
        { label: '숙박', href: '/board/accommodation' },
        { label: '축제/행사', href: '/board/festival' },
    ];

    return (
        <>
            <Header />
            <Container style={{fontFamily: 'Pretendard-Regular',}}>
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    <TopNavBar />
                </Row>

                {/* 사이드바 */}
                <Row className="mt-3 ps-1" style={{ width: '100%' }}>
                    <Col md={3}>
                        <SideBar buttons={buttons} title={<div>제천의<br />이모저모</div>} />
                    </Col>
                    <Col md={9}>
                        <Row>
                            <h3>축제/행사</h3>
                            <hr></hr>
                            <table bordered className="mt-4 table table-hover" style={{ border: '1px solid #f2f2f2' }}>
                                <thead style={{ textAlign: 'center', backgroundColor: '#E0E0E0' }}>
                                    <tr>
                                        <th scope="col" width="20%">
                                            일자
                                        </th>
                                        <th scope="col" width="30%">
                                            장소
                                        </th>
                                        <th scope="col" width="50%">
                                            제목
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-16
                                        </td>
                                        <td scope="col" width="30%">
                                            제천재가노인센터
                                        </td>
                                        <td scope="col" width="50%">
                                            2023 육성지원사업(겨자씨친구들)
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=501'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-16
                                        </td>
                                        <td scope="col" width="30%">
                                            제천문화재단 3층 상영관
                                        </td>
                                        <td scope="col" width="50%">
                                            제천영상미디어센터 정기상영 '길버트 그레이프'
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=502'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-17
                                        </td>
                                        <td scope="col" width="30%">
                                            제천문화재단 3층 상영관
                                        </td>
                                        <td scope="col" width="50%">
                                            제천영상미디어센터 정기상영 '라따뚜이'
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=492'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-18
                                        </td>
                                        <td scope="col" width="30%">
                                            청전동 야외공연장
                                        </td>
                                        <td scope="col" width="50%">
                                            2023 육성지원사업(제천문화홍보단)
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=505'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-20
                                        </td>
                                        <td scope="col" width="30%">
                                            세종주간보호센터
                                        </td>
                                        <td scope="col" width="50%">
                                            2023 육성지원사업(한국연예예술단)
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=493'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-21
                                        </td>
                                        <td scope="col" width="30%">
                                            제천문화재단 3층 상영관
                                        </td>
                                        <td scope="col" width="50%">
                                            제천영상미디어센터 정기상영 '태극기 휘날리며'
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody
                                    onClick={() =>
                                        handleLinkClick(
                                            'http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=508'
                                        )
                                    }
                                >
                                    <tr>
                                        <td scope="col" width="20%">
                                            2023-06-24
                                        </td>
                                        <td scope="col" width="30%">
                                            청전동 야외공연장
                                        </td>
                                        <td scope="col" width="50%">
                                            2023 육성지원사업(제천연주인협회)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </>
    );
}

export default festivalBoardView;
