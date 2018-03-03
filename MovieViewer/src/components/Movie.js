import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    width: "60vw",
    margin: "auto",
    raised: "true",
    elevation: 24,
  },
  media: {
    height: "23vw",
    width: "17.25vw",
  },
  tile: {
    paddingLeft: "5px",
    paddingTop: "5px",
  },
};
class Movie extends Component {
    render() {
        return (
        <div>
          <Card className={this.props.classes.card}>
            <div className={this.props.classes.tile}>
              <CardMedia
                className={this.props.classes.media}
                image ="https://image.tmdb.org/t/p/w342/d4KNaTrltq6bpkFS01pYtyXa09m.jpg"
                title="Movie"
              />
            </div>
            <CardContent>
              <Typography variant="headline" component="h2" className={this.props.classes.title}> {this.props.name}</Typography>
              <Typography component="p">
                Movie Description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Add to Favorites
              </Button>
              <Button size="small" color="primary">
                Watched
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
}
Movie.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Movie);
