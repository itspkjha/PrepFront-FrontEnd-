import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'

function HeroSection() { 
  return (
    <div className='h-[500px] flex'>
        <LeftHeroSection/>
        <RightHeroSection/>
    </div>
  )
}

export default HeroSection