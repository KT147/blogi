import "./post.css"
import { Link } from "react-router-dom"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://f10.pmo.ee/ySvARHZg63NVDV9_6hn3bBk9a5w=/1442x0/filters:focal(1342x643:3407x2426):format(webp)/nginx/o/2024/06/04/16122066t1h27ac.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Eesti</span>
            <span className="postCat">Majandus</span>
        </div>
        <Link to="/post5">
        <div className="postTitle">Reisihimu ei rauge: Tallinna lennujaam tegi juulis reisijate rekordi</div>
        </Link>
        <hr />
        <span className="postDate">2 päeva tagasi</span>
    </div>
    <p className="postDesc">Juulis teenindas Tallinna lennujaam 343 500 reisijat, millega purustati senine rekord ja juulist sai läbi aegade suurima reisijate arvuga kuu. Keskmiselt läbis lennujaama enam kui 11 000 reisijat päevas.
    </p>
    </div>
  )
}

export default Post