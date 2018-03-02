import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    width: "50vh",
  },
  media: {
    height: 200,
  },
};
class Movie extends Component {
    render() {
        return (
        <div>
          <Card className={this.props.classes.card}>
            <CardMedia
              className={this.props.classes.media}
              image ="http://via.placeholder.com/350x350"
              title="Movie"
            />
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