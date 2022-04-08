import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button } from './Button';
import { ButtonWithoutStyles } from './button-without-styles';

interface Props {
  [x: string]: any;
  history: any;
  location: any;
  match: any;
  staticContext: any;
  to: any;
  onClick: any;
  disabled?: boolean;
  noStyle?: boolean;
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
    noStyle,
    ...rest
  } = props;
  return (
    <>
      {noStyle ? (
        <ButtonWithoutStyles
          disabled={disabled}
          onClick={event => {
            onClick && onClick(event);
            history.push(to);
          }}
          {...rest}
        />
      ) : (
        <Button
          disabled={disabled}
          onClick={event => {
            onClick && onClick(event);
            history.push(to);
          }}
          {...rest}
        />
      )}
    </>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
