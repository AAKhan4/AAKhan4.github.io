import React, { useRef, useState } from "react";
import * as C from "./ContactComponents";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [submit, setSubmit] = useState("Send");

  const submitted = () => {
    if (!form.current.checkValidity()) {
      setSubmit("Please fill all required fields!");
      setTimeout(() => {
        setSubmit("Send");
      }, 2000);
      return;
    }
    setSubmit("Message Sent!");
    setTimeout(() => {
      setSubmit("Send");
    }, 2000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eiktlvk", "template_b4ehl28", form.current, "A-ZSmBEGr8Lqmux6t")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    form.current.reset();
  };

  return (
    <C.Container id="contact">
      <C.Wrapper>
        <C.Title>Contact</C.Title>
        <C.Desc>Connect via sending an email.</C.Desc>
        <C.Form ref={form} onSubmit={sendEmail}>
          <C.Input type="text" id="name" name="name" placeholder="Name *" required />
          <C.Input type="email" id="email" name="email" placeholder="Email  *" required />
          <C.Input type="text" id="subject" name="subject" placeholder="Subject" />
          <C.TextArea id="message" name="message" placeholder="Message *" required />
          <C.Button type="submit" onClick={submitted}>{submit}</C.Button>
        </C.Form>
      </C.Wrapper>
    </C.Container>
  );
}
