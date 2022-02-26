import {wrapper} from '../store'
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxContext } from "react-redux";

function App({ Component, pageProps }) {
  return <ReactReduxContext.Consumer>
    {({store}) => (
      <PersistGate persistor={store.__PERSISTOR} loading={<div>Loading</div>}>
        <Component {...pageProps}/>
      </PersistGate>
    )}
  
  </ReactReduxContext.Consumer>
}

export default wrapper.withRedux(App)
