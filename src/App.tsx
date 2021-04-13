import React from "react";
import { Route, Switch, useLocation } from "react-router";
import Home from "./pages/Home";
import { Nav } from "./Components/core/Nav";
import { Footer } from "./Components/core/Footer";
import HLinfo from "./pages/HLinfo";
import About from "./pages/About";
import Services from "./pages/Services";
import Product from "./pages/Product";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Dropdown from "./Components/core/Dropdown";

const App: React.FC = () => {
  const [dropdown, setDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const location = useLocation();

  React.useEffect(() => {
    setDropdown(false);
  }, [location]);

  return (
    <>
      <ThemeProvider
        theme={{
          primaryFontColor: "#000",
          secondaryFontColor: "#c4c4c4",
          foreFontColor: "#363636",
          primaryColor: "#fff",
          secondaryColor: "#000",
        }}
      >
        <GlobalStyle />
        <BodyContentInner>
          <Nav toggleDropdown={toggleDropdown} />
          {dropdown ? <Dropdown /> : null}
          <div className="">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Product} />
              <Route path="/services" exact component={Services} />
              <Route path="/about" exact component={About} />
              <Route path="/hourslocation" exact component={HLinfo} />
            </Switch>
          </div>
          <Footer />
        </BodyContentInner>
      </ThemeProvider>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
 * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body { 
  font-family: sans-serif;
 }

 a { 
  color: #000; 
  text-decoration: none;
 }

 .activeLink {
  color: #000 !important;
 }


`;

const BodyContentInner = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 2000px;
`;
