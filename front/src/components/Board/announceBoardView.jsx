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
// 테이블 라이브러리 추가
import { LOAD_POSTS_REQUEST } from '../../reducers/post';

const Nomal_div = styled.div`
  display: block;
  margin-top: 15px;
`;
const Side_title = styled.div`
  display: block;
  margin-right: 10px;
  background-color: #4b7d32;
  float: left;
  min-width: 170px;
  height: 150px;
  margin-left: 5px;
  display: table-cell;
  text-align: center;
`;
const Side_title_text = styled.h1`
  color: aliceblue;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 2rem;
`;
const Board = styled.div`
  padding: 10px;
`;
const Lm_list = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  position: relative;
  width: 198px;
  padding: 0;
  margin: 0;
  padding-top: 15px;
`;
const Lm_list_item = styled.li`
  list-style: none;
`;
const Lm_list_item_link = styled.a`
  float: left;
  width: 170px;
  min-height: 16px;
  padding: 17px 3px 17px 10px;

  margin: 0;
  margin-left: 5px;
  margin-bottom: 10px;
  color: #444;
  font-family: 'NanumGothicWebBold';
  line-height: 20px;
  border: 1px solid #f3f3f3;
  word-spacing: -1px;

  padding-left: 25px;
  text-decoration-line: none;

  font-weight: bold;
`;
const Search_bar = styled.div`
  margin-top: 30px;
  margin-right: 10px;
  margin-left: 17%;
  margin-left: 175px;
  background-color: #e2e2e2;
  height: 50px;
`;
const Search_button = styled.button`
  float: right;
  margin-right: 15px;
  margin-top: 10px;
  height: 30px;
  width: 50px;

  background: #4b7d32;
  border: 0;
  outline: none;
  font-size: 10px;
  color: white;
`;
const Search_input = styled.input`
  float: right;
  margin-right: 15px;
  margin-top: 10px;
  width: 150px;
  height: 25px;
`;
const Sel_key = styled.select`
  float: right;
  min-height: 18px;
  margin-top: 10px;
  margin-right: 10px;
  height: 30px;
  padding: 5px 5px;
`;
const Table_form = styled.div`
  margin-left: 185px;
  height: 55px;
  margin-right: 20px;
  margin-top: 10px;
  text-align: center;
`;
const Table = styled.table`
  width: 100%;
  table-layout: auto;
  table-layout: fixed;
  border-collapse: collapse;
`;
const Th = styled.th`
  height: 50px;
  border: 1px solid #f0f0f0;
  border-top: none;
  border-left: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-top: 80%;
  background-color: white;
  padding: 10px;
`;
const Footer_container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 120px 0 0;
  padding: 0;
`;
const Footer_navi = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  vertical-align: top;
  border-bottom: 1px solid #909090;
`;
const Footer_navi_ul = styled.ul`
  float: left;
  margin: 0;
  height: 50px;
  vertical-align: top;
  text-align: center;
  list-style-type: none;
`;
const Footer_navi_li = styled.li`
  float: left;
  margin: 0;
  padding: 15px 20px 0 20px;
  height: 50px;
  vertical-align: top;
  text-align: center;
  padding-bottom: 20px;
`;
const Footer_navi_li_link = styled.a`
  color: gray;

  text-decoration-line: none;
  font-family: 'NanumGothicWebBold';
  font-size: 13px;
`;
const Footer_info = styled.div`
  position: relative;
  width: 100%;
  margin-left: 30px;
  text-align: left;
  height: 100px;
`;
const Footer_info_p = styled.p`
  font-size: 13px;
  color: grey;
  line-height: 20px;
`;
const Full_logo = styled.div`
  background-color: #2da57d;
  color: white;
  font-family: 'Malgun Gothic';
  width: 100%;
`;
const In_logo = styled.div`
  margin-left: 30px;
  width: 100%;
`;
const In_logo_span1 = styled.span`
  font-size: 200%;
`;
const In_logo_span2 = styled.span`
  font-size: 150%;
`;
const Footer_select = styled.select`
  float: right;
  margin-right: 10%;
  margin-top: 10px;
  background-color: #507d32;
  height: 30px;
  color: white;
  font-size: 13px;
  padding: 0 10px;
`;
const Tr = styled.tr`
  background-color: #f8f8f8;
`;

//-------
const NavWrapper = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #main_logo {
    display: inline-block;
    margin-left: 5%;
    margin-right: 10px;
    font-size: 25px;
    padding-left: 0px;
    border-left: none;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    position: relative;
    border-left: solid 1px white;
    padding-left: 20px;
    height: 50px;
    padding-top: 10px;
    bottom: 11px;
  }
  .sub_a {
    display: inline-block;
    text-decoration: none;
    color: black;
    vertical-align: middle;
    right: 20px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    vertical-align: middle;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    padding-top: 20px;
    margin: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  .nav_var {
    background-color: green;
    height: 50px;
  }
`;

function announceBoardView() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POSTS_REQUEST,
  //   });
  // }, []);
  const { admin } = useSelector((state) => state.admin);
  const { mainPosts } = useSelector((state) => state.post);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);

  // 페이지네이션
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  return (
    <>
      <Container>
        <Row className="w-100% p-0">
          {/* 상단 네비바 수정 부분 */}
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
                  {admin && (
                    <Link to="/board/announce/add">
                      <Button>글쓰기</Button>
                    </Link>
                  )}
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
                  {mainPosts.map((post, index) => (
                    <AnnounceBoardList key={post.id} post={post} page={page} />
                  ))}
                </tbody>
              </Table>
            </Row>
            <Row>
              <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                prevPageText={'‹'}
                nextPageText={'›'}
                onChange={handlePageChange}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer>
        <div>
          <Footer_container>
            <Footer_navi>
              <Footer_navi_ul>
                <Footer_navi_li>
                  <Footer_navi_li_link href="/etc/private.html">
                    개인정보처리방침{' '}
                  </Footer_navi_li_link>
                </Footer_navi_li>
                <Footer_navi_li>
                  <Footer_navi_li_link href="/etc/copyright.html">
                    저작권보호정책{' '}
                  </Footer_navi_li_link>
                </Footer_navi_li>
                <Footer_navi_li>
                  <Footer_navi_li_link href="/etc/agreement.html">
                    이용약관
                  </Footer_navi_li_link>
                </Footer_navi_li>
              </Footer_navi_ul>
            </Footer_navi>
            <Footer_info>
              <br></br>
              <Footer_info_p>
                &#40;12345&#41; 충청북도 제천시 세명로
              </Footer_info_p>
              <Footer_info_p>
                COPYRIGHT jecheon-do.All Right resreved.
              </Footer_info_p>
            </Footer_info>
            <Full_logo>
              <In_logo>
                <In_logo_span1>
                  <b>러브투어</b>
                </In_logo_span1>
                <In_logo_span2>
                  <b>JECHEON</b>
                </In_logo_span2>
                <Footer_select>
                  <option value="null">유관기관1</option>
                  <option value="null">유관기관2</option>
                  <option value="null">유관기관3</option>
                  <option value="null">유관기관4</option>
                </Footer_select>
              </In_logo>
            </Full_logo>
          </Footer_container>
        </div>
      </Footer>
    </>
  );
}
export default announceBoardView;
