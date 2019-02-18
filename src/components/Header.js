import React from 'react'
import PropTypes from 'prop-types';


const Header = (props) => {
  const { appName } = props;

  return (
    <div>
      <h1>{appName}</h1>
    </div>
  );
};

Header.defaultProps = {
  appName: "Contact handler"
};

Header.propTypes = {
  appName: PropTypes.string.isRequired
};

export default Header;
