import { wrapper } from '../../store';
import { loadData } from '../../store/work/actions';
import { END } from 'redux-saga';

const WorkList = (props) => {
  return <div className='work-list'>
    
    detail
  </div>;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(loadData());
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return {
      props: {
          detail: {
            id: Math.random(),
            title: 'Food Delviery Mobile App',
            description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.',
            tags: [{name: 'IOS', id: 1}, {name: 'Android', id: 2}, {name: 'Mobile apps', id: 3}],
            created_at: Date.now(),
            location: 'San Francisco',
            price: '$1,000 - $2,500',
            price_type: 'Fixed Price',
            slug: 'Food-Delviery-Mobile-App',
            published_at: 3 + ' minutes ago'
          }
      }
  }
});

export default WorkList;
