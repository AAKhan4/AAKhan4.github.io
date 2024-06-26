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
  width: 100%
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;
