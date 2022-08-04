import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import PersonCard from '../components/person-card'
import OutlineButton from '../components/outline-button'
import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - ChambanaCatholic</title>
        <meta property="og:title" content="About-Us - ChambanaCatholic" />
      </Helmet>
      <Navbar></Navbar>
      <div id="main-section" className="about-us-main">
        <span className="about-us-text">
          <span>Our Organizing</span>
          <span> Team</span>
        </span>
        <div className="about-us-cards-container">
          <PersonCard
            city="Laura Suttenfield"
            rootClassName="person-card-root-class-name3"
          ></PersonCard>
          <PersonCard
            city="Ian Ludden"
            image_src="/playground_assets/ian-200h.jpeg"
            description="Teacher in training"
            rootClassName="person-card-root-class-name5"
          ></PersonCard>
          <PersonCard
            city="Al Smith"
            image_src="/playground_assets/al-200w.jpeg"
            description="Doctor in training"
            rootClassName="person-card-root-class-name4"
          ></PersonCard>
        </div>
        <div className="about-us-container1">
          <h1 className="about-us-text03">Contact Us and Get Involved!</h1>
          <div className="about-us-container2"></div>
          <span className="about-us-text04">
            <span>
              We encourage all undergraduate students at University of Illinois
              at Urbana-Champaign and Parkland University to please participate
              in campus ministry through the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.sjcnc.org/worship/you-belong-here"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="about-us-text06">
                St. John&apos;s Newman Center
              </span>
            </a>
            <span>.</span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              We welcome Catholics or those interested in growing their faith in
              their 20&apos;s and 30&apos;s from the Champaign-Urbana area.
              Would you like to join our community? Or do you have any
              questions? Please let us know with an email!
            </span>
          </span>
          <div className="about-us-container3"></div>
          <a
            href="mailto:cucatholicyoungprofessionals@gmail.com ?subject=I'm Interested in Joining ChambanaCatholic!"
            className="about-us-link1"
          >
            <OutlineButton
              button1="Email Us Here!"
              rootClassName="outline-button-root-class-name"
              className="about-us-component4"
            ></OutlineButton>
          </a>
          <div className="about-us-container4"></div>
          <span className="about-us-text12">
            <span>
              Please click below to join our Mailchimp to receive email updates
              about our community and reminders about events!
            </span>
            <span className="about-us-text14"></span>
          </span>
          <div className="about-us-container5"></div>
          <a
            href="mailto:cucatholicyoungprofessionals@gmail.com ?subject=I'm Interested in Joining ChambanaCatholic!"
            className="about-us-link2"
          >
            <OutlineButton
              button1="Join Our Email List"
              rootClassName="outline-button-root-class-name1"
              className="about-us-component5"
            ></OutlineButton>
          </a>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default AboutUs
