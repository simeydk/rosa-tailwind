import React from 'react';
import H2 from './utilities/H2'

export default Awards


const logos = [
    {src: "holiday_check.png", en: "Recommended on HolidayCheck", af: "Aanbeveel op HolidayCheck"},
    {src: "afristay.jpg", en: "Afristay Traveller's Choice award", af: "Afristay Reisiger se Keuse toekenning"},
    {src: "aa_quality_assured.jpg", en: "AA Quality Assured Highly recommended", af: "AA Quality Assured hoogs aanbeveel"},
].map(({src, en, af}) => ({src: `https://res.cloudinary.com/simeydk/image/upload/Rosabnb/partner_logos/${src}`, en, af}))

function Awards({lang = 'en'}) {
    
    const title = lang === 'en' ? 'Awards' : 'Toekennings'

    return <section id="awards">
        <H2>{title}</H2>
        <div className="flex flex-wrap align-items-center w-100 justify-center">
        {logos.map(logo => <img src={logo.src} alt={lang === 'en' ? logo.en : logo.af} className ="w-24 m-8"/>)}
        </div>
    </section>
}