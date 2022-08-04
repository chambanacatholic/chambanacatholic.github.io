import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ChurchCard from '../components/church-card'
import Footer from '../components/footer'
import './community.css'

const Community = (props) => {
  return (
    <div className="community-container">
      <Helmet>
        <title>Community - ChambanaCatholic</title>
        <meta property="og:title" content="Community - ChambanaCatholic" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name3"></Navbar>
      <div id="main-section" className="community-main">
        <span className="community-text">
          <span>Events Calendar</span>
        </span>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=cucatholicyoungprofessionals%40gmail.com&amp;ctz=America%2FChicago"
          className="community-iframe"
        ></iframe>
      </div>
      <div id="main-section" className="community-main1">
        <span className="community-text2">
          <span>Local Parishes and Resources</span>
        </span>
        <div className="community-container1">
          <ChurchCard
            rootClassName="church-card-root-class-name"
            image_src="https://upload.wikimedia.org/wikipedia/commons/b/b6/St._John%27s_Catholic_Newman_Center_Champaign%2C_Illinois.jpg"
            heading="St. John's Catholic Newman Center"
            description="St. John's Catholic Newman Center at the University of Illinois at Urbana-Champaign is the spiritual home for thousands of Catholic Illini on campus"
            address="604 E Armory Ave, Champaign, IL 61820"
            text="Website"
            website="https://www.sjcnc.org/"
          ></ChurchCard>
          <ChurchCard
            rootClassName="church-card-root-class-name1"
            website="https://stmatt.net/parish/"
            text="Website"
            heading="St. Matthew Catholic Parish"
            address="1303 Lincolnshire Dr, Champaign, IL 61821"
            description="St. Matthew is a Catholic K-8 school and parish located in southern Champaign"
            image_src="https://cdop.org/wp-content/uploads/2014/12/CHAMPAIGN-ST-MATTHEW-e1419819307352.jpg"
          ></ChurchCard>
          <ChurchCard
            rootClassName="church-card-root-class-name2"
            website="https://www.stpaturbana.org/"
            text="Website"
            heading="St. Patrick Catholic Church"
            description="A western-Urbana church that promotes the growing of God's family by living the love of Christ through sacraments, service, and a joyful, welcoming community"
            address="708 West Main St, Urbana, IL 61801"
            image_src="https://catholicchurch.directory/gallery/2992_il_urbana_st-patrick-parish_sqt.jpg"
          ></ChurchCard>
          <ChurchCard
            rootClassName="church-card-root-class-name3"
            address="612 E. Park St Champaign, Illinois 61820"
            website="https://stmarycu.org/contact"
            text="Website"
            heading="St. Mary Catholic Church"
            description="A northern-Champaign historical church, having origins in 1871."
            image_src="https://live.staticflickr.com/7689/16482918193_f963652467_b.jpg"
          ></ChurchCard>
          <ChurchCard
            rootClassName="church-card-root-class-name4"
            heading="Holy Cross Catholic Church"
            address="405 West Clark St  Champaign, IL 61820"
            description="Holy Cross is a Catholic K-8 school and parish in western Champaign"
            website="https://holycrosscatholic.org/"
            text="Website"
            image_src="https://cdop.org/wp-content/uploads/2014/12/CHAMPAIGN-HOLY-CROSS-e1419819841708.jpg"
          ></ChurchCard>
        </div>
      </div>
      <div id="main-section" className="community-main2">
        <span className="community-text4">
          <span>Follow Us on Instagram!</span>
        </span>
        <span>https://www.instagram.com/cu_catholic_yp/</span>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default Community
