import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer.js';
import FilterDrawer from './components/FilterDrawer.js';
import { withStyles } from 'material-ui/styles';
import Header from './components/Header.js';

const styles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    },
  leftdrawer: {
        "text-align": 'left',
        leftpadding: '20px',
    },
  page: {
    height: "95%",
    width: "95%",
    paddingLeft: 70,
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
        <div className={this.props.classes.page}>
          <Header/>
          <div className={this.props.classes.leftdrawer}>
            <FilterDrawer/>
          </div>
          <MovieContainer movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
