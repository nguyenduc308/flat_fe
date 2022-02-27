import { IoLocationOutline } from 'react-icons/io5';

import Header from '../default/header';
import Footer from '../default/footer';
import { Input, Select } from 'antd';

function WorkLayout({ children }) {
  return (
    <div className='wrapper work-wrapper'>
        <Header></Header>
            <main>
              <aside className="sidebar">
                <div className="sidebar-item">
                  <h3 className="sidebar-item-title">
                    Địa điểm
                  </h3>
                  <div className="sidebar-item-body">
                    <Input size="large" placeholder="Địa điểm làm việc" suffix={<IoLocationOutline />}/>
                  </div>
                </div>

                <div className="sidebar-item">
                  <h3 className="sidebar-item-title">
                    Ngành nghề
                  </h3>
                  <div className="sidebar-item-body">
                    <Select style={{width: '100%'}} defaultValue="technology" size="large">
                      <Select.Option value="technology">
                          Công nghệ thông tin
                      </Select.Option>
                      <Select.Option value="marketing">
                          Marketing
                      </Select.Option>
                      <Select.Option value="test">
                        Làm đẹp
                      </Select.Option>
                    </Select>
                  </div>
                </div>

                <div className="sidebar-item">
                  <h3 className="sidebar-item-title">
                    Từ khóa
                  </h3>
                  <div className="sidebar-item-body">
                    <Input size="large" placeholder="Từ khóa ngành nghề"/>
                  </div>
                </div>

              </aside>
              <div className='content'>
                {children}
              </div>
            </main>
        <Footer></Footer>
    </div>
  );
}

export default WorkLayout;
