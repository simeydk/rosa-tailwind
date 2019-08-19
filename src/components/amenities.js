import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faCoffee,
  faWheelchair,
  faSwimmer,
  faCar,
  faSatellite,
  faWind,
  faWifi,
  faAward,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faCoffee,
  faWheelchair,
  faSwimmer,
  faCar,
  faSatellite,
  faWind,
  faWifi,
  faAward,
) 
const element = <FontAwesomeIcon icon={faCoffee} />

export default Amenities

const data = [

    {
        title: "Breakfast",
        description: "Breakfast is included with all our rooms. Tuck in to scrumptious meals with a local twist",
        icon: "coffee"
    },

    {
        title: "Pool & Garden",
        description: "Relax in our beautiful garden or take an afternoon dip in our huge pool. Two of our rooms have private balconies",
        icon: "swimmer"
    },
    {
        title: "Secure Parking & Access",
        description: "We take your safety seriously. Secure parking is provided",
        icon: "car"
    },
    {
        title: "Free Wifi",
        description: "We have free and fast Wifi throughout the guesthouse",
        icon: "wifi"
    },
    {
        title: "Satellite Television",
        description: "All rooms come standard with televisions and DSTV",
        icon: "satellite"
    },
    {
        title: "Aircon & Heating",
        description: "Adjust the temperature in your room to your liking. We can handle any weather",
        icon: "wind"
    },
]

function Amenity({ title, description, icon }) {
    return <div className="w-full md:w-1/2 lg:w-1/3 p-6 mb-6">
        <FontAwesomeIcon icon={icon} size="2x" color="#718096" />
        <h3 className="text-xl my-2">{title}</h3>
        <p className="font-light leading-loose text-sm italic text-gray-600">{description}</p>
    </div>
}

function Amenities() {
    return (
        <section>
            <h2 id="rooms" className="text-4xl my-16 uppercase">
                Our services
            </h2>
            <div className="flex flex-row flex-wrap max-w-4xl mx-auto">
              {data.map(props => <Amenity {...props} />)}
            </div>
        </section>
    )
}
