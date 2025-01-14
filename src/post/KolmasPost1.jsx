import Header from "../header/header"
import Sidebar from "../sidebar/Sidebar"
import "../post/post1.css"
import { Link } from "react-router-dom"

function Post1() {
  return (
    <div>
        <Header/>
        <div className="post1">
            <div className="post1Title">Suurkliendi kaotanud Nordica <br /> pankrotist pääsemine kõigub noateral</div>
        <img className="postImg1"
        src="https://f11.pmo.ee/udsBoITlyKxOaC0CUZjmv2glK50=/1442x0/filters:focal(931x319:1274x662):format(webp)/nginx/o/2024/09/24/16377791t1ha855.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
        <Link to="/eesti"><span className="postCat">Eesti</span></Link>
        <Link to="/majandus"><span className="postCat">Majandus</span></Link>
        </div>
        <hr />
        <span className="postDate">8 tundi tagasi</span>
    </div>
    <p className="postDesc1-1">Nordica koostöö SASiga lõppeb juba 1. novembril, seega on megakahjumis lennufirmal aega uute partnerite või investori leidmiseks vaid kuu või paar. Muidu muutub pankroti vältimine väga keeruliseks.

<p className="postDesc1-2">Nordica juhatuse esimehe Remco Althuisi sõnul tehakse praegu suuri jõupingutusi leidmaks lennukitele novembriks nii palju uusi kliente kui võimalik. Lisaks SASile teenust osutavatele lennukitele osutab praegu üks Nordica lennuk teenuseid Vietnami odavlennufirmale Bamboo Airways. «Samuti oleme ühe lennuki jaoks sõlminud hiljuti lepingu Põhjamaade suurima lennufirmaga Widerøe.»</p>

<p className="postDesc1-3">
Althuis möönis, et praegu on tööta 10 lennukit. «Samas käivad juba läbirääkimised mitme võimaliku kliendiga ja loodame vähemalt pooltele lennukitele tööd leida. Arvestades lennunduse hooajalisust, on tõenäoline, et uued partnerid leitakse väljastpoolt Euroopat, kus põhihooaeg alles algab.».</p>
    </p>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Post1