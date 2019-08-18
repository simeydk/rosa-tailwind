import React from "react";

import { ParallaxBanner } from 'react-scroll-parallax'

function BookNowBlock({ children }) {
    const src = "https://static.wixstatic.com/media/84803a_4d41dc1b92b9400c9b38751aa1a67ef0~mv2.jpg/v1/fill/w_1470,h_945,al_c,q_85,usm_0.66_1.00_0.01/84803a_4d41dc1b92b9400c9b38751aa1a67ef0~mv2.webp"
    const style = {
        height: "32rem",
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

export default function BookNow() {
    return (
        <section>
            <h2 id="rooms" className="text-4xl my-16 uppercase">Our rooms</h2>
            <BookNowBlock>
                <div className="bg-white max-w-md px-10 py-6 md:m-20 outer-shadow">
                    <div className="font-light leading-loose text-lg italic text-gray-800">
                        <p>We have a range of rooms, sleeping parties of two to families of four. Every room has access to its own private bathroom, including three en-suite. Our rooms range from R455 per person.</p>
                    </div>
                    <button className="text-lg my-8 border border-black uppercase p-2 hover:text-white hover:bg-black">Book Now</button>
                </div>
            </BookNowBlock>
        </section>);
}

