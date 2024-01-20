import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import styled from 'styled-components';
import Footer from './Components/Footer';

function App() {
  return (
    <ContainerMain className="app">
      <Header />
      <Navbar />
      <Footer />
    </ContainerMain>
  );
}

export default App;

const ContainerMain = styled.div`
  background-color: white;
  overflow: hidden;
  margin: none;
  padding: none;
`;
