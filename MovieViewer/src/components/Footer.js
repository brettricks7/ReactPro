import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 30,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3, 
    width: "90%",
    height: "10vh", 
    "text-align": "center",
    "font-size": "30px",
    position: "absolute",
    bottom:0,
  }),
});

function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h1">
          Different buttons down here
        </Typography>
      </Paper>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);