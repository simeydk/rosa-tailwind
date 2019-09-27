import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" value="Joe Soap" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" value="joe@soap.com"/></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader" selected>Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message">I need more soap</textarea></label>
          </p>
          <p>
            <button type="submit" autoFocus >Send</button>
          </p>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
