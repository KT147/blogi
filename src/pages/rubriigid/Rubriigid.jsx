import Header from "../../header/header"
import "./rubriigid.css"
import { Link } from "react-router-dom"

function Rubriigid() {
  return (
    <div>
       <Header/>
       <div className="rubriigidItem">
          <span className="rubriigidTitle">RUBRIIGID</span>
          <ul className="rubriigidList"><br />
           <Link to="/eesti"><li className="rubriigidListItem">Eesti</li><br /></Link>
            <Link to="/maailm"><li className="rubriigidListItem">Maailm</li><br /></Link>
            <Link to="/majandus"><li className="rubriigidListItem">Majandus</li><br /></Link>
            <Link to="/onnetused"><li className="rubriigidListItem">Õnnetused</li><br /></Link>
            <Link to="/soda"><li className="rubriigidListItem">Sõda</li><br /></Link>
            <Link to="/tehnoloogia"><li className="rubriigidListItem">Tehnoloogia</li><br /></Link>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">JÄLGI MEID</span>
          <div className="sidebarSocial">
         <a href="https://www.facebook.com"><i className="sidebarIcon fa-brands fa-square-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="sidebarIcon fa-brands fa-square-twitter"></i></a>
          <a href="https://www.pinterest.com"><i className="sidebarIcon fa-brands fa-square-pinterest"></i></a>
          <a href="https://www.instagram.com"><i className="sidebarIcon fa-brands fa-square-instagram"></i></a>
          
          </div>
        </div>
        <br /><br /><br /><br />
    </div>
  )
}

export default Rubriigid