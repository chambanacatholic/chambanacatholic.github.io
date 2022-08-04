import React from 'react'

import PropTypes from 'prop-types'

import './goal-card.css'

const GoalCard = (props) => {
  return (
    <div className={`goal-card-container ${props.rootClassName} `}>
      <div className="goal-card-container1">
        <img
          src={props.image_src}
          alt={props.image_alt}
          className="goal-card-image"
        />
        <span className="goal-card-text">{props.goal}</span>
      </div>
      <div className="goal-card-container2">
        <span className="goal-card-text1">{props.description}</span>
        <span className="goal-card-text2">{props.description1}</span>
      </div>
    </div>
  )
}

GoalCard.defaultProps = {
  goal: 'Goal',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  description1: 'Verse',
  rootClassName: '',
  image_src:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/02/11/mother-teresa-3.jpg?quality=75&width=982&height=726&auto=webp',
  image_alt: 'image',
}

GoalCard.propTypes = {
  goal: PropTypes.string,
  description: PropTypes.string,
  description1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GoalCard
