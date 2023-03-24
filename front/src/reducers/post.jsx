import produce from 'immer';
import shortId from 'shortid';

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
  addPostLoading: false, // 게시글 등록 시도중
  addPostDone: false,
  addPostError: null,
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
  imagePaths: [],
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

const TodayTime = () => {
  let date = new Date(); // 현재 날짜 및 시간
  let Year = date.getFullYear(); // 월
  let Month = date.getMonth() + 1; // 월
  let Day = date.getDate(); // 일

  return Year + '-' + Month + '-' + Day;
};

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

// 리듀서는 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 ( 단! 불변성을 지키면서 !!)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // ADD_POST
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
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
      // REMOVE_POST
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      // UPDATE_POST
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.mainPosts.find((v) => v.id === action.data.postId).title =
          action.data.title;
        draft.mainPosts.find((v) => v.id === action.data.postId).content =
          action.data.content;
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
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
        draft.mainPosts = draft.mainPosts.concat(action.data);
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
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
      default:
        break;
    }
  });

export default reducer;
