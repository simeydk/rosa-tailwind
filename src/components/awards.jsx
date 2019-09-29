import React from 'react';
import H2 from './utilities/H2'

export default Awards


const logos = [
    {src: "holiday_check.png", en: "Recommended on HolidayCheck", af: "Aanbeveel op HolidayCheck"},
    {src: "afristay.jpg", en: "Afristay Traveller's Choice award", af: "Afristay Reisiger se Keuse toekenning"},
    {src: "aa_quality_assured.jpg", en: "AA Quality Assured Highly recommended", af: "AA Quality Assured hoogs aanbeveel"},
].map(({src, en, af}) => ({src: `https://res.cloudinary.com/simeydk/image/upload/w_120,c_scale,f_auto/Rosabnb/partner_logos/${src}`, en, af}))

function Awards({lang = 'en'}) {
    return <section>
        <H2 id="awards">Awards</H2>
        <div className="flex align-middle justify-center">
        {logos.map(logo => <div className=""><img src={logo.src} alt={lang === 'en' ? logo.en : logo.af} className ="m-8"/></div>)}
        </div>
    </section>
}