import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersList from './components/UsersList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
