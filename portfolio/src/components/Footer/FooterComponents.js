import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 24px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.card_light},
    40%,
    ${({ theme }) => theme.card}
  );
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 12px;
`;

export const Name = styled.a`
  margin-top: 40px;
  align-self: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Divider = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.text_primary};
`;

export const SocialsLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  margin-left: 15px;
  color: ${({ theme }) => theme.primary};
  border-radius: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 640px) {
      font-size: 0.8rem;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  justify-content: center;
`;
