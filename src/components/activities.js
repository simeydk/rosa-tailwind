import React from 'react';
import H2 from './utilities/H2'
export default Activities



const data = [
  {
    title: "Wineries Tour",
    description:
      "Just a short drive away from legendary wineries such as Boplaas and De Krans"
  },
  {
    title: "Cango Caves",
    description: "These must-see caves are a spectacular sight"
  },
  {
    title: "Ostrich Farms ",
    description:
      "Get up close and personal with ostriches at Highgate and Safari"
  },
  {
    title: "Historical Town Centre",
    description:
      "One of the oldest town centres in the country. See the Karoo mansions of the Ostrich Barons"
  },
  {
    title: "Packed Events Calendar",
    description:
      "There's always something to do in Oudtshoorn, such as the very popular Meerkat Magic"
  },
  {
    title: "Karoo Scenery",
    description:
      "Spectacular scenery awaits. Mountain passes and forests are all a short drive away"
  }
];

function Activity({ title, description, icon }) {
  return <div className="w-full md:w-1/2 lg:w-1/3 p-6 mb-6">
      <h3 className="text-xl my-2">{title}</h3>
      <p className="font-light leading-loose text-sm italic text-gray-600">{description}</p>
  </div>
}

function Activities() {
  return (
    <section id="seeDo">
      <H2>
        Things to do
      </H2>
      <div className="flex flex-row flex-wrap max-w-4xl mx-auto">
        {data.map(props => <Activity {...props} />)}
      </div>
    </section>
    )
}
