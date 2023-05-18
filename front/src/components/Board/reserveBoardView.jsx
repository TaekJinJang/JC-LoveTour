import React, { useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveBoardList from './reserveBoardList';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { LOAD_RESERVE_POSTS_REQUEST } from '../../reducers/post';

function reserveBoardView() {
  const { admin } = useSelector((state) => state.admin);
  const { reservePosts } = useSelector((state) => state.post);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_RESERVE_POSTS_REQUEST,
    });
  }, []);
  console.log(reservePosts);
  return (
    <>
      <Link to="/board/reserve/add">
        <Button>예약하기</Button>
      </Link>

      <input type="text" value={searchInput} onChange={onChangeSearchInput} />
      <Button onClick={goToSearch}>검색</Button>

      {reservePosts.map((post, index) => (
        <ReserveBoardList key={post.id} post={post} />
      ))}
    </>
  );
}
export default reserveBoardView;
