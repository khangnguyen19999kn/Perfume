import React from 'react'
import TopHeader from './component/TopHeader'
import Navbar from './component/Navbar'
import Carousel from './component/Carousels'
import NewProc from './component/NewProc'
import AuthenBanner from './component/AuthenBanner'
import ForMan from './component/ForMan'
import ForWoman from "./component/ForWomen";
export default function index() {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Carousel/>
      <NewProc/>
      <AuthenBanner/>
      <ForMan/>
      <ForWoman/>

        
    </div>
  )
}
