import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../compoments/AppLayout";
import PostCard from "../compoments/PostCard";
import PostForm from "../compoments/postForm";
import { LOAD_POSTS_REQUEST } from "../reduers/post";
import { LOAD_ME_INFO_REQUEST } from "../reduers/user";

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } =
        useSelector((state) => state.post);

    useEffect(() => {
        if (retweetError) {
            return alert(retweetError);
        }
    }, [retweetError]);
    useEffect(() => {
        dispatch({
            type: LOAD_ME_INFO_REQUEST,
        });
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            if (
                window.scrollY + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 500
            ) {
                if (hasMorePosts && !loadPostsLoading) {
                  const lastId = mainPosts[mainPosts.length - 1]?.id
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasMorePosts, loadPostsLoading, mainPosts]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </AppLayout>
    );
};

export default Home;
