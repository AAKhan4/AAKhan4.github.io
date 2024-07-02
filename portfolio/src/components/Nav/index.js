import React from "react";
import * as Navbar from "./NavComponents";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/Info";

export default function NavigationBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Navbar.Nav>
      <Navbar.NavContainer>
        <Navbar.NavLogo to="/">
          <div
            style={{
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Navbar.HomeIcon />
            <Navbar.Span>{Bio.name}</Navbar.Span>
          </div>
        </Navbar.NavLogo>
        <Navbar.MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </Navbar.MobileIcon>
        <Navbar.NavItems>
          <Navbar.NavLink href="about">About</Navbar.NavLink>
          <Navbar.NavLink href="skills">Skills</Navbar.NavLink>
          <Navbar.NavLink href="education">Education</Navbar.NavLink>
          <Navbar.NavLink href="projects">Projects</Navbar.NavLink>
          <Navbar.NavLink href="contact">Contact</Navbar.NavLink>
        </Navbar.NavItems>
        <Navbar.ButtonContainer>
          <Navbar.GithubButton
            href="https://github.com/AAKhan4"
            target="_Blank"
          >
            GitHub
          </Navbar.GithubButton>
        </Navbar.ButtonContainer>
      </Navbar.NavContainer>
      {open && (
        <Navbar.MobileMenu open={open}>
          <Navbar.MobileMenuLink
            href="about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </Navbar.MobileMenuLink>
          <Navbar.MobileMenuLink
            href="skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Skills
          </Navbar.MobileMenuLink>
          <Navbar.MobileMenuLink
            href="education"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Education
          </Navbar.MobileMenuLink>
          <Navbar.MobileMenuLink
            href="projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </Navbar.MobileMenuLink>
          <Navbar.MobileMenuLink
            href="contact"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Contact
          </Navbar.MobileMenuLink>
          <Navbar.GithubButton
            href="https://github.com/AAKhan4"
            target="_Blank"
            style={{ display: "block", maxWidth: "105px", fontSize: "1.1rem" }}
          >
            Github
          </Navbar.GithubButton>
        </Navbar.MobileMenu>
      )}
    </Navbar.Nav>
  );
}
