import React from "react";

function HeroImg({props}) {
  const src = props.src || "/images/gallery/IMG_0612.jpg"
  const style = {
    position: 'relative',
    height: "28rem",
    background: `url(${src})`,
    backgroundAttachment: 'fixed',
    backgroundSize: "80%",
    backgroundPosition: `center top`,
    marginLeft: `auto`,
    marginRight: `auto`,
  }
  props.style && Object.assign(style,props.style)
  
  return (
    <div className="bg-paralax max-w-5xl" style={style}></div>
  )
}
