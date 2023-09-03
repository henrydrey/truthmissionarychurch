import React from 'react'
import "./Home.css"
import Banner from './Banner'
import RecentNews from './RecentNews'
import Featured from './Featured'
import EventSermons from './EventSermons'
import Footer from './Footer'


const Home = () => {
  return (
    <>
      <Banner />
      <RecentNews />
      <Featured />
      <EventSermons />
      <Footer />
    </>
  )
}

export default Home