import React from "react";

const Contacts = () => {
  return (
    <div>
      <section id="contactform" className="contactform">
        <div style={{ width: "90%", margin: "0 0 6rem 0" }}>
          <iframe
            width="100%"
            title="This is a unique title"
            height="400"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=nl&amp;q=ankaradreef+(Mijn%20bedrijfsnaam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div className="contact-text">
          <h1>Contact us</h1>
          <p>
            If you have any questions or in case you want to make an appiontment
            please fill in the form or contact us directly via our whatsApp
            <a href="https://api.whatsapp.com/send?phone=+31618794513">
              <i className="fab fa-whatsapp"></i> Whatsapp
            </a>
          </p>
        </div>
        <form id="form" method="POST">
          <label htmlFor="naam">Name:</label>
          <input
            type="text"
            name="Naam"
            id="Naam"
            placeholder="Name"
            required
          />
          <label htmlFor="bedrijfsnaam">Company's Name:</label>
          <input
            type="text"
            name="Bedrijfsnaam"
            id="bedrijfsnaam"
            placeholder="Company's Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Email Address"
            required
          />
          <label htmlFor="phone"> Telephone number:</label>
          <input
            type="tel"
            id="phone"
            name="Phone"
            placeholder="Telephone number: +31618794513 "
            required
          />

          <label htmlFor="Bericht">Message:</label>
          <textarea
            id="Bericht"
            name="Bericht"
            rows="10"
            placeholder="Ur Message"
            required></textarea>
          <input
            type="hidden"
            name="_autoresponse"
            value="sent from De Syriano"
          />

          <input
            type="hidden"
            name="_next"
            value="http://127.0.0.1:5500/thanks.html"
          />

          <button id="submit" type="submit">
            send us <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
