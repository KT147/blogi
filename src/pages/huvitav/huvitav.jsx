import Header from "../../header/header"

function huvitav() {
  return (
    <div>
        <Header/>
        
        <br />
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

export default huvitav