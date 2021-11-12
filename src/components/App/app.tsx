import React from 'react';
import ImageWrapper from '../ImageWrapper/imageWrapper';
import {Provider} from "react-redux";
import {store} from "../../redux/store/store"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ImageWrapper />
    </Provider>
  )
}

export default App;
