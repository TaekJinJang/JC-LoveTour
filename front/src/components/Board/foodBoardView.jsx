import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../UI/paging.css";
import styled from "styled-components";
import {
  ButtonGroup,
  Button,
  Card,
  Stack,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

// 공통부분
import { Container, Row, Col } from "react-bootstrap";
import Header from "../UI/header";
import TopNavBar from "../UI/topNavBar";
import SideBar from "../UI/sideBar";
import Footer from "../UI/footer";
import MobileHeaders from "../UI/mobileHeaders";

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from "react-redux";

import { LOAD_GALLERY_POSTS_REQUEST } from "../../reducers/post";

function foodBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState("음식"); // 현재 페이지 상태
  const { admin } = useSelector((state) => state.admin);
  const { gallery } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const indexOfLastPost = page * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    setCurrentPosts(gallery.slice(indexOfFirstPost, indexOfLastPost));
  }, [gallery, indexOfFirstPost, indexOfLastPost, page]);

  useEffect(() => {
    dispatch({
      type: LOAD_GALLERY_POSTS_REQUEST,
    });
  }, []);

  const buttons = [
    { label: "관광지", href: "/board/touristSpot" },
    { label: "전통시장", href: "/board/traditionalMarket" },
    { label: "음식", href: "/board/food" },
    { label: "숙박", href: "/board/accommodation" },
    { label: "축제/행사", href: "/board/festival" },
  ];

  return (
    <>
      <Container style={{ fontFamily: "Pretendard-Regular" }}>
        <MobileHeaders />
        {/* <Header /> */}
        <Container>
          {/* <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <TopNavBar />
          </Row> */}
          <Row className="mt-3 ms-0" style={{ width: "100%" }}>
            <Col md={3} className="ps-0 pe-1">
              <SideBar
                buttons={buttons}
                title={
                  <div>
                    제천의
                    <br />
                    이모저모
                  </div>
                }
              />
            </Col>
            <Col md={9} className="ps-0">
              <Row className="ms-2">
                <h3>음식</h3>
                <hr />
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    </>
  );
}

export default foodBoardView;
