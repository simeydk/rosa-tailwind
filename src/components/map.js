import React from 'react';

export default Map

function Map() {
    return (
        <section 
            className="bg-blue-500" 
            // style={{position:"relative", width:"100vw", left:0, background:"red"}}
            >
            <div className="w-100 h-100 bg-black-500">
                <iframe
                    title="map"
                    width="100%" 
                    // height="100vh"
                    // width="600" 
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=rosa%20b%26b%2C%20oudtshoorn&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                >
                </iframe>
            </div>
        </section>
    )
}
