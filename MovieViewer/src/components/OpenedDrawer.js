import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import green from 'material-ui/colors/green';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

const styles = theme => ({
  container: {
    display: 'flex',
    // flexWrap: 'wrap',
    "flex-direction": "column",
    "justify-content": "flex-start",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    // flexWrap: 'wrap',
  },
  checked: {
    color: green[500],
    '& + $bar': {
      backgroundColor: green[500],
    },
  },
  bar: {
  },
});
class OpenedDrawer extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
  };

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChange = name => event => {
    this.setState({
    [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleSwitchChange('checkedA')}
                value="checkedA"
              />
            }
            label="Netflix"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleSwitchChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="Amazon"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedF}
                onChange={this.handleSwitchChange('checkedF')}
                value="checkedF"
                classes={{
                  checked: classes.checked,
                  bar: classes.bar,
                }}
              />
            }
            label="Hulu"
          />
          </FormGroup>

{/*
          <TextField
            id="full-width"
            label="Search"
            placeholder=""
            className={classes.textField}
            margin="normal"
            fullWidth
          /> */}
          <TextField
            id="year"
            label="Year"
            placeholder="2015"
            value={this.state.year}
            onChange={this.handleChange('year')}
            className={classes.textField}
            margin="normal"
            fullWidth
          />
        <Button onClick={this.props.toggleDrawer(false)} variant="raised" color="primary" size='large' className={this.props.classes.button}>Save</Button>
        <br/>
        <Button onClick={this.props.toggleDrawer(false)} variant="raised" color="secondary" size='large' className={this.props.classes.button}>Cancel</Button>
      </form>
    );
  }
}

OpenedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenedDrawer);
