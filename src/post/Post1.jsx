import Header from "../header/header"
import Sidebar from "../sidebar/Sidebar"
import "../post/post1.css"

function Post1() {
  return (
    <div>
        <Header/>
        <div className="post1">
            <div className="post1Title">Kümne aasta järel algasid taas <br /> otselennud Rooma ja Tripoli vahel</div>
        <img className="postImg1"
        src="https://f9.pmo.ee/n1DwGGTKKyu1hXd879V29ZwH-tQ=/1442x0/filters:format(webp)/nginx/o/2025/01/12/16592156t1h7f9f.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Maailm</span>
            <span className="postCat">Majandus</span>
        </div>
        <hr />
        <span className="postDate">1 tund tagasi</span>
    </div>
    <p className="postDesc1-1">Otselennud Rooma ja Liibüa pealinna Tripoli vahel taastusid pühapäeval pärast 10 aasta pikkust pausi, teatas Itaalia välisministeerium ning viitas ühistele jõupingutustele tugevdada sidemeid oma endise koloniaalvaldusega.

<p className="postDesc1-2">Itaalia lipulaevast lennufirma ITA Airways teatas pühapäeval, et alustas esimest kommertslendu Tripoli Mitiga lennujaama ja Rooma Fiumicino vahel, lendude sagedusega kaks korda nädalas.</p>

<p className="postDesc1-3">Liibüa suurima kaubanduspartneri Itaalia valitsusjuht Giorgia Meloni allkirjastas oktoobris visiidil Tripolisse, kus ta käis peaministrina juba neljandat korda, suuremahulise kokkuleppe, mis hõlmab kahe riigi arenduskoostööd, investeeringuid ja taristu ehitusega seotud projekte.</p>
    </p>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Post1