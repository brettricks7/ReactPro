import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ['Batman', 'Spiderman', 'The Hulk', 'Superman']
    }
  }

  render() {
    return (
      <div className="App">
        <MovieContainer movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
