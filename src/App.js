import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      40deg,
      rgba(255, 150, 200, 0.55) 5%,
      rgba(175, 181, 255, 0) 55%
    ),
    linear-gradient(
      140deg,
      rgba(175, 181, 255, 0) 45%,
      rgba(150, 150, 255, 0.55) 95%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 96%, 10% 98%, 0 100%);
`;

function App() {
  const [darkMode, setTheme] = useState(true);
  return (
    <ThemeProvider theme={darkMode? darkTheme : lightTheme}>
      <Router>
        <Nav />
        <Body>
          <About />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
          <Wrapper>
            <Projects />
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;