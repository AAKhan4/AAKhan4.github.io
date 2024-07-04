import styled from "styled-components";

export const Nav = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.card},
    80%,
    ${({ theme }) => theme.card_light}
  );
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1400px;
`;

export const NavLogo = styled.a`
  color: ${({ theme }) => theme.text_primary};
  padding: 0 6px;
  width: 40%;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 4px;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const NavItems = styled.ul`
  margin-left: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const GithubButton = styled.a`
  text-decoration: none;
  background-color: transparent;
  margin-left: 15px;
  color: ${({ theme }) => theme.primary};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
      transform: scale(1.1);
  }
  @media screen and (max-width: 1000px) {
      margin-left: 0;
  }
`;

export const LinkedInButton = styled.a`
  text-decoration: none;
  background-color: transparent;
  margin-left: 15px;
  color: ${({ theme }) => theme.primary};
  
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
      transform: scale(1.1);
  }
  @media screen and (max-width: 1000px) {
      margin-left: 0;
  }
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
  justify-content: center;
`;

export const Name = styled.div`
  padding: 0 15px;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;

export const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &:active {
    color: ${({ theme }) => theme.primary};
  }
`;
