import styled from "styled-components";

export const IntroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0, 100%, 0, 100%, 100%, 70%, 95%, 0, 100%);
`;

export const Bg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 33px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
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
  @media screen and (max-width: 960px) {
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
  @media screen and (max-width: 960px) {
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
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color:${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(244, 100%, 84%, 1);
  background: linear-gradient(225deg, hsla(244, 100%, 84%, 1) 0%, hsla(226, 100%, 64%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(244, 100%, 84%, 1) 0%, hsla(226, 100%, 64%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(244, 100%, 84%, 1) 0%, hsla(226, 100%, 64%, 1) 100%);
  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  &:hover {
    transform: scale(1.01);
    filter: brightness(1);
    transition: all 0.2s ease-in-out;
    box-shadow: -5px 5px 15px ${({ theme }) => theme.primary+50};
  }
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.primary};
  filter: brightness(0.95);
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
  &:hover {
    transform: scale(1.01);
    filter: brightness(1);
    transition: all 0.2s ease-in-out;
    box-shadow: -5px 5px 15px ${({ theme }) => theme.primary+50};
  }
`;
