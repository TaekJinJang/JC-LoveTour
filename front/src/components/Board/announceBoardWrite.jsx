import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../../reducers/post';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

// 글쓰기 구현 스타일
const Container = styled.div`
  max-width: 55%;
  margin-left: 300px;
`;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

const InputBox = styled.div`
  display: flex;
  /* align-items: center; */
  margin-bottom: 16px;
`;

const Box = styled.div`
  width: 140px;
  height: 45px;
  background: #4c7b31;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 70%;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  background: #d9d9d9;
  margin-left: 21px;
`;

const Textarea = styled.textarea`
  height: 350px;
  width: 70%;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 16px;
  background: #d9d9d9;
  margin-left: 21px;
`;

// const Button = styled.button`
//   background-color: #4c7b31;
//   color: #fff;
//   border: none;
//   border-radius: 30px;
//   padding: 8px 16px;
//   font-size: 20px;
//   cursor: pointer;
//   width: 157px;
//   height: 41px;
//   margin-left: 71%;
// `;

// 글쓰기 구현 스타일 끝

///여기서부터 시작
const Nomal_div = styled.div`
  display: block;
  margin-top: 15px;
`;
const Side_title = styled.div`
  display: block;
  margin-right: 10px;
  background-color: #4b7d32;
  float: left;
  min-width: 170px;
  height: 150px;
  margin-left: 5px;
  display: table-cell;
  text-align: center;
`;
const Side_title_text = styled.h1`
  color: aliceblue;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 2rem;
`;
const Board = styled.div`
  padding: 10px;
  color: #4c7b31;
  margin-left: 300px;
`;
const Lm_list = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  position: relative;
  width: 198px;
  padding: 0;
  margin: 0;
  padding-top: 15px;
`;
const Lm_list_item = styled.li`
  list-style: none;
`;
const Lm_list_item_link = styled.a`
  float: left;
  width: 170px;
  min-height: 16px;
  padding: 17px 3px 17px 10px;

  margin: 0;
  margin-left: 5px;
  margin-bottom: 10px;
  color: #444;
  font-family: 'NanumGothicWebBold';
  line-height: 20px;
  border: 1px solid #f3f3f3;
  word-spacing: -1px;

  padding-left: 25px;
  text-decoration-line: none;

  font-weight: bold;
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  margin-top: 80%;
  background-color: white;
  padding: 10px;
`;
const Footer_container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 120px 0 0;
  padding: 0;
`;
const Footer_navi = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  vertical-align: top;
  border-bottom: 1px solid #909090;
`;
const Footer_navi_ul = styled.ul`
  float: left;
  margin: 0;
  height: 50px;
  vertical-align: top;
  text-align: center;
  list-style-type: none;
`;
const Footer_navi_li = styled.li`
  float: left;
  margin: 0;
  padding: 15px 20px 0 20px;
  height: 50px;
  vertical-align: top;
  text-align: center;
  padding-bottom: 20px;
`;
const Footer_navi_li_link = styled.a`
  color: gray;

  text-decoration-line: none;
  font-family: 'NanumGothicWebBold';
  font-size: 13px;
`;
const Footer_info = styled.div`
  position: relative;
  width: 100%;
  margin-left: 30px;
  text-align: left;
  height: 100px;
`;
const Footer_info_p = styled.p`
  font-size: 13px;
  color: grey;
  line-height: 20px;
`;
const Full_logo = styled.div`
  background-color: #2da57d;
  color: white;
  font-family: 'Malgun Gothic';
  width: 100%;
`;
const In_logo = styled.div`
  margin-left: 30px;
  width: 100%;
`;
const In_logo_span1 = styled.span`
  font-size: 200%;
`;
const In_logo_span2 = styled.span`
  font-size: 150%;
`;
const Footer_select = styled.select`
  float: right;
  margin-right: 10%;
  margin-top: 10px;
  background-color: #507d32;
  height: 30px;
  color: white;
  font-size: 13px;
  padding: 0 10px;
`;

//-------
const NavWrapper = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #main_logo {
    display: inline-block;
    margin-left: 5%;
    margin-right: 10px;
    font-size: 25px;
    padding-left: 0px;
    border-left: none;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    position: relative;
    border-left: solid 1px white;
    padding-left: 20px;
    height: 50px;
    padding-top: 10px;
    bottom: 11px;
  }
  .sub_a {
    display: inline-block;
    text-decoration: none;
    color: black;
    vertical-align: middle;
    right: 20px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    vertical-align: middle;
  }
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    padding-top: 20px;
    margin: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  .nav_var {
    background-color: green;
    height: 50px;
  }
`;

function announceBoardWrite() {
  const { imagePaths } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');
  const imageInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 기본적인 버그들, 게시글을 작성하기로해놓ㄱ 다 빈칸으로 두거나 알맞은 형식이 아닐땐 요청을 받지 않게끔
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append('image', p);
      });
      formData.append('content', text);

      navigate('/board/announce');
      return dispatch({
        type: ADD_POST_REQUEST,
        data: { title: title, content: text },
      });
    },
    [title, text, imagePaths]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
    console.log(imageFormData);
  }, []);

  return (
    <>
      <h1>게시판 글쓰기</h1>
      <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
        <input
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <Button onClick={onClickImageUpload} variant="info">
          이미지 업로드
        </Button>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="제목을 입력해주세요. "
            value={title}
            onChange={onChangeTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="text">
          <Form.Label>내용</Form.Label>
          <Form.Control
            name="text"
            type="text"
            placeholder="내용을 입력해주세요. "
            value={text}
            onChange={onChangeText}
          />
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            글쓰기
          </Button>
        </div>
      </Form>
    </>
  );
}
export default announceBoardWrite;
