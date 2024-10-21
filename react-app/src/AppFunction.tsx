import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  color?: string;
}

function AppFunction(props: AppProps): JSX.Element  {
  const [ counter, setCounter ] = useState(0)

  const onIncrement = (): void => {
    setCounter(counter + 1)
  }

  const onDecrement = (): void => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>{ props.color }</div>
      <div>
        <button onClick={ onIncrement }>Inctement</button>
        <button onClick={ onDecrement }>Decrement</button>
        { counter }
      </div>
    </div>
  );
}

export default AppFunction;
