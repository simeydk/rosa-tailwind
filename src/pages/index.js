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
import Intro from "../components/Intro";



function HeroImg() {
  const src = "https://res.cloudinary.com/simeydk/image/upload/v1566145069/Rosabnb/IMG_0612.jpg"
  const height = "30rem"
  // const style = {
  //   backgroundImage: src,
  //   height
  // }
  const style = {
    position: 'relative',
    height: "28rem",
    background: `url(${src})`,
    backgroundAttachment: 'fixed',
    backgroundSize: "80%",
    backgroundPosition: `center top`,
    marginLeft: `auto`,
    marginRight: `auto`,
  }
  return (
    <div className="bg-paralax max-w-5xl" style={style}></div>
  )
}

function IndexPage() {
  return (
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
