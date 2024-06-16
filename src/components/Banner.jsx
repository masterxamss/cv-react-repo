import React from 'react'
import BannerImg from '../assets/images/banner.jpg'

const Banner = () => {
  return (
    <div className="banner">
        <img src={BannerImg} alt="image banner" style={{width: '100%'}} />
    </div>
  )
}

export default Banner