import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

class AppClass extends React.Component<AppProps, AppState> {
  // initialize state via constructor
  constructor(props: AppProps) {
    super(props);

    this.state = {counter: 0};
  }

  onIncrement = (): void => {
    this.setState({counter: this.state.counter + 1})
  }

  onDecrement = (): void => {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return <div className="App">
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
      <div>{ this.props.color }</div>
      <div>
        <button onClick={ this.onIncrement }>Inctement</button>
        <button onClick={ this.onDecrement }>Decrement</button>
        { this.state.counter }
      </div>
    </div>
  }
}

export default AppClass;