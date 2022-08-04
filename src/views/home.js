import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import InfoCard from '../components/info-card'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ChambanaCatholic</title>
        <meta property="og:title" content="ChambanaCatholic" />
      </Helmet>
      <div className="home-top-container">
        <div className="home-hero">
          <div className="home-content-container">
            <h1 className="home-text heading">
              <span>
                Calling all young
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>professionals!</span>
            </h1>
            <span className="home-text3">
              <span>
                We strive to provide an environment for Catholic young adults to
                gather and create an authentic community pursuing Jesus and His
                Church
              </span>
            </span>
          </div>
        </div>
      </div>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div id="main-section" className="home-main">
        <h1 className="home-text5">
          Are you in your 20’s 30’s and in the Champaign-Urbana area?
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <span className="home-text6">
          Consider getting involved in our community through the following
          activities
        </span>
        <div className="home-cards-container"></div>
        <div className="home-cards-container1">
          <Link to="/mission" className="home-navlink">
            <InfoCard
              rootClassName="info-card-root-class-name"
              info="Our Cause"
              description="We are seeking enlightenment through the teachings of the Church, and created this community to join hands in better serving God and navigating our early-adult lives"
              className="home-component1"
            ></InfoCard>
          </Link>
          <Link to="/about-us" className="home-navlink1">
            <InfoCard
              rootClassName="info-card-root-class-name2"
              description="We are a community of young adults in the greater Champaign-Urbana area striving to follow Jesus Christ through prayer, discipleship, and virtuous friendship, in faithful union with the Catholic Church"
              info="Join our Community"
              className="home-component2"
            ></InfoCard>
          </Link>
          <Link to="/community" className="home-navlink2">
            <InfoCard
              rootClassName="info-card-root-class-name1"
              image_src="data:image/jpeg;base64,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"
              info="Become a Catholic"
              description="Interested in becoming a Catholic or learning more about churches in our area? Learn more about what a faith journey might look like here"
              className="home-component3"
            ></InfoCard>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
