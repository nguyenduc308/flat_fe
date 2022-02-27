import { END } from 'redux-saga';
import Head from 'next/head';
import { useState } from 'react';

import { Pagination } from 'antd';

import { wrapper } from '../../store';
import { WorkLayout } from '../../components/layouts';
import { loadData } from '../../store/work/actions';
import WorkItem from '../../components/work/work-item';

const WorkList = (props) => {
  const [page, setPage] = useState(1);

  function onPaginatioChange(page) {
    setPage(page)
  }

  return (<>
  <Head>
      <title>Công việc freelancer mới nhất</title>
  </Head>
  <div className='work-list'>
    {
        props.list.map((item, index) => {
            return <WorkItem 
                key={item.id}
                style={ index % 2 === 0 ? {'background-color': '#fff'} : {'background-color': '#fafafa'}}
                item={item}
            />
        })
    }
  </div>
  <div className="pagination-custom pagination-center">
    <Pagination current={page} onChange={onPaginatioChange} total={50} />
  </div>
  </>);
};

WorkList.Layout = WorkLayout;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(loadData());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return {
      props: {
          list: Array.from({length: 10}).fill({
            id: Math.random(),
            title: 'Food Delviery Mobile App',
            description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.',
            tags: {
                technology: [
                    {name: 'IOS', id: 1, slug: 'ios'}, 
                    {name: 'Android', id: 2, slug: 'android'}, 
                    {name: 'Mobile apps', id: 3, slug: 'mobile-apps'}
                ],
            },
            created_at: Date.now(),
            location: 'San Francisco',
            price: '$1,000 - $2,500',
            price_type: 'Fixed Price',
            slug: 'Food-Delviery-Mobile-App',
            published_at: 3 + ' minutes ago'
          })
      }
  }
});

export default WorkList;
