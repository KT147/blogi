import Header from "../header/header"
import Sidebar from "../sidebar/Sidebar"
import "../post/post1.css"

function Post1() {
  return (
    <div>
        <Header/>
        <div className="post1">
            <div className="post1Title">Reisihimu ei rauge: Tallinna <br /> lennujaam tegi juulis reisijate rekordi</div>
        <img className="postImg1"
        src="https://f10.pmo.ee/ySvARHZg63NVDV9_6hn3bBk9a5w=/1442x0/filters:focal(1342x643:3407x2426):format(webp)/nginx/o/2024/06/04/16122066t1h27ac.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Eesti</span>
            <span className="postCat">Majandus</span>
        </div>
        <hr />
        <span className="postDate">2 päeva tagasi</span>
    </div>
    <p className="postDesc1-1">Juulis teenindas Tallinna lennujaam 343 500 reisijat, millega purustati senine rekord ja juulist sai läbi aegade suurima reisijate arvuga kuu. Keskmiselt läbis lennujaama enam kui 11 000 reisijat päevas.

<p className="postDesc1-2">LSenine rekord, 333 233 reisijat, pärines selle aasta maist. «Juulikuu kõrget reisijate arvu mõjutas puhkuste periood ja müügis olnud lennupiletite arv kasvas aastatagusega võrreldes viiendiku võrra. Reisijate arvu kasv oli sellest veelgi kiirem, küündides 24 protsendini,» ütles AS Tallinna Lennujaama juhatuse liige Eero Pärgmäe.

Kõige enam lennati otselendudega Stockholmi, Riiga ja Helsingisse. Tšarterlendudega lennati kõige enam Türgi, Kreeka ja Montenegro kuurortidesse. Regulaarliine oli juulis kokku 38, koos tšarterlendudega sai Tallinnast lennata 44 otselennu sihtkohta. Tallinna lennujaama suurimad lennufirmad olid Airbaltic 30%, Ryanair 22% ja Lufthansa 11-protsendise turuosaga kõigist reisijatest.</p>

<p className="postDesc1-3">
Lennuoperatsioonide arv kasvas võrreldes mullusega 16 protsenti. Kokku toimus juulis Tallinna lennujaamas 4030 lennuoperatsiooni, millest 2922 olid regulaarlennud.

Pärgmäe sõnul on 2024. aasta esimese seitsme kuu reisijate arvud suurepärased. «Nõudlus püsib hetkel tugev ja loodame, et eestimaalased pikendavad suve, lennates sügisel Euroopasse. Peagi saab Põhja-Itaalia restoranides nautida sügishooaja hõrgutisi ja Vahemere sihtkohtade mahedat suvesooja, Pariisis on pärast olümpiamöllu rahulikum ja kel puhkusepäevi napib, siis saab värskendust tuua kiire lennuga Stockholmi, sest mõnel päeval on sinna lausa kaheksa lendu päevas. Pered, kes pole suvel jõudnud Billundi Legolandi lustima, siis oktoobri lõpuni on veel aega,» rääkis Pärgmäe.

Regionaalseid lennujaamasid läbis juulis 8546 reisijat: Kuressaare lennujaama 4136, Tartu lennujaama 2197 (sh Tartu-Helsingi regulaarliini 2021) reisijat, Kärdla lennujaama 2134 ja Pärnu lennujaama 65 reisijat. Ruhnu lennuväljal teenindati 14 reisijat..</p>
    </p>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Post1