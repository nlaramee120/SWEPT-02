import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import Auth from '../../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to='/me' />
  }

  return (
    <div className='profile-wrapper'>
        <div className='profile-info-wrapper'>
            <div className='profile-welcome-header'>
              <h1>Welcome, {user.username}!</h1>
            </div>
            <p>{user.email}</p>
        </div>
        <div className='recent-search-wrapper'>
            <div className='recent-search-header'>
              <h1>Recent Searches</h1>
              <p>Placeholder</p>
              <p>Placeholder</p>
              <p>Placeholder</p>
              <p>Placeholder</p>
              <p>Placeholder</p>
            </div>
        </div>
    </div>
  );
};

export default Profile;