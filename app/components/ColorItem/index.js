/**
*
* ColorItem
*
*/

import React, { PropTypes } from 'react';
const styles = {
  mainContainer: {
    float: 'left',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
};

class ColorItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { color, onClick } = this.props;
    return (
      <div
        style={{ ...styles.mainContainer, backgroundColor: color }}
        onClick={() => onClick()}
      >

      </div>
    );
  }
}

ColorItem.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorItem;
