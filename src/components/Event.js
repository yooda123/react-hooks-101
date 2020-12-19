import React from 'react';

// const Event = (props) => {
//   const dispatch = props.dispatch;
//   const event = props.event;

const Event = ({event, dispatch}) => {

  const handleClickDeleteButton = () => {
      dispatch({ type: 'DELETE_EVENT', id: event.id });
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