import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Connexion from "./components/Connexion";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
      <Navigation />
      <Switch>

      <Route exact path='/'>
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery}/>
        <Contact data={landingPageData.Contact} />
      </Route>
      

     

      <Route exact path='/connexion'>
      
            <Connexion />
       
      </Route>
       
        </Switch>
    </div>
  );
};

export default App;
