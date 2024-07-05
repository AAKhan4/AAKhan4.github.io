import styled from "styled-components";

export const IntroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 60px 30px;
  @media screen and (max-width: 1100px) {
    padding: 0px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 0px 16px;
  }
  z-index: 1;
  clip-path: polygon(0, 100%, 0, 100%, 100%, 70%, 95%, 0, 100%);
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 40%;
  order: 1;
  @media screen and (max-width: 1100px) {
    margin-bottom: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  order: 2;
  margin-left: 50px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12px;
  @media (max-width: 1100px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 1100px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;
  @media screen and (max-width: 1100px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + 90};
  line-height: 32px;
  margin-bottom: 42px;
  @media screen and (max-width: 1100px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  cursor: poiner;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(244, 100%, 84%, 1);
  background: linear-gradient(
    225deg,
    hsla(244, 100%, 84%, 1) 0%,
    hsla(226, 100%, 64%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(244, 100%, 84%, 1) 0%,
    hsla(226, 100%, 64%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(244, 100%, 84%, 1) 0%,
    hsla(226, 100%, 64%, 1) 100%
  );
  box-shadow: -5px 5px 15px ${({ theme }) => theme.black + 80};
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
    margin: 0 auto;
  }
  &:hover {
    transform: scale(1.01);
    filter: brightness(1);
    transition: all 0.2s ease-in-out;
    box-shadow: -5px 5px 20px ${({ theme }) => theme.primary};
  }
`;

export const Image = styled.img`
  position: relative;
  width: 400px;
  height: 533px;
  margin-bottom: 20%;
  gap: 0 12px;
  cursor: pointer;
  border-radius: 40px;
  @media (max-width: 768px) {
    max-width: 250px;
    max-height: 333px;
  }
  @media (max-width: 640px) {
    max-width: 200px;
    max-height: 267px;
  }
  &:hover {
    mask-image: none;
    -webkit-mask-image: none;
    box-shadow: 0px 0px 40px ${({ theme }) => theme.primary+99};
    opacity: 0.95;
  }
  -webkit-mask-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(225deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(315deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%);
  mask-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(225deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%),
    linear-gradient(315deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%);
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
`;
