import "./topbar.css"
import { Link } from "react-router-dom"

function TopBar() {
    const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to= "/">HOME</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to= "/">ABOUT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to= "/">CONTACT</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to= "/write">WRITE</Link>
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
                        <Link className="link" to= "/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to= "/register">REGISTER</Link>
                    </li>
                    
                </ul>
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}

export default TopBar