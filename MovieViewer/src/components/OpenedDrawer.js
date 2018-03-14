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

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
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
                onChange={this.handleChange('checkedA')}
                value="checkedA"
              />
            }
            label="Netflix"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
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
                onChange={this.handleChange('checkedF')}
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


        <TextField
          id="full-width"
          label="Search"
          placeholder=""
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
