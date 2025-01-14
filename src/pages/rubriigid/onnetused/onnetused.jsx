import Header from "../../../header/header"
import Post2 from "../../../post/TeinePost"
import Sidebar from "../../../sidebar/Sidebar"

function onnetused() {
  return (
    <div>
        <Header/>
        <div className="rubriigitiitel">ÕNNETUSED</div>
        <Post2/>
        <Sidebar/>
    </div>
  )
}

export default onnetused