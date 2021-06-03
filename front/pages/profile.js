import Head from "next/head";
import React from "react";
import AppLayout from "../compoments/AppLayout";
import NicknameEditForm from "../compoments/NicknameEditForm";
import FollwList from "../compoments/FollwList";
import { useSelector } from "react-redux";

const Profile = () => {
    const { me } = useSelector((state) => state.me);
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
