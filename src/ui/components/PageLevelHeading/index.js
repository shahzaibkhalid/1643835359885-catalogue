import React from 'react';
import { default as TDSHeading } from '@tds/core-heading';
import Box from '@tds/core-box';
import PropTypes from 'prop-types';

const PageLevelHeading = ({children, ...rest}) => (
  <Box inset={4}>
    <TDSHeading {...rest}>{children}</TDSHeading>
  </Box>
);

PageLevelHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ])
};

export default PageLevelHeading;

