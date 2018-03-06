import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer.js';
import FilterDrawer from './components/FilterDrawer.js';
import { withStyles } from 'material-ui/styles';
import Header from './components/Header.js';


const styles = theme => ({
  root: {
    height: "100%",
    width: "100vw" ,
    background: "rgb(193, 193, 193)",
    },
  leftdrawer: {
    "text-align": 'left',
    leftpadding: '20px',
    position: 'fixed',
    paddingTop: '50vh',
    // background: 'rgb(0, 0, 0)',
    // "font-color": 'rgb(254, 254, 254)',
    "z-index": 1000,
    },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ['Batman', 'Spiderman', 'The Hulk', 'Superman', 'Spiderman 2', 'The Worm']
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
          <Header/>
          <div className={this.props.classes.leftdrawer}>
            <FilterDrawer/>
          </div>
          <MovieContainer movies={this.state.movies}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
