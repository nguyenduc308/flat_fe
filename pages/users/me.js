;import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import {wrapper} from '../../store';

import { checkServerSideCookie, serverSideRedirect } from '../../helpers/auth';

const Profile = (props) => {
  return (<>
    Profile
  </>)
}

export const getServerSideProps = wrapper.getServerSideProps(({ store, res, req }) => {
  const token = checkServerSideCookie(req);

  if (!token) {
    return serverSideRedirect(res);
  }

  // store.dispatch(END);
  // await store.sagaTask.toPromise();
})

export default Profile;
