import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

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

function Testimonial({ text, author, source }) {
    return <div>
        <h1 className="text-lg">“{text}”</h1>
        <p> - {author}, {source}</p>
        <p></p>
    </div>
}

function TestimonalBlock({ children }) {
    const src = "https://res.cloudinary.com/simeydk/image/upload/v1566145346/Rosabnb/IMG_0424.jpg"
    const style = {
        height: "28rem",
        maxHeight: "35vw",
    }
    const layers = [{ image: src, amount: 0.3 }]

    return (
        <div className="mx-auto max-w-5xl inset-shadow">
            <ParallaxBanner layers={layers} style={style}>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    {children}
                </div>
            </ParallaxBanner>
        </div>
    )
}

function Testimonials() {
    return (
        <TestimonalBlock>
            <div className="bg-white max-w-sm px-10 py-6 m-20">
                {data.map(props => <Testimonial {...props} />)}
            </div>
        </TestimonalBlock>
    )
}
