import "./post.css"
import { Link } from "react-router-dom"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://f11.pmo.ee/udsBoITlyKxOaC0CUZjmv2glK50=/1442x0/filters:focal(931x319:1274x662):format(webp)/nginx/o/2024/09/24/16377791t1ha855.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <Link to="/eesti"><span className="postCat">Eesti</span></Link>
            <Link to="/majandus"><span className="postCat">Majandus</span></Link>
        </div>
        <Link to="/post3">
        <div className="postTitle">Suurkliendi kaotanud Nordica pankrotist pääsemine kõigub noateral</div>
        </Link>
        <hr />
        <span className="postDate">8 tundi tagasi</span>
    </div>
    <p className="postDesc">Nordica koostöö SASiga lõppeb juba 1. novembril, seega on megakahjumis lennufirmal aega uute partnerite või investori leidmiseks vaid kuu või paar. Muidu muutub pankroti vältimine väga keeruliseks.
    </p>
    </div>
  )
}

export default Post