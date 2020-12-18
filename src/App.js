import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);
  const {name, price} = state;

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate.');
  });

  // 初回レンダリングのみ
  useEffect(() => {
    console.log('This is like componentDidMount.');
  }, []);

  // nameを変更した時のみ
  useEffect(() => {
    console.log('This callback is for name.');
  }, [name]);

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name : e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
