import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary+80};
  box-shadow: -5px 5px 15px ${({ theme }) => theme.card};
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 1100px) {
    padding: 10px;
    gap: 8px;
    width: 900px;
  }
  @media (max-width: 1000px) {
    padding: 10px;
    gap: 8px;
    width: 800px;
  }
  @media (max-width: 900px) {
    padding: 10px;
    gap: 8px;
    width: 700px;
  }
  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 550px;
  }
  @media (max-width: 600px) {
    padding: 10px;
    gap: 8px;
    width: 600px;
  }
  &:hover{
    transform: translateY(1px);
    box-shadow: -5px 5px 10px ${({ theme }) => theme.primary+99};
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  flex-direction: column;
`;

export const Institution = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Degree = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: -10px;
  margin-left: 8px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: -10px;
  margin-left: 8px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Grades = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-left: 8px;
  margin-top: -10px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Desc = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  margin-left: 8px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;