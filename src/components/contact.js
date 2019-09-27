import React from 'react';
import H2 from './utilities/H2'

export default Contact

function NetlifyForm({children}) {
    return (
        <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        // data-netlify-recaptcha="true"
        // data-netlify-honeypot="bot-field"
        >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        {/* <p hidden>
        <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
        </p> */}
        {children}
        </form>
    )
}

function Contact() {
    return (
        <section className="m-4">
            <H2 id="contact">Contact us</H2>
            <p>{"info@rosabnb.co.za / 10 Vrede St, Oudtshoorn, 6620 / +27 (0) 65 962 2762"}</p>
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                // data-netlify-recaptcha="true"
                // data-netlify-honeypot="bot-field"
                >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                {/* <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" />
                </label>
                </p> */}
                <input type="text" placeholder="name" name="Name" className="border" />
                <input type="email" placeholder="email" name="Email" className="border" />
                <input type="text" placeholder="Subject" name="Subject" className="border" />
                <div>
                    <textarea className="border" name="message" />
                </div>
                <button type="submit"  className="bg-blue-500 text-white p-4">Send Message</button>
            </form>
        </section>
    )
}
