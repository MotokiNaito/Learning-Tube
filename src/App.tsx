import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/index';
import CollectionsOverview from './components/collections-overview/collections-overview';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CollectionsOverview />
    </Provider>
  );
};

export default App;
