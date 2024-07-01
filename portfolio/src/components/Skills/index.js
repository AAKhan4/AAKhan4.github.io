import React from "react";
import { Skills } from "../../data/Info";
import * as S from "./SkillsComponents";

export default function SkillsComp() {
  return (
    <S.Container id="skills">
      <S.Wrapper>
        <S.Title>Skills</S.Title>
        <S.Desc>List of Skills I have worked on.</S.Desc>
        <S.SkillsContainer>
          {Skills.map((item) => (
            <S.Skill>
              <S.STitle>{item.title}</S.STitle>
              <S.SList>
                {item.skills.map((skill) => (
                  <S.SItem>
                    <S.SImage src={skill.image} />
                    {skill.name}
                  </S.SItem>
                ))}
              </S.SList>
            </S.Skill>
          ))}
        </S.SkillsContainer>
      </S.Wrapper>
    </S.Container>
  );
}
