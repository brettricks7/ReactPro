import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    display: "flex",
    marginTop: 0,
    width: "100%",
    height: "10vh",
    "justify-content": "center",
    "alignItems": "center",
    "font-size": "40px",
    position: "fixed",
    top: 0,
    "z-index": 1000,
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root}>
        <Typography className={classes.root}>
          The Movie Thing
        </Typography>
      </Paper>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
