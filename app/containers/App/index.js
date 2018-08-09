/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import withProgressBar from 'components/ProgressBar';
import mainTheme from './theme';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  float: left;
  width: 100%;
  background: #fafafa;
`;

export function App(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(mainTheme)}>
      <AppWrapper>
        <Helmet
          defaultTitle="TÍTULO PÁGINA"
        />
        {React.Children.toArray(props.children)}
      </AppWrapper>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
