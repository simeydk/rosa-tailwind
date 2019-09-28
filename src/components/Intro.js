import React from "react";

const textEn = [
    "Situated in central Oudtshoorn, Rosa B&B offers unmatched comfort and tranquility. We have something for everyone here. Relax next to the swimming pool after enjoying a hearty South African breakfast. In the winter get cosy in front of the fireplace with one of our hundreds of books.",
    "Every room boasts free WiFi, television, aircon and/or a heater."
]

const textAf = [
  "Geleë in die hart van Oudtshoorn, bied Rosa B&B  ál die gerief en rustigheid wat jou hart begeer. Hier het ons iets vir elkeen. Ontspan langs die swembad nadat jy 'n  smullekker Suid-Afrikaanse ontbyt geniet het, of raak in die winter snoesig voor die vuurherd met een van ons honderde boeke.",
  "Elke kamer het gratis WiFi, lugverkoeler en/of 'n verhitter."
]

const textDict = {
  'en': textEn,
  'af': textAf,
}

export default function Intro({lang = 'en'}) {

  const text = textDict[lang]

  return (<section id="about" className="my-16 px-2 max-w-2xl mx-auto text-center font-light italic text-gray-600 leading-loose">
    <p className="italic mb-3">
      {text[0]}
    </p>
    <p className="italic mb-3">
      {text[1]}
    </p>
  </section>);
}
