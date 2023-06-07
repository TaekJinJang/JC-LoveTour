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
import {
    Container,
    Nav,
    Navbar,
    Table,
    NavDropdown,
    Row,
    Col,
    ButtonGroup,
    Card,
    Stack,
    Form,
    Badge,
} from 'react-bootstrap';

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
                                    <h3 className="mb-0">알림마당</h3>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <ButtonGroup vertical>
                            <Button
                                href="/board/announce"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block="true"
                            >
                                공지사항
                            </Button>
                            <Button
                                href="/board/faq"
                                variant="outline-success"
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block="true"
                            >
                                자주하는 질문
                            </Button>
                            <Button
                                href="/board/review"
                                variant={currentPage === '투어 후기' ? 'success' : 'outline-success'} // 현재 페이지에 따라 스타일 설정
                                className="mb-2 p-2 rounded-0"
                                size="lg"
                                block
                                onClick={() => setCurrentPage('투어 후기')} // 버튼 클릭 시 현재 페이지 업데이트
                            >
                                투어후기
                            </Button>

                            {/* block button 세로 길이 조정 */}
                        </ButtonGroup>
                    </Col>
                    <Col md={9} className="ps-2">
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
                            <Col className="mt-3 ps-0 pe-0 " style={{ width: '100%' }}>
                                {' '}
                                {currentPosts.map((post, index) => (
                                    <ReviewBoardList key={post.id} post={post} />
                                ))}
                                <Pagination
                                    activePage={page}
                                    itemsCountPerPage={10}
                                    totalItemsCount={reviewPosts.length}
                                    pageRangeDisplayed={5}
                                    prevPageText={'‹'}
                                    nextPageText={'›'}
                                    onChange={handlePageChange}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default reviewBoardView;
