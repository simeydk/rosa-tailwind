import React from "react";

import { ParallaxBanner } from 'react-scroll-parallax'

const textDict = {
    en: {
        headingText: "Our rooms",
        bodyText: "We have a range of rooms, sleeping parties of two to families of four. Every room has access to its own private bathroom, including three en-suite. Our rooms range from R455 per person.",
        buttonText: "book now",
    },
    af: {
        headingText: "Ons kamers",
        bodyText: "Ons pragtige kamers is geskik vir enkellopendes tot families van ses. Elke kamer het toegang tot 'n private badkamer, insluitend drie en-suite. Ons kamers is beskikbaar vanaf R455 per persoon.",
        buttonText: "bespreek nou",
    },
}

function BookNowBlock({ children }) {
    const src = "https://res.cloudinary.com/simeydk/image/upload/w_1200,h_1200,c_fit,f_auto,q_auto/Rosabnb/white_bed.jpg"
    const style = {
        height: "32rem",
        // maxHeight: "75vw",
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

export default function BookNow({lang}) {
    const text = textDict[lang]
    const {bodyText, headingText, buttonText} = text

    return (
        <section id="rooms">
            <h2 className="text-4xl my-16 uppercase">{headingText}</h2>
            <BookNowBlock>
                <div className="bg-white max-w-sm m-4 p-4 md:px-10 md:py-6  md:m-20 outer-shadow">
                    <div className="font-light leading-loose text-lg italic text-gray-800">
                        <p>{bodyText}</p>
                    </div>
                    <a
                        href="https://www.nightsbridge.co.za/bridge/book?bbid=23656"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="inline-block text-lg my-4 border border-black uppercase p-2 hover:text-white hover:bg-black" >
                            {buttonText}
                        </span>
                    </a>
                </div>
            </BookNowBlock>
        </section>);
}

