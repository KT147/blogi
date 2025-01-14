import "./post.css"
import { Link } from "react-router-dom"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://f11.pmo.ee/H-MjEaCL5_I0Wb-dvA1effYI2F4=/1442x0/filters:focal(0x0:0x0):format(webp)/nginx/o/2024/09/23/16374322t1hc851.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Maailm</span>
            <span className="postCat">Sõda</span>
        </div>
        <Link to="/post6">
        <div className="postTitle">WSJ: Elektrooniline sõjapidamine hirmutab lennufirmasid ja piloote</div>
        </Link>
        <hr />
        <span className="postDate">5 päeva tagasi</span>
    </div>
    <p className="postDesc">Kui American Airlinesi reisilennuk Boeing 777 tänavu märtsis Pakistani kohal lendas, hakkas kabiinis plärisema häirekell, et tõuse kohe kõrgemale – pull up! Kapten Dan Carey taipas jalamaid, et seadmed valetavad, kuna kõrgust oli ligi 10 kilomeetrit ja maapind kaugel all.
    </p>
    </div>
  )
}

export default Post