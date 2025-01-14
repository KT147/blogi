import "./post.css"
import { Link } from "react-router-dom"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://f11.pmo.ee/wlc702E2SJKMhiTjIU4RJDZSwqI=/1442x0/filters:format(webp)/nginx/o/2024/12/25/16562921t1h2964.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <Link to="/maailm"><span className="postCat">Maailm</span></Link>
            <Link to="/onnetused"><span className="postCat">Õnnetused</span></Link>
        </div>
        <Link to="/post2">
        <div className="postTitle">American Airlines peatas tehnilise probleemi tõttu tunniks kõik oma väljuvad lennud </div>
        </Link>
        <hr />
        <span className="postDate">3 tundi tagasi</span>
    </div>
    <p className="postDesc">USA lennufirma American Airlines peatas teisipäeval tehnilise probleemi tõttu umbes tunniks ajaks üle kogu riigi kõik oma...
    </p>
    </div>
  )
}

export default Post