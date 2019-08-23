import React from 'react';
import H2 from './utilities/H2'

export default Awards

const logos = [
    "images/logos/HolidayCheck.webp",
    "images/logos/AA.webp",
    "images/logos/Afristay.webp",
]

function Awards() {
    return <section>
        <H2 id="awards">Awards</H2>
        <div className="flex align-items-center w-100 justify-center">
        {logos.map(src => <img src={src} alt="award" className ="w-24 m-8"/>)}
        </div>
    </section>
}