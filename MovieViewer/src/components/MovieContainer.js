import React, { Component } from 'react';
import Movie from './Movie.js';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    // flexGrow: 1,
    // position: "relative",
    paddingTop: "150px",

  },
});

class MovieContainer extends Component {

    render() {
        return (
            <div className={this.props.classes.root}>
              <Grid container spacing={24}>
                  {this.props.movies.map(
                      (movie => {
                          return (
                              <Grid key={movie.title} item xs= {12}>
                                   <Movie name={movie.title} overview={movie.overview} pic={movie.poster_path}/>
                              </Grid>
                          );
                      })
                  )},
              </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(MovieContainer);
