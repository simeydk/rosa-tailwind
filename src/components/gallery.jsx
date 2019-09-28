import React from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel';
import H2 from './utilities/H2'
import '../css/style.css'
import {FontAwesomeIcon} from './utilities/fontAwesome'


export default Gallery

const data = [
    "Rosabnb/IMG_0424.jpg",
    "Rosabnb/IMG_0417.jpg",
    "Rosabnb/20170904_115943_HDR.jpg",
    "Rosabnb/20170904_120120_HDR.jpg",
    "Rosabnb/20170903_165147_HDR.jpg",
    "Rosabnb/IMG_0494.jpg",
    "Rosabnb/IMG_0612.jpg",
    "Rosabnb/IMG_0509.jpg",
    "Rosabnb/IMG_0466.jpg",
    // "images/gallery/20170903_165147_HDR.jpg",
    // "images/gallery/20170904_115943_HDR.jpg",
    // "images/gallery/20170904_120120_HDR.jpg",
    // "images/gallery/IMG_0466.jpg",
    // "images/gallery/IMG_0494.jpg",
    // "images/gallery/IMG_0509.jpg",
    // "images/gallery/IMG_0612.JPG",
]

function Gallery() {
    return <section id="gallery" className="mx-auto max-w-5xl" >
    <CarouselProvider
    visibleSlides={1}
    totalSlides={data.length}
    naturalSlideWidth={400}
    naturalSlideHeight={200}
    isPlaying
  >
    <H2>Gallery</H2>
    <div className="relative">
        <Slider>
            {data.map((url,i) => (
                <Slide tag="a" index={i}>
                    <img src={`https://res.cloudinary.com/simeydk/image/upload/w_1200,h_1200,c_fit,f_auto,q_auto/${url}`} alt="" />
                </Slide>
            ))}
        </Slider>
        <ButtonBack tag="button" className="absolute top-0 bottom-0 left-0 button-back hover:shadow-outline w-20">
            <FontAwesomeIcon icon="chevron-left" className="text-4xl text-white"/>
        </ButtonBack>
        <ButtonNext tag="button" className="absolute top-0 bottom-0 right-0 button-next hover:shadow-outline w-20">
            <FontAwesomeIcon icon="chevron-right" className="text-4xl text-white"/>
        </ButtonNext>
    </div>
    <div className="flex flex-wrap align-middle justify-center">
        {data.map((url,i) =>(
        <Dot slide={i} className="gallery-dot" >
            <img 
                src={`https://res.cloudinary.com/simeydk/image/upload/w_60,h_60,c_fill,f_auto,q_auto/${url}`} 
                alt=""
                className="gallery-thumb m-2"

                    
            />
        </Dot>
        ))}
    </div>
  </CarouselProvider>
  </section>
}