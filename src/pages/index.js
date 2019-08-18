import React from "react";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonials from "../components/testimonials"
import Amenities from "../components/amenities"
import Gallery from "../components/gallery"
import Activities from "../components/activities"
import Awards from "../components/awards"
import BookNow from "./Booknow";
import Kids from "../components/kids"
import Contact from "../components/contact"
import Map from '../components/map'
import FancyLogo from "../components/FancyLogo";
import Intro from "../components/Intro";



function HeroImg() {
  const src = "https://res.cloudinary.com/simeydk/image/upload/c_crop,f_auto,h_1880,w_3840,x_0,y_0/v1566145069/Rosabnb/IMG_0612.jpg"
  const style = {
    height: "28rem",
    maxHeight: "35vw",
  }
  const layers = [{ image: src, amount: 0.3 }]

  return (
    <div className="mx-auto max-w-5xl inset-shadow">
      <ParallaxBanner layers={layers} style={style}>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        </div>
      </ParallaxBanner>
    </div>
  )
}

function IndexPage() {
  return (
    <ParallaxProvider>
      <Layout>
        <SEO />
        <FancyLogo />
        <section className="text-center">
          <HeroImg />
          <Intro />
          <Testimonials />
          <BookNow />
          <Amenities />
          <Gallery />
          <Awards />
          <Activities />
          <Kids />
          <Contact />
          <Map />
        </section>
      </Layout >
    </ParallaxProvider>
  );
}

export default IndexPage;
