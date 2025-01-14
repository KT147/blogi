import "./sidebar.css"
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">MEIST</span>
          <img className="sidebarPic" src="https://images.stockcake.com/public/d/a/0/da04411f-fa6f-43c4-8b52-de8a6c071137_large/sunset-flight-view-stockcake.jpg" alt="" />
          <p>&quot;Kui kord oled maitsnud lendamise rõõmu, siis kõnnid sa maa peal igavesti, silmad taevasse suunatud, sest seal oled sa käinud ja sinna ihaldad sa alati tagasi minna.&quot;

— Leonardo da Vinci </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">RUBRIIGID</span>
          <ul className="sidebarList">
            <Link to="/eesti"><li className="sidebarListItem">Eesti</li></Link>
            <Link to="/maailm"><li className="sidebarListItem">Maailm</li></Link>
            <Link to="/majandus"><li className="sidebarListItem">Majandus</li></Link>
            <Link to="/onnetused"><li className="sidebarListItem">Õnnetused</li></Link>
            <Link to="/soda"><li className="sidebarListItem">Sõda</li></Link>
            <Link to ="/tehnoloogia"><li className="sidebarListItem">Tehnoloogia</li></Link>
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
        
    </div>
  )
}

export default Sidebar