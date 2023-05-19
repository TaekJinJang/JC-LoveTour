import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewBoardList from './reviewBoardList';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { LOAD_REVIEW_POSTS_REQUEST } from '../../reducers/post';
import Pagination from 'react-js-pagination';
import '../UI/paging.css';

function reviewBoardView() {
  const { admin } = useSelector((state) => state.admin);
  const { reviewPosts } = useSelector((state) => state.post);
  // 페이지네이션
  const [page, setPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const indexOfLastPost = page * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const [searchInput, onChangeSearchInput] = useInput('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);

  const handlePageChange = (page) => {
    setPage(page);
  };
  useEffect(() => {
    setCurrentPosts(reviewPosts.slice(indexOfFirstPost, indexOfLastPost));
  }, [reviewPosts, indexOfFirstPost, indexOfLastPost, page]);
  useEffect(() => {
    dispatch({
      type: LOAD_REVIEW_POSTS_REQUEST,
    });
  }, []);

  return (
    <>
      <Link to="/board/review/add">
        <Button>예약하기</Button>
      </Link>

      <input type="text" value={searchInput} onChange={onChangeSearchInput} />
      <Button onClick={goToSearch}>검색</Button>

      {currentPosts.map((post, index) => (
        <ReviewBoardList key={post.id} post={post} />
      ))}

      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={reviewPosts.length}
        pageRangeDisplayed={5}
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={handlePageChange}
      />
    </>
  );
}
export default reviewBoardView;
