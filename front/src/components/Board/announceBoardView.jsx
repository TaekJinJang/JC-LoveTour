import React, { useCallback } from 'react';
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

import '../UI/boardUI.css';

const Navbar_all = styled(Navbar)`
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

function announceBoardView() {
  const { admin } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);

  return (
    <>
      <Navbar_all bg="green" expand="lg">
        <ContainerA>
          <Navbar.Brand href="#home">제천 러브투어</Navbar.Brand>
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
      <div id="container">
        <div className="side">
          <h1>알림</h1>
          <h1>마당</h1>
        </div>
        <div>
          <h1>공지사항</h1>
          <br></br>
          <hr></hr>
          <div className="search_bar ">
            {admin && (
              <Link to="/board/announce/add">
                <Button>글쓰기</Button>
              </Link>
            )}
            <button className="search_button">검색</button>
            <input id="search" type="text" placeholder="검색어 입력"></input>
            {/* 기존 검색창 */}
            <input
              type="text"
              value={searchInput}
              onChange={onChangeSearchInput}
            />
            <Button onClick={goToSearch}>검색</Button>

            <select name="sch_key" id="sch_key" className="select_item">
              <option value="sch_title">글제목</option>
              <option value="sch_crt_dt">등록일자</option>
              <option value="sch_writer">작성자</option>
            </select>
          </div>
        </div>
        <ul id="lm_list">
          <li>
            <a href="@" className="lm_select">
              공지사항
            </a>
          </li>
          <li>
            <a href="@" className="lm">
              자주하는 질문
            </a>
          </li>
          <li>
            <a href="@" className="lm">
              1:1 고객센터
            </a>
          </li>
        </ul>
        <div className="table_form">
          <table>
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
            {mainPosts.map((post, index) => (
              <AnnounceBoardList key={post.id} post={post} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
export default announceBoardView;
