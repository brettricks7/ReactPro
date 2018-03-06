import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import OpenedDrawer from './OpenedDrawer.js';

const styles = {
  list: {
    width: '33vw',
    'z-index': 1001,
  },
  listFull: {
    width: '50%',
  },
};

class FilterDrawer extends React.Component {
  state = {
    drawer: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      drawer: open,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer(true)} variant="raised" color="primary" size='large' className={this.props.classes.button}>Filter</Button>
        <Drawer open={this.state.drawer}>
          <div className={this.props.classes.list}
            tabIndex={0}
            role="button"
          >
            <OpenedDrawer toggleDrawer={this.toggleDrawer}/>
          </div>
        </Drawer>
    </div>
    );
  }
}
export default withStyles(styles)(FilterDrawer);
