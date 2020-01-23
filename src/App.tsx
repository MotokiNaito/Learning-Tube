import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/index';

import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import MyListPage from './pages/my-list/my-list';
import ProfilePage from './pages/profile/profile';
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

const App: React.FC = () => {
  const currentUser = 'someone';
  return (
    <Provider store={store}>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-list" component={MyListPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/sign-out" component={SignInSignOutPage} />
        <Redirect to="/" />;
      </Switch>
    </Provider>
  );
};

export default App;
