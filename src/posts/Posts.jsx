import Post from "../post/Post"
import TeinePost from "../post/TeinePost"
import KolmasPost from "../post/KolmasPost"
import NeljasPost from "../post/NeljasPost"
import ViiesPost from "../post/ViiesPost"
import KuuesPost from "../post/KuuesPost"
import "./posts.css"

function Posts() {
  return (
    <div className="posts">
        <Post/>
        <TeinePost/>
        <KolmasPost/>
        <NeljasPost/>
        <ViiesPost/>
        <KuuesPost/>
    </div>
  )
}

export default Posts