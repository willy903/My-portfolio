import React, { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8u22q17', 'template_p7iukjc', form.current, 'ux3Zo24c-3DD70qpA')
          .then((result) => {
              alert(result.text)
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="contact" id="contact">
      <div className="container-all">
        <div className="success">
            <h1>Your message has been sent</h1>
        </div>
        <h1 className="title">Contact us</h1>
        <div className="container-contact">
          <form ref={form} action="submit" onSubmit={sendEmail} className="form-contact">
            <div className="form-send name">
              <label htmlFor="name">Name</label>
              <input type="text" name="user_name"/>
            </div>
            <div className="form-send email">
              <label htmlFor="email">addre email</label>
              <input type="text" name="user_email"/>
            </div>
            <div className="form-send message">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" ></textarea>
            </div>
            <div className="button">
                <input type="submit" value={"Send"} />
            </div>
          </form>
        </div>
    </div>
    </div>
  );
};

export default Contact;
