import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Carousel } from 'react-responsive-carousel'

export default Testimonials

const data = [
    {
        text: "Felt like coming home! Very friendly staff, great and cozy rooms, excellent service and a marvelous breakfast.",
        author: "Ingrid",
        source: "TripAdvisor"
    },
    {
        text: "Simply lovely.",
        author: "Bea",
        source: "TripAdvisor"
    },
    {
        text: "Central, clean, homely and very welcoming. Would definitely stay again.",
        author: "Dave",
        source: "Booking.com"
    },
]

function Testimonial({ text, author, source, key }) {
    return <div index={key || 0} className="font-light leading-loose">
        <blockquote className="text-lg italic text-gray-800">“{text}”</blockquote>
        <p className="text-gray-600"> - {author}, {source}</p>
        <p></p>
    </div>
}

function TestimonalBlock({ children }) {
    const src = "https://res.cloudinary.com/simeydk/image/upload/v1566145346/Rosabnb/IMG_0424.jpg"
    const style = {
        // height: "28rem",
        maxHeight: "75vw",
    }
    const layers = [{ image: src, amount: 0.3 }]

    return (
        <div className="mx-auto max-w-5xl inset-shadow">
            <ParallaxBanner layers={layers} style={style}>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center inset-shadow">
                    {children}
                </div>
            </ParallaxBanner>
        </div>
    )
}

function Testimonials() {
    const entries =  data.slice(0,1).map(props => <Testimonial {...props} />)
    return (
        <TestimonalBlock>
            <div className="bg-white max-w-sm m-4 p-4 md:px-10 md:py-6  md:m-20 outer-shadow">
                {/* <Carousel> */}
                    {entries}
                {/* </Carousel> */}
            </div>
        </TestimonalBlock>
    )
}
