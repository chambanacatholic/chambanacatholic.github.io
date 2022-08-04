import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import GoalCard from '../components/goal-card'
import Footer from '../components/footer'
import './mission.css'

const Mission = (props) => {
  return (
    <div className="mission-container">
      <Helmet>
        <title>Mission - ChambanaCatholic</title>
        <meta property="og:title" content="Mission - ChambanaCatholic" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div id="main-section" className="mission-main">
        <span className="mission-text">
          <span>The Objectives and Goals of Our Community</span>
        </span>
        <div className="mission-cards-container">
          <GoalCard
            rootClassName="goal-card-root-class-name"
            description="And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."
            description1="-Hebrews 10:24-25"
            goal="Members of the community strive to build one another up to sainthood."
          ></GoalCard>
          <GoalCard
            rootClassName="goal-card-root-class-name1"
            description="Jesus said to them, ‘I am the bread of life; whoever comes to me will never hunger, and whoever believes in me will never thirst."
            description1="-John 6:35"
            goal="Members of the CYP community seek after Jesus through regular devotion in personal prayer and the Sacraments, especially the Eucharist and Reconciliation."
            image_src="https://kottke.org/plus/misc/images/last-supper-copy-01.jpg"
          ></GoalCard>
          <GoalCard
            rootClassName="goal-card-root-class-name2"
            description="Then Jesus said to his disciples, ‘Whoever wishes to come after me must deny himself, take up his cross, and follow me."
            description1="-Matthew 16:24"
            goal="Members of the CYP community strive to embody the teachings of Jesus and His Catholic Church in their daily lives. "
            image_src="http://www.awesomestories.com/images/user/4a24c21d7f.jpg"
          ></GoalCard>
          <GoalCard
            rootClassName="goal-card-root-class-name3"
            description="Let no evil talk come out of your mouths, but only such as is good for edifying, as fits the occasion, that it may impart grace to those who hear."
            description1="-Ephesians 4:29"
            goal="Members of the CYP community love each other and the broader community through prayer, service, and respect in all interactions."
            image_src="/playground_assets/screen%20shot%202022-08-04%20at%203.24.03%20pm-300h.png"
          ></GoalCard>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Mission
