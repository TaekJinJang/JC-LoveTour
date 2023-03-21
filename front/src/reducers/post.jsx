export const initialState = {
  mainPosts: [
    {
      id: 1,
      admin: {
        id: 1,
        nickname: '관리자 ',
      },
      title: '첫번째 제목입니다.',
      content: '첫 번째 게시글',
      views: 0,
      date: 0,
      Images: [
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};
// 지워야함
const TodayTime = () => {
  let date = new Date(); // 현재 날짜 및 시간
  let Year = date.getFullYear(); // 월
  let Month = date.getMonth() + 1; // 월
  let Day = date.getDate(); // 일

  return Year + '-' + Month + '-' + Day;
};

const dummyPost = {
  id: 2,
  title: '첫번째 제목입니다.',
  content: '더미데이터입니다.',
  admin: {
    id: 1,
    nickname: '관리자',
  },
  date: TodayTime(),
  Images: [],
  views: 1,
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
