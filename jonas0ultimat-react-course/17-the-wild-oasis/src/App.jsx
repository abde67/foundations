import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyeldApp = styled.main`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyeldApp>
        <Row />
        <Heading as="h2">Welcome to The Wild Oasis</Heading>
        <Heading as="h1">Welcome to The Wild Oasis</Heading>
        <Heading as="h3">Welcome to The Wild Oasis</Heading>
      </StyeldApp>
    </>
  );
}

export default App;
