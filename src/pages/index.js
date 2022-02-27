import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';
import { wrapper } from '../store';

const Index = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <>
      <Link href='/work'>
        <a >Work</a>
      </Link> <br />
      <Link href='/users/me'>
        <a >Profile</a>
      </Link> <br />
      <Link href='/auth/login'>
        <a >Login</a>
      </Link> <br />
      <Link href='/auth/register'>
        <a >Register</a>
      </Link> <br />
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  return {
    props: {}
  };
});

export default Index;
