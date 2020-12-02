import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    content: ''
  }

  deleteCharHandler = (index) => {
    const text = this.state.content.split('')
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({ content: updatedText })
  }


  handleOnChange = (event) => {
    this.setState({ content: event.target.value })
  }
  render() {
    const charList = this.state.content.split('').map((ch, index) => {
      return <Char clicked={() => this.deleteCharHandler(index)} character={ch} key={index} />;
    });

    return (
      <div className="App">
        <input onChange={this.handleOnChange} value={this.state.content} type='text' />
        <Validation inputLength={this.state.content.length} />
        {charList}
      </div>
    );
  }
}

export default App;
