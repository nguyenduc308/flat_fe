import {wrapper} from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxContext } from "react-redux";
import { ConfigProvider } from 'antd';

import 'antd/dist/antd.variable.min.css';
import "../styles/index.scss";

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});

function App({ Component, pageProps }) {
  return <ReactReduxContext.Consumer>
    {({store}) => (
      <PersistGate persistor={store.__PERSISTOR} loading={<div>Loading</div>}>
        <ConfigProvider>
          <Component {...pageProps}/>
        </ConfigProvider>
      </PersistGate>
    )}
  
  </ReactReduxContext.Consumer>;
}

export default wrapper.withRedux(App);
