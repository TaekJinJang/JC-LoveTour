import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnounceBoardList from './announceBoardList';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import '../UI/boardUI.css';

const Main_title = styled.a`
  font-size: 130%;
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: white;
`;
const Navbar_all = styled(Navbar)`
  height: 60px;
  background-color: green;
  padding: 0%;
`;
const ContainerA = styled(Container)`
  margin: 15px;
  border: none;
  margin-left: 10%;
`;
const Brand = styled(Navbar.Brand)`
  margin-left: 0px;
`;
const NavDropdownA = styled(NavDropdown)`
  color: aliceblue;
  border-left: 1px solid white;
`;
const Nomal_div = styled.div`
  display: block;
  margin-top: 15px;
`;
const Side_title = styled.div`
  display: block;
  margin-right: 10px;
  background-color: #4b7d32;
  float: left;

  padding-left: 30px;
  width: 200px;
  height: 150px;

  display: table-cell;
`;
const Side_title_text = styled.h1`
  color: aliceblue;
  margin: 0 auto;
  margin-top: 20px;
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
  width: 200px;
  min-height: 16px;
  padding: 17px 3px 17px 10px;

  margin: 0;
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
  margin-left: 210px;
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
  margin-left: 215px;
  height: 55px;
  background-color: #f8f8f8;
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

function announceBoardView() {
  const { admin } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <Navbar_all bg="green" expand="lg">
        <ContainerA>
          <Main_title href="#home">제천 러브투어</Main_title>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdownA
                title="열림마당"
                id="basic-nav-dropdown"
                expand="lg"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another actiond
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdownA>
              <NavDropdownA
                title="공지사항"
                id="basic-nav-dropdown"
                expand="lg"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another actiond
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdownA>
            </Nav>
          </Navbar.Collapse>
        </ContainerA>
      </Navbar_all>
      <Nomal_div>
        <Side_title>
          <Side_title_text>알림</Side_title_text>
          <Side_title_text>마당</Side_title_text>
        </Side_title>
        <Board>
          <h1>공지사항</h1>
          <hr></hr>

          {admin && (
            <Link to="/board/announce/add">
              <Button>글쓰기</Button>
            </Link>
          )}

          <input
            type="text"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <Button onClick={goToSearch}>검색</Button>
          <Search_bar>
            <Search_button>검색</Search_button>

            <Search_input type="text" placeholder="검색어 입력"></Search_input>
            <Sel_key name="sch_key">
              <option value="@">글제목</option>
              <option value="@">등록일자</option>
              <option value="@">작성자</option>
            </Sel_key>
          </Search_bar>
        </Board>
        <Lm_list>
          <Lm_list_item>
            <Lm_list_item_link href="@">공지사항</Lm_list_item_link>
          </Lm_list_item>
          <Lm_list_item>
            <Lm_list_item_link href="@">자주하는 질문</Lm_list_item_link>
          </Lm_list_item>
          <Lm_list_item>
            <Lm_list_item_link href="@">1:1 고객센터</Lm_list_item_link>
          </Lm_list_item>
        </Lm_list>
        <Table_form>
          <Table>
            <thead>
              <tr>
                <Th scope="col" width="10%">
                  번호
                </Th>
                <Th scope="col" width="40%">
                  제목
                </Th>
                <Th scope="col" width="15%">
                  작성자
                </Th>
                <Th scope="col" width="20%">
                  작성일
                </Th>
                <Th scope="col" width="10%">
                  조회수
                </Th>
              </tr>
            </thead>
            <tbody>
              {mainPosts.map((post, index) => (
                <AnnounceBoardList key={post.id} post={post} />
              ))}
            </tbody>
          </Table>

          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={handlePageChange}
          />
        </Table_form>
      </Nomal_div>
    </>
  );
}
export default announceBoardView;
