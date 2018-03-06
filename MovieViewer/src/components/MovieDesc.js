import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  root: {
  },
});

function MovieDesc(props) {
  
  return (
    <div component='p'>
      Lorem ipsum dolor sit amet, ad per diceret aliquam fabellas, ut lorem populo pro. Has unum etiam indoctum te, ea eius euripidis usu, sea delenit rationibus constituto eu. Cu his cibo vocent laboramus, ne unum accumsan mei.
    </div>
  );
}

MovieDesc.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieDesc);
