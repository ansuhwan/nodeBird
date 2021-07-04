import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";

import AppLayout from "../compoments/AppLayout";
import NicknameEditForm from "../compoments/NicknameEditForm";
import FollwList from "../compoments/FollwList";
import { LOAD_ME_INFO_REQUEST } from "../reduers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
// import {
//     LOAD_FOLLOWERS_SUCCESS,
//     LOAD_FOLLOWINGS_REQUEST,
// } from "../reduers/post";

const Profile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    useEffect(() => {
        if (!(me && me.id)) {
            Router.push("/");
        }
    }, [me && me.id]);
    console.log("aasfasf", me);
    // useEffect(() => {
    //     dispatch({
    //         type: LOAD_FOLLOWERS_SUCCESS,
    //     });
    //     dispatch({
    //         type: LOAD_FOLLOWINGS_REQUEST,
    //     });
    // }, []);

    if (!me) {
        return null;
    }
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollwList header="팔로잉" data={me.Followings} />
                <FollwList header="팔로워" data={me.Followers} />
            </AppLayout>
        </>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(
    async (context) => {
        console.log("getServerSideProps start");
        console.log(context.req.headers);
        const cookie = context.req ? context.req.headers.cookie : "";
        axios.defaults.headers.Cookie = "";
        if (context.req && cookie) {
            axios.defaults.headers.Cookie = cookie;
        }
        context.store.dispatch({
            type: LOAD_ME_INFO_REQUEST,
        });
        context.store.dispatch(END);
        console.log("getServerSideProps end");
        await context.store.sagaTask.toPromise();
    }
);

export default Profile;
