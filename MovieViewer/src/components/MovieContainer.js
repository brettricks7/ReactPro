import React, { Component } from 'react';
import Movie from './Movie.js';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    card: {
        padding: '10px',
    },
});

class MovieContainer extends Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <GridList className={this.props.classes.gridList} cols={3}>
                    {this.props.movies.map(
                        (movie => {
                            return (
                                <GridListTile className={this.props.classes.card} cols={1} key={movie}> 
                                     <Movie name={movie} />
                                </GridListTile>
                            );
                        })
                    )}
                </GridList>
            </div>
        )
    }
}

export default withStyles(styles)(MovieContainer);