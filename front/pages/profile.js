import Head from "next/head";
import React from "react";
import AppLayout from "../compoments/AppLayout";
import NicknameEditForm from "../compoments/NicknameEditForm";
import FollwList from "../compoments/FollwList";

const Profile = () => {
    const followerList = [
        {
            nickname: "안수환",
        },
        {
            nickname: "안수환1",
        },
        {
            nickname: "안수환2",
        },
    ];

    const followingList = [
        {
            nickname: "안수환",
        },
        {
            nickname: "안수환1",
        },
        {
            nickname: "안수환2",
        },
    ];
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollwList header="팔로잉 목록" data={followingList} />
                <FollwList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;
