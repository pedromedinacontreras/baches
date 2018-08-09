/*
 *
 * PaginaBienvenida
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  MainContainer,
  WelcomeText,
} from './styledComponents';
import makeSelectPaginaBienvenida from './selectors';

// const nombre = 'Pedro Medina';
// const saludos = `Saludos a ${nombre} que trabaja en google`;

export class PaginaBienvenida extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainContainer>
        <Helmet
          title="Bienvenida"
          meta={[]}
        />
        <WelcomeText
          textColor="white"
          textSize="56px"
        >
          Bienvenido
        </WelcomeText>
        <WelcomeText
          textColor="black"
          textSize="56px"
        >
          Bienvenido
        </WelcomeText>
      </MainContainer>
    );
  }
}

PaginaBienvenida.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PaginaBienvenida: makeSelectPaginaBienvenida(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginaBienvenida);
