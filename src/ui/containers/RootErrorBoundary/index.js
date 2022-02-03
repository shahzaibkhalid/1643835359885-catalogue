import React from 'react';
import PropTypes from 'prop-types';
import Notification from '@tds/core-notification';
import Text from '@tds/core-text';
import { routes } from '../../routes';
import Link from '../../components/LinkWrapper';

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  };

  componentDidCatch = (error, erroInfo) => {
    console.error(error, erroInfo);
  };

  resetErrorState = () => {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Notification variant="error" copy="en">
          <Text bold>Something went wrong. Please try again.</Text>
          <Link to={routes.HOME} onClick={this.resetErrorState}>Go back to Home page.</Link>
        </Notification>
      )
    }

    return this.props.children;
  };
};

RootErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
};

export default RootErrorBoundary;
