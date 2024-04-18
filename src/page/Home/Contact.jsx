import "../../scss/Contact.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container-contact" id="contact">
      <div class="button-container-1 modal-contact">
        <span class="mas">Contact</span>
        <button id="work" type="button" name="Hover" onClick={toggleModal}>
          Contact
        </button>
      </div>

      <p className="p-contact">
      {t("Contact.pContact")}
      </p>

      {isOpen && (
        <form name="contact" method="post" className="form-contact">
          <input type="hidden" name="form-name" value="contact" />

          <label for="name" className="label-contact">
          {t("Contact.name")}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={t("Contact.holdername")}
            className="input-contact"
          />

          <label for="email" className="label-contact">
          {t("Contact.email")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={t("Contact.holderemail")}
            className="input-contact"
          />

          <label for="message" className="label-contact">
          {t("Contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("Contact.holdermessage")}
            className="textarea-contact"
          ></textarea>

          <div class="button-container-1 btn-contact">
            <span class="mas">{t("Contact.envoyer")}</span>
            <button id="work" type="submit" name="Hover">
            {t("Contact.envoyer")}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Contact;
