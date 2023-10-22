import "../../scss/Contact.scss";
import { useState } from "react";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <section className="container-contact" id="contact">
      <button className="modal-contact" onClick={toggleModal}>
        CONTACT
      </button>
      <p className="p-contact">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>

      {isOpen && (
        <form name="contact" method="post" className="form-contact">


          <input type="hidden" name="form-name" value="contact" />

          <label for="name" className="label-contact">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder=" Enter Your Name"
            className="input-contact"
          />

          <label for="email" className="label-contact">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder=" Enter Your Email"
            className="input-contact"
          />

          <label for="message" className="label-contact">
            Message:
          </label>
          <textarea
            name="message"
            placeholder=" Enter Your Message"
            className="textarea-contact"
          ></textarea>

          <button type="submit" className="btn-contact">
            send
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
