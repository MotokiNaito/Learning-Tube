import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/index';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import MyList from './pages/my-list/my-list';

const App: React.FC = () => {
  const currentUser = 'someone';
  return (
    <Provider store={store}>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/mylist" component={MyList} />
        <Redirect to="/" />;
      </Switch>
    </Provider>
  );
};

export default App;
