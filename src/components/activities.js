import React from 'react';
import H2 from './utilities/H2'
export default Activities



const textEn = [
  {
    title: "Wineries Tour",
    description: "Just a short drive away from legendary wineries such as Boplaas and De Krans"
  },
  {
    title: "Cango Caves",
    description: "These must-see caves are a spectacular sight"
  },
  {
    title: "Ostrich Farms ",
    description: "Get up close and personal with ostriches at Highgate and Safari"
  },
  {
    title: "Historical Town Centre",
    description: "One of the oldest town centres in the country. See the Karoo mansions of the Ostrich Barons"
  },
  {
    title: "Packed Events Calendar",
    description: "There's always something to do in Oudtshoorn, such as the very popular Meerkat Magic"
  },
  {
    title: "Karoo Scenery",
    description: "Spectacular scenery awaits. Mountain passes and forests are all a short drive away"
  }
];
const textAf = [
  {
    title: "Wynlande",
    description: "Die gatstehuis is net 'n kort rit vanaf bekende wynplase soos Boplaas en De Kelder.",
  }, 
  {
    title: "Kangogrotte",
    description: "Diè wêreldbekende grotte bied 'n ongelooflike ervaring",
  }, 
  {
    title: "Volstruisplase",
    description: "Ontmoet 'n volstruis by die bekende volstruisplase van Highgate en Safari",
  }, 
  {
    title: "Historiese Middedorp",
    description: "Een van die oudste dorpe in die land, met pragtige geboue om elke draai. Besoek die ongelooflike Volstruispaleise",
  }, 
  {
    title: "Propvol Feeste",
    description: "Daar is altyd iets om te doen in die dorp, vanaf die KKNK to Karoo Klassique",
  }, 
  {
    title: "Karoo Landskap",
    description: "Asemroewende natuurskoon wag op jou. Berge en woude is albei op jou stoep.",
  },
]

function Activity({ title, description, icon }) {
  return <div className="w-full md:w-1/2 lg:w-1/3 p-6 mb-6">
    <h3 className="text-xl my-2">{title}</h3>
    <p className="font-light leading-loose text-sm italic text-gray-600">{description}</p>
  </div>
}

function Activities({lang = 'en'}) {

  const text = lang === 'en' ? textEn : textAf
  const title = lang === 'en' ? 'Things to do' : 'Aktiwiteite'
  return (
    <section id="seeDo">
      <H2>
        {title}
      </H2>
      <div className="flex flex-row flex-wrap max-w-4xl mx-auto">
        {text.map(props => <Activity {...props} />)}
      </div>
    </section>
  )
}
