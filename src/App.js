import Menu from "./Menu";
import Banner from "./Banner";
import About from "./About";
import Video from "./Video";
import Service from "./Service";
import Team from "./Team";
import Project from "./Project";
import TeamTwo from "./TeamTwo";
import Contact from "./Contact";
import Footer from "./Footer";




const App = () => {
  return (
   <div className="page">
     <Menu />
     <Banner />
     <About />
     <Video />
     <Service />
     <Team />
     <Project />
     <TeamTwo />
     <Contact />
     <Footer />
   </div>
  );
}

export default App;