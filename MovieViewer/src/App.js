import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer.js'
import FilterDrawer from './components/FilterDrawer.js'
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    height: "95vh",
    width: "95vw",
    justify: "center",
    },
  leftdrawer: {
        "text-align": 'left',
        leftpadding: '20px',
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
        <div className={this.props.classes.leftdrawer}>
          <FilterDrawer/>
        </div>
        <MovieContainer movies={this.state.movies}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
