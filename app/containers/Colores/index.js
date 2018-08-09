/*
 *
 * Colores
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import ColorItem from 'components/ColorItem';
import makeSelectColores from './selectors';

export class Colores extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    items: [0, 0, 0],
  };

  getColor = (itemIndex) => {
    const { items } = this.state;
    switch (items[itemIndex]) {
      case 0:
        return 'blue';
      case 1:
        return 'green';
      case 2:
        return 'red';
      default:
        return 'black';
    }
  }

  handleClickColorItem = (itemIndex) => {
    const { items } = this.state;
    // Aquí le tienen que mover con un IF
    // Cuando el itemIndex sea igual 3 hay que asignar 0 a newColor
    const newColor = items[itemIndex] + 1;
    items[itemIndex] = newColor;
    this.setState({ items });
  }

  render() {
    return (
      <div style={{ float: 'left', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20%' }}>
        <Helmet
          title="Colores"
          meta={[]}
        />
        <ColorItem
          color={this.getColor(0)}
          onClick={() => this.handleClickColorItem(0)}
        />
        <ColorItem
          color={this.getColor(1)}
          onClick={() => this.handleClickColorItem(1)}
        />
        <ColorItem
          color={this.getColor(2)}
          onClick={() => this.handleClickColorItem(2)}
        />
      </div>
    );
  }
}

Colores.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Colores: makeSelectColores(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Colores);
