import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import { Nav } from "./Components/core/Nav";
import { Footer } from "./Components/core/Footer";
import HLinfo from "./pages/HLinfo";
import About from "./pages/About";
import Services from "./pages/Services";
import Product from "./pages/Product";
import styled from "styled-components";

const BodyContentInner = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1700px;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <>
      <BodyContentInner>
        <Nav />
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
    </>
  );
};

export default App;
