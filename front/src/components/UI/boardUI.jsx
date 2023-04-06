import './boardUI.css';

function boardUI(props) {
  return (
    <>
      <header>
        <nav>
          <div>
            <a href="@">홈</a>
          </div>
          <div className="dropdown">
            <span className="dropbtn">열림마당</span>
            <div className="dropdown-content">
              <a href="#">link 1</a>
              <a href="#">link 2</a>
              <a href="#">link 3</a>
            </div>
          </div>
          <div className="dropdown">
            <span className="dropbwn">공지사항</span>
            <div className="dropdown-content">
              <a href="#">link 1</a>
              <a href="#">link 2</a>
              <a href="#">link 3</a>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="side">
          <h1>알림</h1>
          <h1>마당</h1>
        </div>
        <div>
          <h1>{props}</h1>
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
    </>
  );
}

export default boardUI;
