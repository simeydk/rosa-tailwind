import React from 'react';
import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Dot,
  Slide,
  Slider,
} from 'pure-react-carousel';
import H2 from './utilities/H2'


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
    return <section>
    <CarouselProvider
    visibleSlides={1}
    totalSlides={data.length}
    naturalSlideWidth={400}
    naturalSlideHeight={200}
    isPlaying
  >
    <H2>Gallery</H2>
    <Slider>
        {data.map((url,i) => (
            <Slide tag="a" index={i}>
                <img src={`https://res.cloudinary.com/simeydk/image/upload/w_1200,h_1200,c_fit,f_auto,q_auto/${url}`} alt="" />
            </Slide>
        ))}
    </Slider>
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <div>
        {data.map((url,i) =>(
        <Dot slide={i}>
            <img src={`https://res.cloudinary.com/simeydk/image/upload/w_100,h_100,c_fill,f_auto,q_auto/${url}`} alt="" />
        </Dot>
        ))}
    </div>
    <DotGroup dotNumbers />
  </CarouselProvider>
  </section>
}