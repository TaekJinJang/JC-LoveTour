import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import ReserveBoardList from './reserveBoardList';
import { useSelector } from 'react-redux';
import AnnounceBoardWrite from './announceBoardWrite';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { Alert } from 'bootstrap';

function reserveBoardView() {
  const { admin } = useSelector((state) => state.user);
  const { reservePosts } = useSelector((state) => state.post);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    if (searchInput === '') return alert('검색어를 입력해주세요');
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);
  console.log(reservePosts);

  return (
    <>
      {admin && (
        <Link to="/board/reserve/add">
          <Button>예약하기</Button>
        </Link>
      )}
      <input type="text" value={searchInput} onChange={onChangeSearchInput} />
      <Button onClick={goToSearch}>검색</Button>

      {reservePosts.map((post, index) => (
        <ReserveBoardList key={post.id} post={post} />
      ))}
    </>
  );
}
export default reserveBoardView;
