import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Education from "./components/Education";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height:100%;
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Nav />
      <Body>
        <Intro />
        <Skills />
        <Education />
      </Body>
    </ThemeProvider>
  );
}

export default App;
