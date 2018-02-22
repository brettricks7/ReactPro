import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer.js'
import FilterDrawer from './components/FilterDrawer.js'
import { withStyles } from 'material-ui/styles';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

const styles = theme => ({
  root: {
    height: "100vh",
    width: "100vw",
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
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
        <Header/>
        <div className={this.props.classes.leftdrawer}>
          <FilterDrawer/>
        </div>
        <MovieContainer movies={this.state.movies}/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
