import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';

const styles = {
  list: {
    width: '33vw',
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
        <Button onClick={this.toggleDrawer(true)}>Filter</Button>
        <Drawer open={this.state.drawer} onClose={this.toggleDrawer(false)}>
          <div className={this.props.classes.list}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
          >
            <p>Opened Drawer</p>
          </div>
        </Drawer>
    </div>
    );
  }
}
export default withStyles(styles)(FilterDrawer);
