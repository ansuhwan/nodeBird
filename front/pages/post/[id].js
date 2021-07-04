import { END } from "@redux-saga/core";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AppLayout from "../../compoments/AppLayout";
import { LOAD_POST_REQUEST } from "../../reduers/post";
import wrapper from "../../store/configureStore";
import PostCard from "./../../compoments/PostCard";

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const { singlePost } = useSelector((state) => state.post);

    return (
        <AppLayout>
          <Head>
            <title>
              {singlePost.User.nickname}
              님의 글
            </title>
            <mate name="description" content={singlePost.content}/>
            {/* <title>
              {userInfo.nickname}
              님의 글
            </title>
            <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
            <meta property="og:title" content={`${userInfo.nickname}님의 게시글`} />
            <meta property="og:description" content={`${userInfo.nickname}님의 게시글`} />
            <meta property="og:image" content="https://nodebird.com/favicon.ico" />
            <meta property="og:url" content={`https://nodebird.com/user/${id}`} /> */}
          </Head>
            <PostCard post={singlePost} />
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        const cookie = context.req ? context.req.headers.cookie : "";
        axios.defaults.headers.Cookie = "";
        if (context.req && cookie) {
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch({
            type: LOAD_POST_REQUEST,
            data: context.params.id,
        });
        context.store.dispatch(END);
        await context.store.sagaTask.toPromise();
    }
);

export default Post;
