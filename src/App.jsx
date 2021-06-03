import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Info from "./components/info/Info"
import Work from "./components/work/Work"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";

function App() {//false
  const [menuOpen, setMenuOpen] = useState(false);
  
  console.log("Hey there developer. I hope you enjoy my page ;) //Erik");
  return (
    <>
      <div className="app"> 
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections"  onClick={()=>setMenuOpen(false)}>
          <Intro/>
          <Info/>
          <Work/>
          <Testimonials/>
          <Contact/>

        </div>

      </div>
    </>
  );
}

export default App;
