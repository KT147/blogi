import Header from "../../../header/header"
import Post1 from "../../../post/Post"
import Post2 from "../../../post/TeinePost"
import Post4 from "../../../post/NeljasPost"
import Post6 from "../../../post/KuuesPost"
import Sidebar from "../../../sidebar/Sidebar"

function maailm() {
  return (
    <div>
        <Header/>
        <div className="rubriigitiitel">MAAILM</div>
        <div className="posts">
        <Post1/>
        <Post2/>
        </div>
       <div className="posts"> <Post4/>
        <Post6/>
        <Sidebar/>
        </div>
      
        
    </div>
  )
}

export default maailm