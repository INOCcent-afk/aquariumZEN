import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import { Nav } from "./Components/core/Nav";
import { Footer } from "./Components/core/Footer";
import HLinfo from "./pages/HLinfo";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/about" exact component={About} />
        <Route path="/hourslocation" exact component={HLinfo} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
