import React from "react";
import * as C from "./ContactComponents";

export default function Contact() {
  return (
    <C.Container id="contact">
      <C.Wrapper>
        <C.Title>Contact</C.Title>
        <C.Desc>
          Connect via sending an email.
        </C.Desc>
        <C.Form>
            <C.Input type="text" placeholder="Name *" required />
            <C.Input type="email" placeholder="Email  *" required />
            <C.Input type="text" placeholder="Subject" />
            <C.TextArea placeholder="Message *" required />
            <C.Button>Send</C.Button>
        </C.Form>
      </C.Wrapper>
    </C.Container>
  );
}
