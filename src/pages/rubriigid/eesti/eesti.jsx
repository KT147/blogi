import Header from "../../../header/header"
import KolmasPost from "../../../post/KolmasPost"
import ViiesPost from "../../../post/ViiesPost"
import Sidebar from "../../../sidebar/Sidebar"
import "../../../pages/rubriigid/rubriigid.css"

function eesti() {
  return (
    <div>
        <Header/>
        <div className="rubriigitiitel">EESTI</div>
        <div className="posts">
        <KolmasPost/>
        <ViiesPost/>
        <Sidebar/>
        </div>
    </div>
  )
}

export default eesti