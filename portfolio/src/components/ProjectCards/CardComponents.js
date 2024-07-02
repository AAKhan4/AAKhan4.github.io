import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 500px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: -5px 5px 20px ${({ theme }) => theme.black};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  &:hover {
    transform: translateY(1px);
    box-shadow: -5px 5px 15px ${({ theme }) => theme.primary+30};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: -5px 5px 15px ${({ theme }) => theme.black};
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary+25};
  padding: 2px 6px;
  border-radius: 8px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: -10px;
`;

export const SubTitle = styled.div`
    font-size: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    padding: 0px 4px;
`;

export const Details = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

export const Members = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;