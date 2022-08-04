import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './info-card.css'

const InfoCard = (props) => {
  return (
    <div className={`info-card-container ${props.rootClassName} `}>
      <div className="info-card-container1">
        <img
          src={props.image_src}
          alt={props.image_alt}
          className="info-card-image"
        />
      </div>
      <div className="info-card-container2">
        <span className="info-card-text">{props.info}</span>
        <span className="info-card-text1">{props.description}</span>
        <OutlineButton
          rootClassName="outline-button-root-class-name2"
          button1="Learn More"
          className=""
        ></OutlineButton>
      </div>
    </div>
  )
}

InfoCard.defaultProps = {
  rootClassName: '',
  image_src:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/02/11/mother-teresa-3.jpg?quality=75&width=982&height=726&auto=webp',
  image_alt: 'image',
  info: 'Info',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

InfoCard.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  info: PropTypes.string,
  description: PropTypes.string,
}

export default InfoCard
