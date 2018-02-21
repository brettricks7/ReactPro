import React, { Component } from 'react';
import Movie from './Movie.js';
import { withStyles } from 'material-ui/styles';
import styles from './MovieContainerStyles';
import Grid from 'material-ui/Grid';

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