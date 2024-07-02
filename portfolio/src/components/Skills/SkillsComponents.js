import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
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

export const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

export const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 18px 36px;
  box-shadow: -10px 10px 20px ${({ theme }) => theme.card_light};
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 480px) {
    width: 300px;
    padding: 10px 36px;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    border-radius: 24px;
    border: 2px solid ${({ theme }) => theme.text_primary};
    box-shadow: -10px 10px 15px ${({ theme }) => theme.primary+30};
  }
`;

export const STitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const SList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SItem = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.card_light};
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary+80};
  border-radius: 12px;
  border: 1px solid ${({theme}) => theme.primary+99};
  padding: 12px 16px;
  font-weight: 400;
  box-shadow: -4px 4px 15px ${({ theme }) => theme.black};
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 8px;
  }
  &:hover {
    transition: all 0.3s ease-in-out;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.text_primary};
    color: ${({ theme }) => theme.text_primary};
    box-shadow: -4px 4px 10px ${({ theme }) => theme.text_primary+40};
  }
`;

export const SImage = styled.img`
  width: 26px;
  height: 26px;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;