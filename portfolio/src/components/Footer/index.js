import React from "react";
import * as F from "./FooterComponents";
import { Bio } from "../../data/Info.js";
import gitLogo from "../../images/necessaryIcons/github-mark-white.svg";
import linkedinLogo from "../../images/necessaryIcons/In-White-26@2x.png";
import gmailLogo from "../../images/necessaryIcons/gmail_icon.png";

export default function Footer() {
  return (
    <F.Container>
      <F.Wrapper>
        <F.Name href="#">{Bio.name}</F.Name>
        <F.Links>
          <F.Link href="#about">About</F.Link>
          <F.Divider />
          <F.Link href="#skills">Skills</F.Link>
          <F.Divider />
          <F.Link href="#education">Education</F.Link>
          <F.Divider />
          <F.Link href="#projects">Projects</F.Link>
        </F.Links>
        <F.Links>
          <F.SocialsLink href={Bio.github} target="_blank">
            <F.Img src={gitLogo} alt="github" />
          </F.SocialsLink>
          <F.SocialsLink href={Bio.linkedin} target="_blank">
            <F.Img src={linkedinLogo} alt="linkedin" />
          </F.SocialsLink>
          <F.SocialsLink href={`mailto:${Bio.email}`} target="_blank">
            <F.Img src={gmailLogo} alt="email" />
          </F.SocialsLink>
        </F.Links>
      </F.Wrapper>
    </F.Container>
  );
}
