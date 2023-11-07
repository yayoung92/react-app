import { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
            <h1>WEB</h1>
            world wide web!
      </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Subject></Subject>
    </div>
  );
}

export default App;
