import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnounceBoardList from './announceBoardList';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import '../../../src/index.css'; //폰트설정을 위한 css 임포트
import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import '../UI/boardUI.css';

// 상단 그림
import background2 from '../../assets/background2.png';

// 공통부분
import {
  Container,
  Row,
  Col,
  Figure,
  Form,
  Stack,
  Button,
  Table,
} from 'react-bootstrap';
import PageNav from '../UI/pageNav';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

import { LOAD_POSTS_REQUEST } from '../../reducers/post';

function announceBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState('공지사항'); // 현재 페이지 상태
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
  }, [mainPosts, indexOfFirstPost, indexOfLastPost, page]);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
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
      {/* 네비바 수정 */}
      <Container
        fluid
        style={{ height: '80px', width: '98vw' }}
        className="container-fluid mx-0 px-0 "
      >
        <PageNav />
      </Container>
      {/* 상단이미지 */}
      <Container
        fluid
        style={{ height: '40vh', width: '98vw', overflowX: 'hidden' }}
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
      <Container
        fluid
        style={{ width: '98vw', overflowX: 'hidden' }}
        className="container-fluid m-0 p-0"
      >
        <Row>
          {/* 사이드바 */}
          <Col xs={12} lg={3} sm={3} className="px-0">
            <SideBar buttons={buttons} title={'알림마당'} />
          </Col>
          {/* 제목 */}
          <Col xs={12} lg={9} sm={9}>
            <Col xs={12} lg={12} sm={12}>
              <h3>공지사항</h3>
              <hr />
            </Col>

            <Col xs={12} lg={12} sm={12} className="px-3">
              <Row>
                <Col className="bg-light border pt-1">
                  <Col className="mb-1" style={{ float: 'right' }}>
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control className="ms-auto" placeholder="" />
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

                    <Form.Select style={{ float: 'right', width: '100px' }}>
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
                <Table
                  bordered
                  className="mt-4 table table-hover"
                  style={{ border: '1px solid #f2f2f2' }}
                >
                  <thead
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#E0E0E0',
                    }}
                  >
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
                  <tbody
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {currentPosts.map((post, index) => (
                      <AnnounceBoardList
                        key={post.id}
                        post={post}
                        page={page}
                      />
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
          </Col>
        </Row>
      </Container>
      {/* 푸터 */}
      <Container
        fluid
        style={{ width: '98vw', overflowX: 'hidden' }}
        className="container-fluid mx-0 p-0"
      >
        <Footer />
      </Container>
    </>
  );
}
export default announceBoardView;
