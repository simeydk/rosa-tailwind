import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel({children, className}) {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={35}
            totalSlides={children.length}
            interval={180}
            // isPlaying={true}
            className={className}
        >
            <Slider>
                {children.map((child,i) => <Slide index={i}>{child}</Slide>)}
            </Slider>
            <div>
                {children.map((child,i) => <Dot slide={i} className="w-3 h-3 m-3 bg-gray-300 hover:bg-gray-600 disabled:bg-red-500 rounded-full"/>)}
            </div>
            <DotGroup></DotGroup>
            {/* <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
    );
}