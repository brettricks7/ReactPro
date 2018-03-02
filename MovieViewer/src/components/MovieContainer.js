import React, { Component } from 'react';
import Movie from './Movie.js';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
});

class MovieContainer extends Component {
    render() {
        return (
            <Grid container className={this.props.classes.root}>
                {this.props.movies.map(
                    (movie => {
                        return (
                            <Grid key={movie} item> 
                                 <Movie name={movie} />
                            </Grid>
                        );
                    })
                )}
            </Grid>
        );
    }
}

export default withStyles(styles)(MovieContainer);