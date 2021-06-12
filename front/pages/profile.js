import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

import AppLayout from "../compoments/AppLayout";
import NicknameEditForm from "../compoments/NicknameEditForm";
import FollwList from "../compoments/FollwList";
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from "../reduers/user";

const Profile = () => {
    const dispatch = useDispatch()
    const { me } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        })
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        })
    },[])
    useEffect(() => {
        if (!(me && me.id)) {
            Router.push("/");
        }
    }, [me && me.id]);

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

export default Profile;
