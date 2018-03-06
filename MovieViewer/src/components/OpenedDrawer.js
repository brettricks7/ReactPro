import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import ToggleSwitches from './ToggleSwitches.js';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
});

// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

class OpenedDrawer extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
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
        <ToggleSwitches/>

        <TextField
          id="full-width"
          label="Starts with..."
          placeholder="The Godfa"
          className={classes.textField}
          margin="normal"
          fullWidth
        />
        <TextField
          id="multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          fullWidth
        />
        <TextField
          id="with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <Button onClick={this.props.toggleDrawer(false)} variant="raised" color="primary" size='large' className={this.props.classes.button}>Save</Button>
      </form>
    );
  }
}

OpenedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpenedDrawer);
