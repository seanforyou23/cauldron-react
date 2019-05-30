import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Loader({ label, className, ...other }) {
  const props = {
    ...other,
    className: classNames('dqpl-loader', className),
    'aria-label': label,
    'aria-hidden': label ? null : true
  };
  return <div {...props} />;
}

Loader.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
};
Loader.displayName = 'Loader';