import React, { useContext } from 'react';
import { 
  DELETE_EVENT,
  ADD_OPERATION_LOG
} from '../actions';

import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from "../utils";

// const Event = (props) => {
//   const dispatch = props.dispatch;
//   const event = props.event;

const Event = ({event}) => { 
  const { dispatch } = useContext(AppContext);

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${event.id})を本当に削除してもいいですか？`);
    if (result) {
      dispatch({ type: DELETE_EVENT, id: event.id });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${event.id})を削除しました`,
        operatedAt: timeCurrentIso8601()
      });
    }
  }

  return(
    <tr>
      <th scope="row">{event.id}</th>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event;