import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewBoardList from './reviewBoardList';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { LOAD_REVIEW_POSTS_REQUEST } from '../../reducers/post';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import { Nav, Navbar, Table, NavDropdown, ButtonGroup, Card, Stack, Form, Badge } from 'react-bootstrap';

// 상단 그림
import background2 from '../../assets/background2.png';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

function reviewBoardView() {
    // 페이지 버튼 눌린 상태로 만드려고 생성
    const [currentPage, setCurrentPage] = useState('투어 후기'); // 현재 페이지 상태
    const { admin } = useSelector((state) => state.admin);
    const { reviewPosts } = useSelector((state) => state.post);
    // 페이지네이션
    const [page, setPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState([]);
    const indexOfLastPost = page * 10;
    const indexOfFirstPost = indexOfLastPost - 10;
    const [searchInput, onChangeSearchInput] = useInput('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goToSearch = useCallback(() => {
        if (searchInput === '') return alert('검색어를 입력해주세요');
        navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
    }, [searchInput]);

    const handlePageChange = (page) => {
        setPage(page);
    };
    useEffect(() => {
        setCurrentPosts(reviewPosts.slice(indexOfFirstPost, indexOfLastPost));
    }, [reviewPosts, indexOfFirstPost, indexOfLastPost, page]);
    useEffect(() => {
        dispatch({
            type: LOAD_REVIEW_POSTS_REQUEST,
        });
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
                <Row className="mt-3 ps-1" style={{ width: '100%' }}>
                    <Col md={3}>
                        <SideBar buttons={buttons} title={'알림마당'} />
                    </Col>
                    <Col md={9}>
                        <Row>
                            <h3>투어후기</h3>
                            <hr />
                        </Row>
                        <Row className="mt-2">
                            <Col className="bg-light border pt-1">
                                <Col className="mb-1" style={{ float: 'right' }}>
                                    <Stack direction="horizontal" gap={3}>
                                        <Form.Control type="text" value={searchInput} onChange={onChangeSearchInput} />
                                        <Button
                                            variant="success"
                                            text="white"
                                            style={{ width: '130px' }}
                                            onClick={goToSearch}
                                        >
                                            검색
                                        </Button>
                                    </Stack>
                                </Col>
                                <Col>
                                    {/* 서치바 드롭다운 메뉴 */}

                                    <Form.Select className="me-3" style={{ float: 'right', width: '100px' }}>
                                        <option>전체</option>
                                        <option value="1">최신순</option>
                                        <option value="2">게시글순</option>
                                        <option value="3">왓에버순</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Link to="/board/review/add">
                                        <Button variant="success">후기쓰기</Button>
                                    </Link>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            {/* 게시물 기재 테이블 */}
                            <Table bordered className="mt-4 table table-hover" style={{ border: '1px solid #f2f2f2' }}>
                                <thead
                                    style={{
                                        textAlign: 'center',
                                        backgroundColor: '#E0E0E0',
                                    }}
                                >
                                    <tr>
                                        <th scope="col" width="20%">
                                            글번호
                                        </th>
                                        <th scope="col" width="20%">
                                            작성자
                                        </th>
                                        <th scope="col" width="20%">
                                            작성일
                                        </th>
                                        {/* <th scope="col" width="20%">
                        작성일
                      </th> */}
                                        <th scope="col" width="40%">
                                            내용
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    style={{
                                        textAlign: 'center',
                                    }}
                                >
                                    {currentPosts.map((post, index) => (
                                        <ReviewBoardList
                                            key={post.id}
                                            post={post}
                                            //   page={page}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                            {/* <Col className="mt-3 ps-0 pe-0 " style={{ width: '100%' }}>
                                    {' '}
                                    {currentPosts.map((post, index) => (
                                        <ReviewBoardList key={post.id} post={post} />
                                    ))} */}
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={10}
                                totalItemsCount={reviewPosts.length}
                                pageRangeDisplayed={5}
                                prevPageText={'‹'}
                                nextPageText={'›'}
                                onChange={handlePageChange}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    );
}
export default reviewBoardView;
