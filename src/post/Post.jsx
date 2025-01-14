import "./post.css"
import { Link } from "react-router-dom"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://f9.pmo.ee/n1DwGGTKKyu1hXd879V29ZwH-tQ=/1442x0/filters:format(webp)/nginx/o/2025/01/12/16592156t1h7f9f.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <Link to="/maailm"><span className="postCat">Maailm</span></Link>
            <Link to="/majandus"><span className="postCat">Majandus</span></Link>
        </div>
        <Link to="/post1">
        <div className="postTitle">Kümne aasta järel algasid taas <br /> otselennud Rooma ja Tripoli vahel </div>
        </Link>
        <hr />
        <span className="postDate">1 tund tagasi</span>
    </div>
    <p className="postDesc">Otselennud Rooma ja Liibüa pealinna Tripoli vahel taastusid pühapäeval pärast 10 aasta pikkust pausi, teatas Itaalia välisministeerium ning viitas ühistele jõupingutustele tugevdada sidemeid oma endise koloniaalvaldusega.Itaalia lipulaevast lennufirma ITA Airways teatas pühapäeval, et alustas esimest kommertslendu Tripoli Mitiga lennujaama ja Rooma Fiumicino vahel, lendude sagedusega kaks korda nädalas
    </p>
    </div>
  )
}

export default Post