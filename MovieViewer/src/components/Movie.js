import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    display: 'flex',
    "flex-direction": "row",
    width: "60vw",
    margin: "auto",
    "min-width": "600px",
    "min-height": "250px",
    "font-size": "calc( 14px + 8 * ((100vw - 500px) / 1500))",
  },
  tile: {
    "display": 'flex',
    "flex-direction": "column",
    "align-items": "stretch",
    "flex": "1 auto",
  },
  media: {
    "min-height": "23vw",
    "min-width": "17.25vw",
  },
  actions: {
    "flex-direction": "row",
  },
  content: {
    "min-height": "15vh",
    "min-width": "42.75vw",
  },
  controls: {
    "display": 'flex',
    alignItems: 'center',
    "flex-grow": 1,
    "justify-content": "flex-end",
  },
};

class Movie extends Component {
    render() {
        return (
        <div>
          <Card className={this.props.classes.card}>
            <div className={this.props.classes.tile}>

              <CardContent>
                <Typography variant="headline" component="h2"> {this.props.name}</Typography>
                <Typography variant="subheading" component="p" className={this.props.classes.content}>
                  {this.props.overview}
                </Typography>
              </CardContent>
              <CardActions className={this.props.classes.actions}>
                <Button size="small" color="primary" className={this.props.classes.controls}>
                  Add to Favorites
                </Button>
                <Button size="small" color="primary" className={this.props.classes.controls}>
                  Watched
                </Button>
                <Button size="small" color="primary" className={this.props.classes.controls}>
                  Trash
                </Button>
              </CardActions>
            </div>
        <CardMedia
          className={this.props.classes.media}
          image ="https://image.tmdb.org/t/p/w342/d4KNaTrltq6bpkFS01pYtyXa09m.jpg"
          title="Movie"
        />
        </Card>
      </div>
      );
    }
}
Movie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Movie);
