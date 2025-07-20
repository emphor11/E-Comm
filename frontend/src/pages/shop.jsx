import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/popular/popular'
import Offer from '../components/Offers/Offer'
import NewCollection from '../components/NewCollectios/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
      <div>
      <Hero/>
      </div>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </div>
    
    
  )
}

export default Shop