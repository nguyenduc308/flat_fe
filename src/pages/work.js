import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper } from '../store';
import { DefaultLayout } from '../components/layouts/default';
import { loadData } from '../store/work/actions';
import { END } from 'redux-saga';
import Link from 'next/link';

const Work = (props) => {
  const {data} = useSelector((state) => {
   return state;
  });

  useEffect(() => {
    console.log(data, 'data');
  }, [data]);

  return (<DefaultLayout>
    {props.a}
       <Link href='/'>
        <a >Index</a>
      </Link>
  </DefaultLayout>);
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(loadData());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  
  return {
    props: {
      a: 2
    }
  };
});

export default Work;
