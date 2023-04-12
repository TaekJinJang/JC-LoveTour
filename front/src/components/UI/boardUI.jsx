// import './boardUI.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
  margin-left: 21px;
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
const Input_Tr = styled.tr`
  height: 50px;
`;
const Input_Td = styled.td`
  border-bottom: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
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

function boardUI() {
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
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
              <Input_Tr>
                <Input_Td>1</Input_Td>
                <Input_Td>게시글입니다.</Input_Td>
                <Input_Td>서세일</Input_Td>
                <Input_Td>23-04-05</Input_Td>
                <Input_Td>12423</Input_Td>
              </Input_Tr>
            </tbody>
          </Table>
        </Table_form>
      </Nomal_div>
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

export default boardUI;
