import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Event from '../components/Event';

const App = () => {

  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({ type: 'CREATE_EVENT', title, body });
    setTitle('');
    setBody('');
  }
  
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('すべてのイベントを本当に削除してもいいですか？');
    if (result) dispatch({ type: 'DELETE_ALL_EVENTS' });
  }

  const unCreatable = title === '' || body === '';
  const unDeletable = state.length === 0;

  return (
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control"　id="formEventTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea className="form-control"　id="formEventBody" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>

          <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
          <button className="btn btn-danger" onClick={deleteAllEvents} disabled={unDeletable}>すべてのイベントを削除する</button>
        </form>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">タイトル</th>
              <th scope="col">ボディ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr> */}
            { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
        </table>

        <h4>操作ログ一覧</h4>

      </div>
  );
}

export default App;
