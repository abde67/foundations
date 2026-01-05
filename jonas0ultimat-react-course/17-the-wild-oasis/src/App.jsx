import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const StyeldApp = styled.main`
  background-color: red;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyeldApp>
        <Heading>Welcome to The Wild Oasis</Heading>
      </StyeldApp>
    </>
  );
}



export default App;
