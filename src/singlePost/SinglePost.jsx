import "./singlePost.css"

function Singlepost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://www.austockphoto.com.au/imgcache/uploads/photos/compressed/sunlight-over-crop-of-sunflowers-helianthus-annuus-austockphoto-000213216.jpg" alt="" className="singlePostImg" />
        </div>
    <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
    </h1>
    <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Nimi</b></span>
        <span className="singlePostDate">1 tund tagasi</span>
    </div>
    <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem tempora deleniti, voluptatum error dolor fugiat deserunt exercitationem laborum. Doloremque debitis error nihil? Dolore sint laudantium quam similique, cupiditate modi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem tempora deleniti, voluptatum error dolor fugiat deserunt exercitationem laborum. Doloremque debitis error nihil? Dolore sint laudantium quam similique, cupiditate modi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem tempora deleniti, voluptatum error dolor fugiat deserunt exercitationem laborum. Doloremque debitis error nihil? Dolore sint laudantium quam similique, cupiditate modi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem tempora deleniti, voluptatum error dolor fugiat deserunt exercitationem laborum. Doloremque debitis error nihil? Dolore sint laudantium quam similique, cupiditate modi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem tempora deleniti, voluptatum error dolor fugiat deserunt exercitationem laborum. Doloremque debitis error nihil? Dolore sint laudantium quam similique, cupiditate modi
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quidem tempora deleniti, voluptatum error dolor fugiat deserunt exercitationem laborum. Doloremque debitis error nihil? Dolore sint laudantium quam similique, cupiditate modi
    </p>
    </div>
  )
}

export default Singlepost