import Single from "./pages/single/Single";
import TopBar from "./topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home"
import Post1 from "./post/Post1";
import Post2 from "./post/TeinePost1";
import Post3 from "./post/KolmasPost1"
import Post4 from "./post/NeljasPost1"
import Post5 from "./post/ViiesPost1"
import Post6 from "./post/KuuesPost1"
import ScrollToTop from "./ScrollToTop"
import Rubriigid from "./pages/rubriigid/Rubriigid";
import Eesti from "./pages/rubriigid/eesti/eesti";
import Maailm from "./pages/rubriigid/maailm/maailm";
import Majandus from "./pages/rubriigid/majandus/majandus"
import Onnetused from "./pages/rubriigid/onnetused/onnetused"
import Soda from "./pages/rubriigid/soda/soda";
import Tehnoloogia from "./pages/rubriigid/tehnoloogia/tehnoloogia";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login/>} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/post1" element={<Post1/>}/>
        <Route path="/post2" element={<Post2/>}/>
        <Route path="/post3" element={<Post3/>}/>
        <Route path="/post4" element={<Post4/>}/>
        <Route path="/post5" element={<Post5/>}/>
        <Route path="/post6" element={<Post6/>}/>
        <Route path="/rubriigid" element={<Rubriigid/>}/>
        <Route path="/eesti" element={<Eesti/>}/>
        <Route path="/maailm" element={<Maailm/>}/>
        <Route path="/majandus" element={<Majandus/>}/>
        <Route path="/onnetused" element={<Onnetused/>}/>
        <Route path="/soda" element={<Soda/>}/>
        <Route path="/tehnoloogia" element={<Tehnoloogia/>}/>
      </Routes>
    </Router>
  );
}

export default App
