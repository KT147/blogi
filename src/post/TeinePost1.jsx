import Header from "../header/header"
import Sidebar from "../sidebar/Sidebar"
import "../post/post1.css"
import { Link } from "react-router-dom"

function Post1() {
  return (
    <div>
        <Header/>
        <div className="post1">
            <div className="post1Title">American Airlines peatas tehnilise probleemi <br />tõttu tunniks kõik oma väljuvad lennud</div>
        <img className="postImg1"
        src="https://f11.pmo.ee/wlc702E2SJKMhiTjIU4RJDZSwqI=/1442x0/filters:format(webp)/nginx/o/2024/12/25/16562921t1h2964.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
        <Link to="/maailm"><span className="postCat">Maailm</span></Link>
        <Link to="/onnetused"><span className="postCat">Õnnetused</span></Link>
        </div>
        <hr />
        <span className="postDate">3 tundi tagasi</span>
    </div>
    <p className="postDesc1-1">USA lennufirma American Airlines peatas teisipäeval tehnilise probleemi tõttu umbes tunniks ajaks üle kogu riigi kõik oma väljuvad lennud.

<p className="postDesc1-2">Föderaalne lennundusamet andis korralduse lendude peatamiseks American Airlinesi palvel, kuna tekkis probleem lennuoperatsioonisüsteemiga (FOS)..</p>

<p className="postDesc1-3">See tekitas viivitusi American Airlinesi kõigis peamistes keskustes. 3901 AA lennust väljus õigeaegselt ainult 37 protsenti, edastas lennundusanalüüsi firma Cirium. Üheksateist lendu tühistati..</p>
    </p>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Post1