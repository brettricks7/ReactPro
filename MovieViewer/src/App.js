import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import MovieContainer from './components/MovieContainer.js';
import FilterDrawer from './components/FilterDrawer.js';
import { withStyles } from 'material-ui/styles';
import Header from './components/Header.js';


const styles = theme => ({
  root: {
    // height: "100%",
    // width: "100%" ,
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
      movies: ['Batman', 'Spiderman', 'The Hulk', 'Superman', 'Spiderman 2', 'The Worm'],
      newMovies: [],
    };
  }

  getData = () => {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/discover/movie?year=2015&with_genres=53&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=a1cd50ef41a15f6bac67b30a5e051655",
      "method": "GET",
      "headers": {},
      "data": "{}"
    }

    $.ajax(settings).done( response => {
      console.log(response)
      const movieNames = response.results.map(
        (movie => { return movie.title })
      );
      this.setState({ newMovies: movieNames });
    });
  };

  componentWillMount() {
    this.getData()
  }

  render() {
    console.log(this.state.newMovies)
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
