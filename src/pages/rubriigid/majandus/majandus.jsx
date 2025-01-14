import Header from "../../../header/header"
import Post1 from "../../../post/Post"
import Post3 from "../../../post/KolmasPost"
import Post4 from "../../../post/NeljasPost"
import Post5 from "../../../post/ViiesPost"
import Sidebar from "../../../sidebar/Sidebar"

function majandus() {
  return (
    <div>
        <Header/>
        <div className="rubriigitiitel">MAJANDUS</div>
        <Post1/>
        <Post3/>
        <Post4/>
        <Post5/>
        <Sidebar/>
    </div>
  )
}

export default majandus