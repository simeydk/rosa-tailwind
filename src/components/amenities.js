import React from 'react';
import H2 from './utilities/H2'
import { FontAwesomeIcon } from './utilities/fontAwesome'


export default Amenities

const data = [

    {
        icon: "coffee",
        en: {
            title: "Breakfast",
            description: "Breakfast is included with all our rooms. Tuck in to scrumptious meals with a local twist.",
        },
        af: {
            title: "Ontbyt",
            description: "Breakfast is included with all our rooms. Ontbyt word altyd ingesluit. Geniet smullekker kos met 'n plaaslike gier.",
        },
    },

    {
        icon: "swimmer",
        en: {
            title: "Pool & Garden",
            description: "Relax in our beautiful garden or take an afternoon dip in our huge pool. Two of our rooms have private balconies",
        },
        af: {
            title: "Swembad & Tuin",
            description: "Geniet ons pragtige tuin of koel lekker af in ons groot swembad",
        },
    },
    {
        icon: "car",
        en: {
            title: "Secure Parking & Access",
            description: "We take your safety seriously. Secure parking is provided",
        },
        af: {
            title: "Veilige Parkering & Toegang",
            description: "Ons neem u veiligheid ernstig op. Veilige parkering word verskaf asook persoonlike toegangstoestelle",
        },
    },
    {
        icon: "wifi",
        en: {
            title: "Free Wifi",
            description: "We have free and fast Wifi throughout the guesthouse",
        },
        af: {
            title: "Gratis Wifi",
            description: "Daar is gratis vinnige WiFi dwarsdeur die huis",
        },
    },
    {
        icon: "satellite",
        en: {
            title: "Satellite Television",
            description: "All rooms come standard with televisions and DSTV",
        },
        af: {
            title: "Satelliettelevisie",
            description: "Alle kamers is toegerus met televisieskerms en DSTV",
        },
    },
    {
        icon: "wind",
        en: {
            title: "Aircon & Heating",
            description: "Adjust the temperature in your room to your liking. We can handle any weather",
        },
        af: {
            title: "Lugverkoeling- en verhitting",
            description: "Verstel die temperatuur net soos jy wil. Ons kan enige weer hanteer.",
        },
    },
]

function Amenity({ en, af, icon, lang }) {
    const {title, description} = lang === 'en' ? en : af 
    return <div className="w-full md:w-1/2 lg:w-1/3 p-6 mb-6">
        <FontAwesomeIcon icon={icon} size="2x" color="#718096" />
        <h3 className="text-xl my-2">{title}</h3>
        <p className="font-light leading-loose text-sm italic text-gray-600">{description}</p>
    </div>
}

function Amenities({lang = 'en'}) {
    return (
        <section id="services">
            <H2>
                {lang === 'en' ? "Our services" : "Wat ons bied"}
            </H2>
            <div className="flex flex-row flex-wrap max-w-4xl mx-auto">
              {data.map(props => <Amenity {...props} lang={lang} />)}
            </div>
        </section>
    )
}
