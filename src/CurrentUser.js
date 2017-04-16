import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';

const CurrentUser = ( { user }) => {
  return (
    <div className='CurrentUser'>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.isRequired,
    photoUrl: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};
