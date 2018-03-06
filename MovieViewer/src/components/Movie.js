import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    display: 'flex',
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
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    height: "20vh",
    width: "42.75vw",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
};
class Movie extends Component {
    render() {
        return (
        <div>
          <Card className={this.props.classes.card}>
            <div className={this.props.classes.details}>

            <CardContent>
              <Typography variant="headline" component="h2" className={this.props.classes.content}> {this.props.name}</Typography>
              <Typography variant="subheading" component="p" className={this.props.classes.content}>
                Lorem ipsum dolor sit amet, ad per diceret aliquam fabellas, ut lorem populo pro. Has unum etiam indoctum te, ea eius euripidis usu, sea delenit rationibus constituto eu. Cu his cibo vocent laboramus, ne unum accumsan mei.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" className={this.props.classes.controls}>
                Add to Favorites
              </Button>
              <Button size="small" color="primary" className={this.props.classes.controls}>
                Watched
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
