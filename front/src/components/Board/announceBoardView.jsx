import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import AnnounceBoardList from './announceBoardList';
import { useSelector } from 'react-redux';
import AnnounceBoardWrite from './announceBoardWrite';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function announceBoardView() {
  const { admin } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  const [searchInput, onChangeSearchInput] = useInput('');
  const navigate = useNavigate();
  const goToSearch = useCallback(() => {
    navigate(`/board/announce/search/${searchInput}/`, { state: searchInput });
  }, [searchInput]);

  return (
    <>
      {admin && (
        <Link to="/board/announce/add">
          <Button>글쓰기</Button>
        </Link>
      )}
      <input type="text" value={searchInput} onChange={onChangeSearchInput} />
      <Button onClick={goToSearch}>검색</Button>

      {mainPosts.map((post, index) => (
        <AnnounceBoardList key={post.id} post={post} />
      ))}
    </>
  );
}
export default announceBoardView;
