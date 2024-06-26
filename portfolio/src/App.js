import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Nav from "./components/Nav";
import Intro from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(255, 150, 200, 0.15) 0%,
      rgba(175, 181, 255, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(175, 181, 255, 0) 50%,
      rgba(150, 150, 255, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 95%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Nav />
        <Body>
          <Intro />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
