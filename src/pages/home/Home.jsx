import Header from "../../header/header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"

function Home() {
  return (<>
   <Header/>
    <div className="home">
        <Posts/>
        <Sidebar/>
    </div>
    </>
  )
}

export default Home