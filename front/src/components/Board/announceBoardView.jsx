import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnounceBoardList from './announceBoardList';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';

import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import '../UI/boardUI.css';
// 사이드바 라이브러리 추가

import {
  Container,
  Nav,
  Navbar,
  Table,
  NavDropdown,
  Button,
  Row,
  Col,
  ButtonGroup,
  Card,
  Stack,
  Form,
  Badge,
} from 'react-bootstrap';

import { LOAD_POSTS_REQUEST } from '../../reducers/post';

function announceBoardView() {
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.admin);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const indexOfLastPost = page * 10;
  const indexOfFirstPost = indexOfLastPost - 10;

  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    setCurrentPosts(mainPosts.slice(indexOfFirstPost, indexOfLastPost));
    console.log('이때바뀜');
  }, [mainPosts, indexOfFirstPost, indexOfLastPost, page]);
  console.log(mainPosts);
  console.log(currentPosts, indexOfFirstPost, page);
  useEffect(() => {
    console.log('이게힌트');
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);
  return (
    <>
      <Container>
        {/* 상단 네비바 수정 부분 */}
        <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <Navbar bg="success" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <h4>홈</h4>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown as="h5" title="알림마당" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown as="h5" title="공지사항" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        {/* 사이드바 받은 파일 */}
        {/* // 2번 그리드 여기 아래의 코드가 바로 사이드바 코드 */}
        <Row className="mt-3 ps-1">
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white" style={{ height: '150px' }}>
              <Card.Body className="bp-0">
                <Card.Title className="my-3 mx-5 h-1">
                  <h2>알림</h2>
                </Card.Title>
                <Card.Title
                  className="my-3 mx-5 h-1 bp-0"
                  style={{ fontWeight: 'bold', height: '100px' }}
                >
                  <h2>마당</h2>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                공지사항
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                자주하는 질문
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                1:1 고객센터
              </Button>

              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
          {/* // 3번 그리드 */}
          <Col md={9}>
            <Row>
              <h2>공지사항</h2>
              <hr />
            </Row>
            <Row className="mt-2">
              <Col className="bg-light border pt-1">
                <Col className="mb-1" style={{ float: 'right' }}>
                  <Stack direction="horizontal" gap={3}>
                    <Form.Control
                      className="ms-auto"
                      placeholder="Add your item here..."
                    />
                    <Button
                      variant="success"
                      text="white"
                      style={{ width: '130px' }}
                    >
                      검색
                    </Button>
                  </Stack>
                </Col>
                <Col>
                  {/* 서치바 드롭다운 메뉴 */}

                  <Form.Select
                    className="me-2"
                    style={{ float: 'right', width: '100px' }}
                  >
                    <option>전체</option>
                    <option value="1">최신순</option>
                    <option value="2">게시글순</option>
                    <option value="3">왓에버순</option>
                  </Form.Select>
                </Col>
                <Col>
                  {/* {admin && (
                    <Link to="/board/announce/add">
                      <Button>글쓰기</Button>
                    </Link>
                  )} */}

                  {/* ==========================UI 제작시=========================== */}

                  <Link to="/board/announce/add">
                    <Button variant="success">글쓰기</Button>
                  </Link>

                  {/* ============================================================ */}
                </Col>
              </Col>
            </Row>
            <Row>
              {/* 게시물 기재 테이블 */}

              <Table striped className="mt-4">
                <thead>
                  <tr>
                    <th scope="col" width="10%">
                      번호
                    </th>
                    <th scope="col" width="40%">
                      제목
                    </th>
                    <th scope="col" width="15%">
                      작성자
                    </th>
                    <th scope="col" width="20%">
                      작성일
                    </th>
                    <th scope="col" width="10%">
                      조회수
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post, index) => (
                    <AnnounceBoardList key={post.id} post={post} page={page} />
                  ))}
                </tbody>
              </Table>
            </Row>
            <Row>
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={mainPosts.length}
                pageRangeDisplayed={5}
                prevPageText={'‹'}
                nextPageText={'›'}
                onChange={handlePageChange}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default announceBoardView;
