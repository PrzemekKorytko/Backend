import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {`${counter}`}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter > 9 && <h1>{`Nie klikaj już!`}</h1>}
    </div>
  );
}

export default App;
