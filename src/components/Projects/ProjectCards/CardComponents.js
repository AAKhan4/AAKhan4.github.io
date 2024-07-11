import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 500px;
  background-color: ${({ theme }) => theme.card+90};
  border-radius: 20px;
  box-shadow: -5px 5px 20px ${({ theme }) => theme.black+80};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border:2px solid ${({ theme }) => theme.primary+50};
  &:hover {
    transform: scale(1.01);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.card};
    box-shadow: -5px 5px 15px ${({ theme }) => theme.primary + 99};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.card_light};
  border-radius: 10px;
  object-fit: cover;
  box-shadow: -5px 5px 5px ${({ theme }) => theme.card_light};
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
  background-color: ${({ theme }) => theme.primary + 30};
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
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 100%;
  display: -webkit-box;
  margin-top: 4px;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

export const GithubButton = styled.a`
  text-decoration: none;
  opacity: 0.9;
  background-color: transparent;
  margin-top: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  padding: 0px 10px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 140px;
  transition: background 0.3s ease-in-out,
    color 0.4s ease-in-out;
  :hover {
      color: ${({ theme }) => theme.text_primary};
      background-color: ${({ theme }) => theme.primary}};
  }
  @media screen and (max-width: 640px) {
      font-size: 0.8rem;
  }
`;
