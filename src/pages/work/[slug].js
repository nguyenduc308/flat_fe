import { END } from 'redux-saga';

import { wrapper } from '../../store';
import { loadData } from '../../store/work/actions';
import { ContentLayout } from '../../components/layouts';
import Rating from '../../components/common/rating'

const WorkDetail = (props) => {
  return <div className="work-detail">
    <div className='work-section'>
        <div className="work-section-header">
          <h3>Chi tiết công việc</h3>
        </div>
        <div className="work-section-body">
            <div className="work-section-left">
              <div className="work-section-left-header">
                <div className="item">
                  <p className="label">Tên công việc/ dự án</p>
                  <h2 className="value">Phát triển website bán hàng</h2>
                </div>

                <div className="item">
                  <p className="label">Mô tả</p>
                  <p className="value">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
  Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                </div>
              </div>
            </div>

            <div className="work-section-right">
              <div className="work-overview">
                <div className="work-overview-header">
                  <h3>Thông tin tổng quan</h3>
                </div>
                <div className="work-overview-inner">
                  <div className="work-overview-item">
                      <div className="work-overview-item__label">Địa điểm</div>
                      <div className="work-overview-item__value">Không giới hạn</div>
                  </div>
                  <div className="work-overview-item">
                      <div className="work-overview-item__label">Loại công việc</div>
                      <div className="work-overview-item__value">Freelancee</div>
                  </div>
                  <div className="work-overview-item">
                      <div className="work-overview-item__label">Ngân sách</div>
                      <div className="work-overview-item__value">VND 20 - 40tr</div>
                  </div>
                  <div className="work-overview-item">
                      <div className="work-overview-item__label">Ngày đăng</div>
                      <div className="work-overview-item__value">23/2/2022</div>
                  </div>
                  <div className="work-overview-item">
                      <div className="work-overview-item__label">Ngày hết hạn</div>
                      <div className="work-overview-item__value">23/2/2022</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="work-section-content">
        </div>
    </div>

    <div className='work-section'>
        <div className="work-section-header">
          <h3>Thông tin khách hàng</h3>
        </div>
        <div className="work-section-body">
            <div className="work-section-left">
              <div className="customer-box">
                  <div className="customer-box-item">
                    <div className="customer-box-item__label">Tên khách hàng</div>
                    <div className="customer-box-item__value">Lưu Quốc Thắng</div>
                  </div>
                  <div className="customer-box-item">
                    <div className="customer-box-item__label">Số công việc</div>
                    <div className="customer-box-item__value">8</div>
                  </div>
                  <div className="customer-box-item">
                    <div className="customer-box-item__label">Số công việc hoàn thành</div>
                    <div className="customer-box-item__value">6</div>
                  </div>
                  <div className="customer-box-item">
                    <div className="customer-box-item__label">Đánh giá</div>
                    <div className="customer-box-item__value">
                        <Rating rate={3.5} rateRange={5} isShowCount={true} />
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>

    <div className='work-section'>
        <div className="work-section-header">
          <h3>Thông tin đấu thầu</h3>
        </div>
        <div className="work-section-body">
            <div className="work-section-left">
              <p>Chưa có ai đấu thầu dự án</p>
            </div>
        </div>
    </div>
  </div>
  ;
};

WorkDetail.Layout = ContentLayout;

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

export default WorkDetail;
