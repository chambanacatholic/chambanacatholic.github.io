import React from 'react'

import PropTypes from 'prop-types'

import './person-card.css'

const PersonCard = (props) => {
  return (
    <div className={`person-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt1}
        src={props.image_src}
        className="person-card-image"
      />
      <div className="person-card-container1">
        <span className="person-card-text">{props.city}</span>
      </div>
    </div>
  )
}

PersonCard.defaultProps = {
  rootClassName: '',
  image_alt1: 'image',
  image_src: '/playground_assets/laura-200w.jpeg',
  city: 'Information',
}

PersonCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  city: PropTypes.string,
}

export default PersonCard
