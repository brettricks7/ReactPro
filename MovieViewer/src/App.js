import React, { Component } from 'react';
import './App.css';
import MovieContainer from './components/MovieContainer.js';
import FilterDrawer from './components/FilterDrawer.js';
import { withStyles } from 'material-ui/styles';
import Header from './components/Header.js';
import { getData } from './Actions';

const styles = theme => ({
  root: {
    background: "rgb(193, 193, 193)",
    },
  leftdrawer: {
    "text-align": 'left',
    leftpadding: '20px',
    position: 'fixed',
    paddingTop: '50vh',
    "z-index": 1000,
    },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovies: [],
    };
  }

  componentWillMount() {
    getData().then( data => {
      console.log(data)
      this.setState({ newMovies: data})
    })
  };

  render() {
    // console.log(this.state.newMovies)
    return (
      <div className={this.props.classes.root}>
          <Header/>
          <div className={this.props.classes.leftdrawer}>
            <FilterDrawer/>
          </div>
          <MovieContainer movies={this.state.newMovies}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
