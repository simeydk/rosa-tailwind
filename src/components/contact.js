import React from 'react';
import H2 from './utilities/H2'
import {FontAwesomeIcon} from './utilities/fontAwesome'

export default Contact


function Contact() {
    return (
        <section className="p-4 pb-10 bg-gray-300" id="contact">
            <H2>Contact us</H2>
            <p>{"info@rosabnb.co.za"}<span className="text-gray-500">{" / "}</span>10 Vrede St, Oudtshoorn, 6620<span className="text-gray-500">{" / "}</span>+27 (0) 65 962 2762"}</p>
            <NetlifyForm className="max-w-2xl mx-auto">
                <div className="flex md:flex-row flex-col">
                    <input type="text" placeholder="name" name="name" className="border p-2 flex-grow m-2" />
                    <input type="email" placeholder="email" name="email" className="border p-2 flex-grow m-2" />
                </div>
                <div className="flex">
                    <input type="text" placeholder="subject" name="subject" className="text-xl border p-2 flex-grow m-2" />
                </div>
                <div className="flex">
                    <textarea name="message" className="border p-2 flex-grow m-2" rows="4" />
                </div>
                <button type="submit"  className="bg-gray-600 text-white py-2 px-4 text-xl hover:bg-gray-800 focus:bg-gray-700">
                    <FontAwesomeIcon icon="paper-plane" className="text-white mr-2 pr-1" />
                    Send Message
                </button>
            </NetlifyForm>
        </section>
    )
}

function NetlifyForm({children, formName, ...props}) {
    formName = formName || 'contact'
    return (
        <form 
        name={formName} 
        method="POST" 
        data-netlify="true" 
        // data-netlify-recaptcha="true"
        data-netlify-honeypot="bot-field"
        {...props}
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value={formName} />
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <p hidden>
            <label>
                Don’t fill this out: <input name="bot-field" />
            </label>
            </p>
            {children}
        </form>
    )
}