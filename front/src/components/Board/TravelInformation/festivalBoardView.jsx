import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../../UI/paging.css";

// 상단 그림
import background2 from "../../../assets/background2.png";
// 공통부분
import { Container, Row, Col, Figure } from "react-bootstrap";
import PageNav from "../../UI/pageNav";
import SideBar from "../../UI/sideBar";
import Footer from "../../UI/footer";
import Header from "../../UI/header";

// 모바일 관련 코드
import { BrowserView, MobileView } from "react-device-detect";

// import GalleryBoardList from './galleryBoardList';
import { useDispatch, useSelector } from "react-redux";

import { LOAD_GALLERY_POSTS_REQUEST } from "../../../reducers/post";

function festivalBoardView() {
  // 페이지 버튼 눌린 상태로 만드려고 생성
  const [currentPage, setCurrentPage] = useState("축제/행사"); // 현재 페이지 상태
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

  // 행사 부분 클릭
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  const buttons = [
    { label: "테마/코스", href: "/board/oksunbongPeakCourse" },
    { label: "관광지", href: "/board/touristSpot" },
    { label: "전통시장", href: "/board/traditionalMarket" },
    { label: "축제/행사", href: "/board/festival" },
  ];

  return (
    <>
      <Header />
      {/* 상단이미지 */}
      <Container
        fluid
        style={{ height: "40vh", width: "100vw", overflowX: "hidden" }}
        className="container-fluid m-0 p-0"
      >
        <div
          style={{
            backgroundImage: `url(${background2})`,
            height: "37vh",
            width: "100vw",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center", // 가로 방향 가운데 정렬
            alignItems: "center", // 세로 방향 가운데 정렬
          }}
        >
          <h1 style={{ color: "white" }}>이모저모</h1>
        </div>
      </Container>
      <Container fluid="sm" className="mt-5">
        <Row>
          {/* 사이드바 */}
          <Col xs={12} lg={3} sm={3} className="px-0">
            <SideBar buttons={buttons} title={<div>여행정보</div>} />
          </Col>
          {/* 제목 */}
          <Col xs={12} lg={9} sm={9}>
            <Col xs={12} lg={12} sm={12}>
              <h3>축제/행사</h3>
              <hr />
            </Col>
            <Col xs={12} lg={12} sm={12} className="px-2">
              <table
                bordered
                className="table table-hover"
                style={{ border: "1px solid #f2f2f2" }}
              >
                <thead
                  style={{
                    textAlign: "center",
                    backgroundColor: "#E0E0E0",
                  }}
                >
                  <tr>
                    <th scope="col" width="20%">
                      일자
                    </th>
                    <th scope="col" width="30%">
                      장소
                    </th>
                    <th scope="col" width="50%">
                      제목
                    </th>
                  </tr>
                </thead>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=491"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-16
                    </td>
                    <td scope="col" width="30%">
                      제천재가노인센터
                    </td>
                    <td scope="col" width="50%">
                      2023 육성지원사업(겨자씨친구들)
                    </td>
                  </tr>
                </tbody>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=501"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-16
                    </td>
                    <td scope="col" width="30%">
                      제천문화재단 3층 상영관
                    </td>
                    <td scope="col" width="50%">
                      제천영상미디어센터 정기상영 '길버트 그레이프'
                    </td>
                  </tr>
                </tbody>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=502"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-17
                    </td>
                    <td scope="col" width="30%">
                      제천문화재단 3층 상영관
                    </td>
                    <td scope="col" width="50%">
                      제천영상미디어센터 정기상영 '라따뚜이'
                    </td>
                  </tr>
                </tbody>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=492"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-18
                    </td>
                    <td scope="col" width="30%">
                      청전동 야외공연장
                    </td>
                    <td scope="col" width="50%">
                      2023 육성지원사업(제천문화홍보단)
                    </td>
                  </tr>
                </tbody>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=505"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-20
                    </td>
                    <td scope="col" width="30%">
                      세종주간보호센터
                    </td>
                    <td scope="col" width="50%">
                      2023 육성지원사업(한국연예예술단)
                    </td>
                  </tr>
                </tbody>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=493"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-21
                    </td>
                    <td scope="col" width="30%">
                      제천문화재단 3층 상영관
                    </td>
                    <td scope="col" width="50%">
                      제천영상미디어센터 정기상영 '태극기 휘날리며'
                    </td>
                  </tr>
                </tbody>
                <tbody
                  onClick={() =>
                    handleLinkClick(
                      "http://www.jccf.or.kr/bbs/board.php?bo_table=product&wr_id=508"
                    )
                  }
                >
                  <tr>
                    <td scope="col" width="20%">
                      2023-06-24
                    </td>
                    <td scope="col" width="30%">
                      청전동 야외공연장
                    </td>
                    <td scope="col" width="50%">
                      2023 육성지원사업(제천연주인협회)
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Col>
        </Row>
      </Container>
      {/* 푸터 */}
      <Container
        fluid
        style={{ width: "98vw", overflowX: "hidden" }}
        className="container-fluid mx-0 p-0"
      >
        <Footer />
      </Container>
    </>
  );
}

export default festivalBoardView;
