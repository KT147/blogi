import "./topbar.css"
import { Link } from "react-router-dom"

function TopBar() {
    const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <a href="https://www.facebook.com"><i className="topIcon fa-brands fa-square-facebook"></i></a>
        <a href="https://www.twitter.com"><i className="topIcon fa-brands fa-square-twitter"></i></a>
        <a href="https://www.pinterest.com"><i className="topIcon fa-brands fa-square-pinterest"></i></a>
        <a href="https://www.instagram.com"><i className="topIcon fa-brands fa-square-instagram"></i></a>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to= "/">AVALEHT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to= "/rubriigid">RUBRIIGID</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to= "/">KONTAKT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to= "/write">KIRJUTA</Link>
                </li>
                <li className="topListItem">
                {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img 
            className="topImg"
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                ) :  
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to= "/login">LOGI SISSE</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to= "/register">REGISTREERU</Link>
                    </li>
                    
                </ul>
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}

export default TopBar