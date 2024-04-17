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
        N'hésitez pas à me contacter en soumettant le formulaire ci-dessous, et
        je vous répondrai dès que possible.
      </p>

      {isOpen && (
        <form name="contact" method="post" className="form-contact">
          <input type="hidden" name="form-name" value="contact" />

          <label for="name" className="label-contact">
            Nom :
          </label>
          <input
          id="name"
            type="text"
            name="name"
            placeholder=" Entrez votre nom :"
            className="input-contact"
          />

          <label for="email" className="label-contact">
            adresse e-mail :
          </label>
          <input
          id="email"
            type="email"
            name="email"
            placeholder=" 
            Entrez votre adresse e-mail :"
            className="input-contact"
          />

          <label for="message" className="label-contact">
            Message:
          </label>
          <textarea
          id="message"
            name="message"
            placeholder=" 
            Entrez votre message :"
            className="textarea-contact"
          ></textarea>

          <button type="submit" className="btn-contact">
            Envoyer
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
