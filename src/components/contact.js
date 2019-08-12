import React from 'react';

export default Contact

function Contact() {
    return (
        <section className="m-4">
            <h2 id="contact">Contact us</h2>
            <p>{"info@rosabnb.co.za / 10 Vrede St, Oudtshoorn, 6620 / +27 (0) 65 962 2762"}</p>
            <form>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
                <input type="text" placeholder="Subject" />
                <div>
                    <textarea className="border" />
                </div>
            </form>
        </section>
    )
}
