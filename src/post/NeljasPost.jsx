import "./post.css"
import { Link } from "react-router-dom"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://f7.pmo.ee/Lxxzoe9l97uIOFewywp0LOYJgOA=/1442x0/filters:format(webp)/nginx/o/2024/09/17/16362990t1h6502.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Maailm</span>
            <span className="postCat">Majandus</span>
        </div>
        <Link to="/post4">
        <div className="postTitle">Boeingu töötajate streik süvendab lennukite puudust ja tõstab piletihindu</div>
        </Link>
        <hr />
        <span className="postDate">1 päev tagasi</span>
    </div>
    <p className="postDesc">Lennundusekspertide hinnangul kergitab streik juba niigi kallinenud lennupiletite hindu veelgi. Lisaks kinnistab see reaktiivlennukite nappust turul, mis sunnib vedajaid vanemaid saastavamaid lennukeid pikemalt käitama.

Lennundushiid Boeing teatas sel nädalal, et seoses reedel 33 000 töötaja alustatud streigiga lõpetatakse ajutiselt uute spetsialistide värbamine ning kaalutakse mitmete töötajate ja juhtide ajutist koondamist. Tüli sai alguse sellest, et ametiühing nõudis 40-protsendilist palgatõusu, ettevõtte vastupakkumine sisaldas aga nelja aasta peale vaid 25-protsendilist tõusu ning sellestki eemaldati iga-aastane tulemustasu.
    </p>
    </div>
  )
}

export default Post