import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from "./EventForm";
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

console.log(AppContext);

const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="container-fluid">
          <EventForm />
          <Events />

          <h4>操作ログ一覧</h4>

        </div>
      </AppContext.Provider>
  );
}

export default App;
