import './boardUI.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
function boardUI() {
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
          <div className="search_bar">
            <button className="search_button">검색</button>
            <input id="search" type="text" placeholder="검색어 입력"></input>
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
            <tbody>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
              <tr>
                <td>1</td>
                <td>게시글입니다.</td>
                <td>서세일</td>
                <td>23-04-05</td>
                <td>12423</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="footer">
        <div>
          <div className="footer_container">
            <div className="footer_navi">
              <ul className="no_dot">
                <li id="footer_navi_item">
                  <a href="/etc/private.html">개인정보처리방침 </a>
                </li>
                <li id="footer_navi_item">
                  <a href="/etc/copyright.html">저작권보호정책 </a>
                </li>
                <li id="footer_navi_item">
                  <a href="/etc/agreement.html">이용약관</a>
                </li>
              </ul>
            </div>
            <div className="footer_info">
              <br></br>
              <p>&#40;12345&#41; 충청북도 제천시 세명로</p>
              <p>COPYRIGHT jecheon-do.All Right resreved.</p>
            </div>
            <div className="full_logo">
              <div className="in_logo">
                <span className="f_logo">
                  <b>러브투어</b>
                </span>
                <span className="L_logo">
                  <b>JECHEON</b>
                </span>
                <select id="footer_select">
                  <option value="null">유관기관1</option>
                  <option value="null">유관기관2</option>
                  <option value="null">유관기관3</option>
                  <option value="null">유관기관4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default boardUI;
