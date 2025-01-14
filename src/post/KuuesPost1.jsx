import Header from "../header/header"
import Sidebar from "../sidebar/Sidebar"
import "../post/post1.css"

function Post1() {
    
  return (
    <div>
        <Header/>
        <div className="post1">
            <div className="post1Title">WSJ: Elektrooniline sõjapidamine <br /> hirmutab lennufirmasid ja piloote</div>
        <img className="postImg1"
        src="https://f11.pmo.ee/H-MjEaCL5_I0Wb-dvA1effYI2F4=/1442x0/filters:focal(0x0:0x0):format(webp)/nginx/o/2024/09/23/16374322t1hc851.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Maailm</span>
            <span className="postCat">Sõda</span>
        </div>
        <hr />
        <span className="postDate">5 päeva tagasi</span>
    </div>
    <p className="postDesc1-1">Kui American Airlinesi reisilennuk Boeing 777 tänavu märtsis Pakistani kohal lendas, hakkas kabiinis plärisema häirekell, et tõuse kohe kõrgemale – pull up! Kapten Dan Carey taipas jalamaid, et seadmed valetavad, kuna kõrgust oli ligi 10 kilomeetrit ja maapind kaugel all.

<p className="postDesc1-2">Hoiatuse põhjustas elektroonilise võitluse element, millega sajad tsiviilpiloodid iga päev kokku puutuvad: GPS-signaalide segamine. Nii et tegemist oli valehäirega, kuid samas kujuka näitega sellest, kuidas libasignaalid, millega armeed droone ja rakette eemale tõrjuvad, nüüd ka üha enam kommertslennukitesse tungivad.</p>

<p className="postDesc1-3">
«See tegi murelikuks, aga eriti ei ehmatanud, kuna me olime reisikõrgusel,» ütles Carey. Kui aga samal ajal mootoririke või mõni teine hädaolukord oleks tekkinud, võinuks tekkida äärmiselt ohtlik olukord.</p>
    </p>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Post1