import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import AppLayout from '../compoments/AppLayout';
import NicknameEditForm from '../compoments/NicknameEditForm';
import FollwList from '../compoments/FollwList';

const Profile = () => {
  const { me } = useSelector((state) => state.me);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me, me.id]);

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
