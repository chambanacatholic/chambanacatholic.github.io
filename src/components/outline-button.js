import React from 'react'

import PropTypes from 'prop-types'

import './outline-button.css'

const OutlineButton = (props) => {
  return (
    <div className={`outline-button-container ${props.rootClassName} `}>
      <button className="outline-button-button button">{props.button1}</button>
    </div>
  )
}

OutlineButton.defaultProps = {
  button1: 'Button',
  rootClassName: '',
}

OutlineButton.propTypes = {
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OutlineButton
