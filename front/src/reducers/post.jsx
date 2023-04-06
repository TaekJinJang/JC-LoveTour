import produce from 'immer';
import shortId from 'shortid';
import faker from 'faker';

export const initialState = {
  searchPosts: [],
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
  gallery: [
    {
      id: 1,
      admin: {
        id: 1,
        nickname: '관리자',
      },
      title: '첫 예시',
      Images: [
        {
          id: shortId.generate(),
          src: 'https://via.placeholder.com/300.png/o0f/fff',
          captionTitle: '첫이미지 제목',
          captionContent: '첫이미지 내용',
        },
        {
          id: shortId.generate(),
          src: 'https://via.placeholder.com/300.png/o0f/fff',
          captionTitle: '2이미지 제목',
          captionContent: '2이미지 내용',
        },
      ],
    },
  ],
  reservePosts: [
    {
      id: 1,
      user: {
        name: '장택진',
        password: 123,
      },
      reserveDate: '예약날짜 나옴',
      content: '첫 번째 예약 내용',
      phoneNumber: '010-0000-0000',
      date: '2023 - 04 - 05',
    },
  ],
  addPostLoading: false, // 게시글 등록 시도중
  addPostDone: false,
  addPostError: null,
  searchPostsLoading: false, // 게시글 검색 시도중
  searchPostsDone: false,
  searchPostsError: null,
  removePostLoading: false, // 게시글 삭제 시도중
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false, // 게시글 수정 시도중
  updatePostDone: false,
  updatePostError: null,
  uploadImagesLoading: false, // 이미지 업로드 시도중
  uploadImagesDone: false,
  uploadImagesError: null,
  loadPostsLoading: false, // 게시글 불러오기 시도중
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false, // 게시글 1개 불러오기 시도중
  loadPostDone: false,
  loadPostError: null,
  incrementViewsLoading: false, // 조회수 + 1 시도중
  incrementViewsDone: false,
  incrementViewsError: null,
  imagePaths: [],
};

const TodayTime = () => {
  let date = new Date(); // 현재 날짜 및 시간
  let Year = date.getFullYear(); // 월
  let Month = date.getMonth() + 1; // 월
  let Day = date.getDate(); // 일

  return Year + '-' + Month + '-' + Day;
};

// 더미데이터 faker 라이브러리 사용
export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      admin: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      title: faker.name.prefix(),
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
      views: 0,
      date: TodayTime(),
    }));
export const generateDummyReserve = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      user: {
        name: shortId.generate(),
        password: 123,
      },
      phoneNumber: '010-0000-0000',
      reserveDate: TodayTime(),
      content: faker.lorem.paragraph(),

      date: TodayTime(),
    }));
initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(30));
initialState.reservePosts = initialState.reservePosts.concat(
  generateDummyReserve(10)
);
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const ADD_RESERVE_REQUEST = 'ADD_RESERVE_REQUEST';
export const ADD_RESERVE_SUCCESS = 'ADD_RESERVE_SUCCESS';
export const ADD_RESERVE_FAILURE = 'ADD_RESERVE_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const REMOVE_RESERVE_REQUEST = 'REMOVE_RESERVE_REQUEST';
export const REMOVE_RESERVE_SUCCESS = 'REMOVE_RESERVE_SUCCESS';
export const REMOVE_RESERVE_FAILURE = 'REMOVE_RESERVE_FAILURE';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const UPDATE_RESERVE_REQUEST = 'UPDATE_RESERVE_REQUEST';
export const UPDATE_RESERVE_SUCCESS = 'UPDATE_RESERVE_SUCCESS';
export const UPDATE_RESERVE_FAILURE = 'UPDATE_RESERVE_FAILURE';
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
export const LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
export const LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
export const LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const INCREMENT_VIEWS_REQUEST = 'INCREMENT_VIEWS_REQUEST';
export const INCREMENT_VIEWS_SUCCESS = 'INCREMENT_VIEWS_SUCCESS';
export const INCREMENT_VIEWS_FAILURE = 'INCREMENT_VIEWS_FAILURE';

const dummyPost = (data) => ({
  id: shortId.generate(),
  title: data.title,
  content: data.content,
  admin: {
    id: 1,
    nickname: '관리자',
  },
  date: TodayTime(),
  Images: [],
  views: 1,
});
const dummyReserve = (data) => ({
  id: shortId.generate(),
  user: {
    name: data.name,
    password: data.password,
  },
  reserveDate: data.reserveDate,
  content: data.content,
  phoneNumber: data.phoneNumber,

  date: TodayTime(),
});

// 정규표현식을 이용해 게시글 검색
function createSearchRegex(keyword) {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${escapedKeyword}\\b`, 'i');
}

// 리듀서는 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 ( 단! 불변성을 지키면서 !!)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // ADD_POST, ADD_RESERVE
      case ADD_RESERVE_REQUEST:
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;
      case ADD_RESERVE_SUCCESS:
        draft.reservePosts.unshift(dummyReserve(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;
      case ADD_RESERVE_FAILURE:
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      // UPLOAD_IMAGES
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesError = null;
        draft.uploadImagesDone = false;
        break;
      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      // REMOVE_POST, REMOVE_RESERVE
      case REMOVE_RESERVE_REQUEST:
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_RESERVE_SUCCESS:
        draft.reservePosts = draft.reservePosts.filter(
          (v) => v.id !== action.data
        );
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_RESERVE_FAILURE:
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      // UPDATE_POST, UPDATE_RESERVE
      case UPDATE_RESERVE_REQUEST:
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_RESERVE_SUCCESS:
        draft.reservePosts.find((v) => v.id === action.data.postId).user.name =
          action.data.name;
        draft.reservePosts.find(
          (v) => v.id === action.data.postId
        ).user.password = action.data.password;
        draft.reservePosts.find(
          (v) => v.id === action.data.postId
        ).reserveDate = action.data.reserveDate;
        draft.reservePosts.find(
          (v) => v.id === action.data.postId
        ).phoneNumber = action.data.phoneNumber;
        draft.reservePosts.find((v) => v.id === action.data.postId).content =
          action.data.content;
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
      case UPDATE_POST_SUCCESS:
        draft.mainPosts.find((v) => v.id === action.data.postId).title =
          action.data.title;
        draft.mainPosts.find((v) => v.id === action.data.postId).content =
          action.data.content;
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
      case UPDATE_RESERVE_FAILURE:
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      // LOAD_POSTS

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsError = null;
        draft.loadPostsDone = false;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.mainPosts = draft.mainPosts.concat(
          generateDummyPost(action.data)
        );
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      // LOAD_SEARCH_POSTS
      case LOAD_SEARCH_POSTS_REQUEST:
        draft.searchPostsLoading = true;
        draft.searchPostsError = null;
        draft.searchPostsDone = false;
        break;
      case LOAD_SEARCH_POSTS_SUCCESS:
        const regex = createSearchRegex(action.data);
        draft.searchPosts = draft.mainPosts.filter(
          (post) => regex.test(post.title) || regex.test(post.content)
        );
        draft.searchPostsLoading = false;
        draft.searchPostsDone = true;
        break;
      case LOAD_SEARCH_POSTS_FAILURE:
        draft.searchPostsLoading = false;
        draft.searchPostsError = action.error;
        break;

      // LOAD_POST
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostError = null;
        draft.loadPostDone = false;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        console.log('erroralert:', draft.singlePost);

        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;
      //REMOVE_IMAGE
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      // INCREMENT_VIEWS
      case INCREMENT_VIEWS_REQUEST:
        draft.incrementViewsLoading = true;
        draft.incrementViewsError = null;
        draft.incrementViewsDone = false;
        break;
      case INCREMENT_VIEWS_SUCCESS:
        draft.mainPosts.find((v) => v.id === action.data.postId).views =
          action.data.views + 1;
        draft.incrementViewsLoading = false;
        draft.incrementViewsDone = true;
        break;
      case INCREMENT_VIEWS_FAILURE:
        draft.incrementViewsLoading = false;
        draft.incrementViewsError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
