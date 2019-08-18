import React from "react";

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



function HeroImg() {
  const src = "/images/gallery/IMG_0612.jpg"
  const height = "30rem"
  // const style = {
  //   backgroundImage: src,
  //   height
  // }
  const style = { 
    position: 'relative',
    height: "25rem", 
    background: `url(${src}) 50% fixed / cover`,
    // backgroundAttachment: 'fixed',
    // backgroundSize: 'cover', 
    backgroundPosition: `center center`,   
  }
  return (
    <div className="max-w-4xl mx-auto" style={{position:'relative'}}>
      <div className="max-w-4xl mx-auto bg-fixed" none="bg-fixed bg-cover" style={style}>
        {/* <img src={src} className="max-w-4xl mx-auto" alt="" /> */}
      </div>
    </div>
  )
}


function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
      />
      <FancyLogo />
      <section className="text-center">
        <HeroImg />
        <p className="italic mb-3">
          {"Situated in central Oudtshoorn, Rosa B&B offers unmatched comfort and tranquility. We have something for everyone here. Relax next to the swimming pool after enjoying a hearty South African breakfast. In the winter get cosy in front of the fireplace with one of our hundreds of books."}
        </p>
        <p className="italic mb-3">
          {"Every room boasts free WiFi, television, aircon and/or a heater."}
        </p>
        <Testimonials />
        <BookNow />
        <Amenities />
        <Gallery />
        <Awards />
        <Activities />
        <Kids />
        <Contact />
        <Map />


        {/* <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-gray-900"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p> */}
      </section>
    </Layout >
  );
}

export default IndexPage;
