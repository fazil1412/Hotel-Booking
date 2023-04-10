
import React from 'react'
import './home.css'
import NavBar from '../../components/NavBar/NavBar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailSection from '../../components/mailComponent/MailSection'
import Footer from '../../components/footer/Footer'

function home() {
  return (
    <div>
      <NavBar />
      <Header />

        {/* <h1 style={{marginLeft:"7rem",paddingTop:"1rem"}} >Our featured City</h1> */}
      <div className="homeContainer">
        <Featured />
        
        <h1 className='homeTitle'>Browse by place type : </h1>
        <PropertyList />

        <h1 className='homeTitle'>Our Featured Hotels : </h1>
        <FeaturedProperties />
        <MailSection />
        <Footer />
      </div>
    </div>
  )
}

export default home
