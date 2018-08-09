/*
 *
 * Mariada
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectMariada from './selectors';

export class Mariada extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Mariada"
          meta={[
            { name: 'description', content: 'Description of Mariada' },
          ]}
        />
      Mariana & Karlangas & Daney & Tortillero
      </div>
    );
  }
}

Mariada.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Mariada: makeSelectMariada(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mariada);
