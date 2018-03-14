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
    width: "800px",
    margin: "auto",
    "height": "350px",
    "font-size": "calc( 14px + 8 * ((100vw - 500px) / 1500))",
  },
  tile: {
    "display": 'flex',
    "flex-direction": "column",
    "align-items": "stretch",
    "flex": "1 auto",
    'min-height': '350px',
    'width': "540px",
    'padding': 'auto',
    // 'overflow': 'hidden',
    // 'white-space': 'nowrap',
  },
  media: {
    "height": "350px",
    "width": "260px",

  },
  actions: {
    display: 'flex',
    "flex-direction": "row",
    // alignItems: 'center',
    // alignContent: 'center',
  },
  content: {
    "height": "225px",
    "width": "500px",
    padding: "10px 10px 10px 10px",
  },
  controls: {
    "display": 'flex',
    alignItems: 'center',
    // "flex-grow": 1,
    "justify-content": "flex-end",
  },
  info: {
    width: "800px",
    height: "350px",
  },
};

class Movie extends Component {
    render() {
        return (
        <div>
          <Card className={this.props.classes.card}>
            <div className={this.props.classes.tile}>
              <div className={this.props.classes.info}>
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
            </div>
            <CardMedia
              className={this.props.classes.media}
              image ={"https://image.tmdb.org/t/p/w300" + this.props.pic}
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
