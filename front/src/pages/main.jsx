import React from 'react';
import { Link } from 'react-router-dom';

function main() {
  return (
    <>
      <div>
        <Link to="/board">
          <button>게시판</button>
        </Link>
        <Link to="/admin">
          <button>관리자</button>
        </Link>
      </div>
    </>
  );
}
export default main;
