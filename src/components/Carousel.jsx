import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel({children}) {
    const slides = [
        'first', 'second', 'third'
    ]
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={25}
            totalSlides={3}
            interval={180}
            // isPlaying={true}
        >
            <Slider>
                {slides.map((slide,i) => <Slide index={i}>{slide}</Slide>)}
            </Slider>
            <DotGroup>
                {slides.map((slide,i) => <Dot slide={i} className="w-4 h-4 m-4 bg-blue-800 rounded-full"/>)}
            </DotGroup>
            {/* <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
    );
}