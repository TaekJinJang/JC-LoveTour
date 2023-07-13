import produce from 'immer';
import shortId from 'shortid';
import faker from 'faker';

export const initialState = {
  searchPosts: [],
  mainPosts: [
    // {
    //   id: 1,
    //   admin: {
    //     id: 1,
    //     nickname: '관리자 ',
    //   },
    //   title: '첫번째 제목입니다.',
    //   content: '첫 번째 게시글',
    //   views: 0,
    //   date: 0,
    //   Images: [
    //     {
    //       src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    //     },
    //   ],
    // },
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
  reviewPosts: [
    // {
    //   id: 1,
    //   user: {
    //     name: '장택진',
    //     // 휴대폰번호 ++
    //     // phoneNumber: '010-0000-0000',
    //     password: 123,
    //   },
    //   reviewDate: '예약날짜 나옴',
    //   content: '첫 번째 예약 내용',
    //   phoneNumber: '010-0000-0000',
    //   date: '2023 - 04 - 05',
    // },
  ],
  hasMorePosts: true,
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
  loadAllPostsLoading: false, // 모든 게시글 불러오기 시도중
  loadAllPostsDone: false,
  loadAllPostsError: null,
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

let fakerId = 0;
// 더미데이터 faker 라이브러리 사용
export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: (fakerId += 1),
      admin: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      count: 50,
      page: Math.ceil(fakerId / 10),
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
export const generateDummyReview = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      name: '박동준',
      password: 123,
      phoneNumber: '010-0000-0000',
      title: '하핫 잘 놀다 갑니다',
      content: faker.lorem.paragraph(),

      date: TodayTime(),
    }));

// ===================================== UI 제작 시 ===================================
initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));
// ====================================================================================

initialState.reviewPosts = initialState.reviewPosts.concat(
  generateDummyReview(10)
);
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';
export const ADD_GALLERY_REQUEST = 'ADD_GALLERY_REQUEST';
export const ADD_GALLERY_SUCCESS = 'ADD_GALLERY_SUCCESS';
export const ADD_GALLERY_FAILURE = 'ADD_GALLERY_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const REMOVE_REVIEW_REQUEST = 'REMOVE_REVIEW_REQUEST';
export const REMOVE_REVIEW_SUCCESS = 'REMOVE_REVIEW_SUCCESS';
export const REMOVE_REVIEW_FAILURE = 'REMOVE_REVIEW_FAILURE';
export const REMOVE_GALLERY_REQUEST = 'REMOVE_GALLERY_REQUEST';
export const REMOVE_GALLERY_SUCCESS = 'REMOVE_GALLERY_SUCCESS';
export const REMOVE_GALLERY_FAILURE = 'REMOVE_GALLERY_FAILURE';
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const UPDATE_REVIEW_REQUEST = 'UPDATE_REVIEW_REQUEST';
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS';
export const UPDATE_REVIEW_FAILURE = 'UPDATE_REVIEW_FAILURE';
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
export const LOAD_ALL_POSTS_REQUEST = 'LOAD_ALL_POSTS_REQUEST';
export const LOAD_ALL_POSTS_SUCCESS = 'LOAD_ALL_POSTS_SUCCESS';
export const LOAD_ALL_POSTS_FAILURE = 'LOAD_ALL_POSTS_FAILURE';
export const LOAD_REVIEW_POSTS_REQUEST = 'LOAD_REVIEW_POSTS_REQUEST';
export const LOAD_REVIEW_POSTS_SUCCESS = 'LOAD_REVIEW_POSTS_SUCCESS';
export const LOAD_REVIEW_POSTS_FAILURE = 'LOAD_REVIEW_POSTS_FAILURE';
export const LOAD_GALLERY_POSTS_REQUEST = 'LOAD_GALLERY_POSTS_REQUEST';
export const LOAD_GALLERY_POSTS_SUCCESS = 'LOAD_GALLERY_POSTS_SUCCESS';
export const LOAD_GALLERY_POSTS_FAILURE = 'LOAD_GALLERY_POSTS_FAILURE';
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
// const dummyReview = (data) => ({
//   id: shortId.generate(),
//   user: {
//     name: data.name,
//     password: data.password,
//   },
//   content: data.content,
//   phoneNumber: data.phoneNumber,

//   date: TodayTime(),
// });

// 정규표현식을 이용해 게시글 검색
function createSearchRegex(keyword) {
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${escapedKeyword}\\b`, 'i');
}

// 리듀서는 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수 ( 단! 불변성을 지키면서 !!)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      // ADD_POST, ADD_REVIEW
      case ADD_REVIEW_REQUEST:
      case ADD_POST_REQUEST:
      case ADD_GALLERY_REQUEST:
        draft.addPostLoading = true;
        draft.addPostError = null;
        draft.addPostDone = false;
        break;
      case ADD_REVIEW_SUCCESS:
        // draft.reviewPosts.unshift(dummyReview(action.data));
        draft.reviewPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;
      case ADD_GALLERY_SUCCESS:
        draft.gallery.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;
      case ADD_REVIEW_FAILURE:
      case ADD_POST_FAILURE:
      case ADD_GALLERY_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      // UPLOAD_IMAGES
      case UPLOAD_IMAGES_REQUEST:
      case UPLOAD_IMAGE_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesError = null;
        draft.uploadImagesDone = false;
        break;
      case UPLOAD_IMAGES_SUCCESS:
      case UPLOAD_IMAGE_SUCCESS:
        draft.imagePaths.push(action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      case UPLOAD_IMAGES_FAILURE:
      case UPLOAD_IMAGE_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      //REMOVE_IMAGE
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      // REMOVE_POST, REMOVE_REVIEW, REMOVE_GALLERY_REQUEST
      case REMOVE_REVIEW_REQUEST:
      case REMOVE_POST_REQUEST:
      case REMOVE_GALLERY_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_REVIEW_SUCCESS:
        draft.reviewPosts = draft.reviewPosts.filter(
          (v) => v.id !== action.data
        );
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(
          (v) => v.id !== action.data.PostId
        );
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_GALLERY_SUCCESS:
        draft.gallery = draft.gallery.filter(
          (v) => v.id !== action.data.PostId
        );
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_REVIEW_FAILURE:
      case REMOVE_POST_FAILURE:
      case REMOVE_GALLERY_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      // UPDATE_POST, UPDATE_REVIEW
      case UPDATE_REVIEW_REQUEST:
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_REVIEW_SUCCESS:
        // draft.reviewPosts.find((v) => v.id === action.data.postId).name =
        //   action.data.name;
        // draft.reviewPosts.find((v) => v.id === action.data.postId).password =
        //   action.data.password;
        // draft.reviewPosts.find((v) => v.id === action.data.postId).title =
        //   action.data.title;
        // draft.reviewPosts.find((v) => v.id === action.data.postId).phoneNumber =
        //   action.data.phoneNumber;
        // draft.reviewPosts.find((v) => v.id === action.data.postId).content =
        //   action.data.content;
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
      case UPDATE_POST_SUCCESS:
        // draft.mainPosts.find((v) => v.id === action.data.postId).title =
        //   action.data.title;
        // draft.mainPosts.find((v) => v.id === action.data.postId).content =
        //   action.data.content;
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
      case UPDATE_REVIEW_FAILURE:
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      // LOAD_POSTS , LOAD_REVIEW_POSTS , LOAD_GALLERY_POSTS_REQUEST
      case LOAD_POSTS_REQUEST:
      case LOAD_REVIEW_POSTS_REQUEST:
      case LOAD_GALLERY_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsError = null;
        draft.loadPostsDone = false;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.mainPosts = action.data;
        break;
      case LOAD_REVIEW_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // draft.reviewPosts = draft.reviewPosts.concat(action.data);
        draft.reviewPosts = action.data;
        break;
      case LOAD_GALLERY_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // draft.gallery = draft.gallery.concat(action.data);
        draft.gallery = action.data;
        break;
      case LOAD_POSTS_FAILURE:
      case LOAD_REVIEW_POSTS_FAILURE:
      case LOAD_GALLERY_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      // LOAD_ALL_POSTS
      case LOAD_ALL_POSTS_REQUEST:
        draft.loadAllPostsLoading = true;
        draft.loadAllPostsError = null;
        draft.loadAllPostsDone = false;
        break;

      case LOAD_ALL_POSTS_SUCCESS:
        draft.loadAllPostsLoading = false;
        draft.loadAllPostsDone = true;
        draft.mainPosts = action.data.mainPosts.concat(draft.mainPosts);
        draft.reviewPosts = action.data.reviewPosts.concat(draft.reviewPosts);
        draft.gallery = action.data.gallery.concat(draft.gallery);
        break;
      case LOAD_ALL_POSTS_FAILURE:
        draft.loadAllPostsLoading = false;
        draft.loadAllPostsError = action.error;
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

      // INCREMENT_VIEWS
      case INCREMENT_VIEWS_REQUEST:
        draft.incrementViewsLoading = true;
        draft.incrementViewsError = null;
        draft.incrementViewsDone = false;
        break;
      case INCREMENT_VIEWS_SUCCESS:
        // draft.mainPosts.find((v) => v.id === action.data.postId).views =
        //   action.data.views + 1;
        // draft.mainPosts.find((v) => v.id !== action.data.PostId);
        // console.log(draft.mainPosts.find((v) => v.id !== action.data.PostId));
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
