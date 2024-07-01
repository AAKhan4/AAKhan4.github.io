import React from "react";

export default function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc></Desc>
        <SkillsContainer>
          {Skills.map((item) => (
            <Skill>
              <STitle>{item.title}</STitle>
              <SList>
                {item.skills.map((skill) => (
                  <SItem>
                    <SImage src={skill.image} />
                    <SName>{skill.name}</SName>
                  </SItem>
                ))}
              </SList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}
