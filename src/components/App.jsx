import React, {useEffect, useState} from "react";
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

import Layout from "./layout";
import SEO from "./seo";
import Testimonials from "./testimonials"
import Amenities from "./amenities"
import Gallery from "./gallery"
import Activities from "./activities"
import Awards from "./awards"
import BookNow from "./Booknow";
import Kids from "./kids"
import Contact from "./contact"
import Map from './map'
import FancyLogo from "./FancyLogo";
import Intro from "./Intro";


function useKeyDown(fn) {
  useEffect(() => {
    document.addEventListener('keydown',fn)
    return () => document.removeEventListener('keydown',fn)
  })
}

function HeroImg() {
  // const src = "https://res.cloudinary.com/simeydk/image/upload/c_crop,f_auto,h_1880,w_3840,x_0,y_0/v1566145069/Rosabnb/IMG_0612.jpg"
  const src = "https://res.cloudinary.com/simeydk/image/upload/w_1200,h_1200,c_fit,f_auto,q_auto/v1566145069/Rosabnb/IMG_0612.jpg"
  const style = {
    height: "28rem",
    maxHeight: "70vw",
    boxShadow: "inset 3px 2px black",
  }
  const layers = [{ image: src, amount: 0.3 }]

  return (
    <div className="mx-auto max-w-5xl inset-shadow">
      <ParallaxBanner layers={layers} style={style}>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center inset-shadow">
        </div>
      </ParallaxBanner>
    </div>
  )
}

function IndexPage({lang:propsLang = 'en'}) {
  const [lang, setLang] = useState(propsLang)

  function toggleLang() {
    setLang(lang==='en' ? 'af' : 'en')
  }

  useKeyDown((kEvent) => {
    console.log({key: kEvent.key, event: kEvent} )
    if(kEvent.shiftKey & kEvent.ctrlKey & kEvent.key === 'L') {
      toggleLang()
    }
  })

  return (
    <ParallaxProvider>
      <Layout lang={lang} >
        <SEO />
        <FancyLogo />
        <section className="text-center">
          <HeroImg />
          <Intro lang={lang} />
          <Testimonials />
          <BookNow lang={lang} />
          <Amenities lang={lang} />
          <Gallery lang={lang} />
          <Awards lang={lang} />
          <Activities lang={lang} />
          <Kids lang={lang} />
          <Contact lang={lang} />
          <Map />
        </section>
      </Layout >
    </ParallaxProvider>
  );
}

export default IndexPage;
