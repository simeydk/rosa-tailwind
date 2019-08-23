import React from 'react';
import H2 from './utilities/H2'

export default Gallery

const data = [
    "images/gallery/20170903_165147_HDR.jpg",
    "images/gallery/20170904_115943_HDR.jpg",
    "images/gallery/20170904_120120_HDR.jpg",
    "images/gallery/IMG_0466.jpg",
    "images/gallery/IMG_0494.jpg",
    "images/gallery/IMG_0509.jpg",
    "images/gallery/IMG_0612.JPG",
]

const style = {
    width:"25%",
}

function Gallery() {
    return <section className="my-8" >
        <H2  id="gallery">Gallery</H2>
        <div className="flex flex-wrap">
            {data.map(src => <img src={src} alt="" style={style}/>)}
        </div>
    </section>
}