import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button } from './Button';

interface Props {
  [x: string]: any;
  history: any;
  location: any;
  match: any;
  staticContext: any;
  to: any;
  onClick: any;
  disabled?: boolean;
}

const LinkButton = (props: Props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    disabled,
    ...rest
  } = props;
  return (
    <Button
      disabled={disabled}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
      {...rest}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
