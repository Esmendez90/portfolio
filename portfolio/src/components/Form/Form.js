import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/edmendezn@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("Thank you! Your message has been sent.");
        form.reset();
      } else {
        setFormStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Network error. Please try again later.");
    }
  };

  return (
    <section>
      <div id="contact" className="contact-section row-container row">
        <div className="h2-container col-sm-3">
          <div>
            <h2 style={{ color: "#4a4a4a" }}>Request Information</h2>
          </div>
        </div>{" "}

        <div className="text-container col-sm-8">

        <form onSubmit={handleSubmit}>
          {/* Formsubmit Hidden Fields */}
          <input
            type="hidden"
            name="_subject"
            value="New message from React Portfolio"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
      </div>
    </section>
  );
};

export default Form;
