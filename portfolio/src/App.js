import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height:100%;
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body></Body>
    </ThemeProvider>
  );
}

export default App;
