import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { REMOVE_POST_REQUEST } from '../../reducers/post';
import {
  ButtonGroup,
  Card,
  Nav,
  Navbar,
  Table,
  NavDropdown,
  Button,
} from 'react-bootstrap';

import Pagination from 'react-js-pagination';
import '../UI/paging.css';
import '../UI/boardUI.css';
import { backUrl } from '../../../config/config';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

function announceBoardDetail() {
  const { admin } = useSelector((state) => state.admin);
  // const { mainPosts, REMOVE_POST_REQUEST } = useSelector((state) => state.post);
  const location = useLocation();
  const { post } = location?.state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(post);

  const deleteBoard = useCallback(() => {
    navigate('/board/announce');
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const updateBoard = useCallback(() => {
    navigate(`/board/announce/${post.id}/update`, { state: { post } });
  }, []);

  // 사이드바 내용
  const buttons = [
    { label: '공지사항', href: '/board/announce' },
    { label: '자주하는 질문', href: '/board/faq' },
    { label: '투어 후기', href: '/board/review' },
  ];

  return (
    <>
      <Container>
        <Header />
        <Container>
          <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <TopNavBar />
          </Row>
          <Row className="mt-3 ps-1" style={{ width: '100%' }}>
            <Col md={3}>
              <SideBar buttons={buttons} title={'상세보기'} />
            </Col>
            <Col md={9}>
              <Row>
                <h3>상세보기</h3>
                <hr />
                <div className="w-100% p-0">
                  {/* 제목은 나중에 수정 */}
                  <h2>{post.title}</h2>
                  <div style={{ float: 'right' }}>
                    <span>작성일: </span>
                    <span>{post.date} </span>
                    <span>작성자: </span>
                    <span>관리자 </span>
                    <span>조회수: </span>
                    <span>{post.views}</span>
                  </div>
                </div>

                {post.Images.length > 0 &&
                  post.Images.map((image, index) => (
                    <img
                      key={index}
                      src={`${image.src}`}
                      alt={`${image.src}`}
                      // 사진 크기는 수정 해야함
                      style={{ width: '300px', height: '200px' }}
                    />
                  ))}

                <div className="w-100% p-0">{post.content}</div>
                {/* {admin && ( */}
                <>
                  <Button variant="danger" onClick={deleteBoard}>
                    삭제
                  </Button>
                  <Button variant="info" onClick={updateBoard}>
                    수정
                  </Button>
                </>
                {/* )} */}
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}
export default announceBoardDetail;
