import "./post.css"

function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://images.saymedia-content.com/.image/t_share/MjAwMTUwMjI4Mzc1NDQ2NjM2/disadvantages-of-travelling-by-plane.jpg" alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus tempore sit quia eveniet aut, cum consectetur, cupiditate nemo, dolores porro? Veritatis non ea ipsam nobis repellat dolorum, esse atque.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus tempore sit quia eveniet aut, cum consectetur, cupiditate nemo, dolores porro? Veritatis non ea ipsam nobis repellat dolorum, esse atque.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus tempore sit quia eveniet aut, cum consectetur, cupiditate nemo, dolores porro? Veritatis non ea ipsam nobis repellat dolorum, esse atque.
    </p>
    </div>
  )
}

export default Post