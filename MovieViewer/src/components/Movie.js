import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
      minWidth: 300,
      maxWidth: '30%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 24,
      color: theme.palette.text.secondary,
    },
    pos: {
      marginBottom: 12,
      color: theme.palette.text.secondary,
    },
  });

class Movie extends Component {
    render() {
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Typography className={this.props.classes.title}> {this.props.name} </Typography>
                    <Typography component="p"> Movie desc could go here. </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Movie);