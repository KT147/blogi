import Header from "../header/header"
import Sidebar from "../sidebar/Sidebar"
import "../post/post1.css"
import { Link } from "react-router-dom"

function Post1() {
  return (
    <div>
        <Header/>
        <div className="post1">
            <div className="post1Title">Boeingu töötajate streik süvendab <br /> lennukite puudust ja tõstab piletihindu</div>
        <img className="postImg1"
        src="https://f7.pmo.ee/Lxxzoe9l97uIOFewywp0LOYJgOA=/1442x0/filters:format(webp)/nginx/o/2024/09/17/16362990t1h6502.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
        <Link to="/maailm"><span className="postCat">Maailm</span></Link>
        <Link to="/majandus"><span className="postCat">Majandus</span></Link>
        </div>
        <hr />
        <span className="postDate">8 tundi tagasi</span>
    </div>
    <p className="postDesc1-1">Lennundusekspertide hinnangul kergitab streik juba niigi kallinenud lennupiletite hindu veelgi. Lisaks kinnistab see reaktiivlennukite nappust turul, mis sunnib vedajaid vanemaid saastavamaid lennukeid pikemalt käitama.

<p className="postDesc1-2">Lennundushiid Boeing teatas sel nädalal, et seoses reedel 33 000 töötaja alustatud streigiga lõpetatakse ajutiselt uute spetsialistide värbamine ning kaalutakse mitmete töötajate ja juhtide ajutist koondamist. Tüli sai alguse sellest, et ametiühing nõudis 40-protsendilist palgatõusu, ettevõtte vastupakkumine sisaldas aga nelja aasta peale vaid 25-protsendilist tõusu ning sellestki eemaldati iga-aastane tulemustasu.</p>

<p className="postDesc1-3">
Boeingi finantsjuht Brian West hoiatas, et seni, kuni töötajatega kaubale saadud pole, on plaanis teha suuri kärpeid tarnijatega seotud kuludes ning lõpetatakse lennukimudelitele Boeing 737, 767 ja 777 suurema osa uute tellimuste vastuvõtmine.

Iiri liisingufirma Avolon finantsjuhi Ross O’Connori hinnangul on Boeing ülemaailmse lennunduse jaoks elutähtis ettevõte, sest suuri reisilennukeid toodab kogu maailmas arvestatavas mahus vaid kaks ettevõtet. «Streik avaldab mõju Boeingu tootmismahtudele, mis süvendab pakkumise puudujääke turul,» vahendas O’Connori sõnu Reuters.</p>
    </p>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Post1