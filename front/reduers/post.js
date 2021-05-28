export const intialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "안수ㅎ환",
            },
            content: "게시글 #블라블라 #라블라블",
            Images: [
                {
                    src: "https://picsum.photos/200/300",
                },
                {
                    src: "https://picsum.photos/id/237/200/300",
                },
                {
                    src: "https://picsum.photos/seed/picsum/200/300",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "블라",
                    },
                    content: "우와우",
                },
                {
                    User: {
                        nickname: "블라11",
                    },
                    content: "우와우111",
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: "더미데이터 입니다",
    User: {
        id: 1,
        nickname: "안수환",
    },
    Images: [],
    Comments: [],
};

const reducer = (state = intialState, action) => {
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
