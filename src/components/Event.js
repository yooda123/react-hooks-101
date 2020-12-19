import React from 'react';
import { DELETE_EVENT } from '../actions';

// const Event = (props) => {
//   const dispatch = props.dispatch;
//   const event = props.event;

const Event = ({event, dispatch}) => {

  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${event.id})を本当に削除してもいいですか？`);
    if (result) dispatch({ type: DELETE_EVENT, id: event.id });
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