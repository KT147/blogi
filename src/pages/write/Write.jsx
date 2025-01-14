import "./write.css"

function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://baatraining.com/wp-content/uploads/2022/11/aircraft-take-off-speeds.png" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style ={{display:"none"}} />
                <input type="text" placeholder="Pealkiri" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Kirjuta..." type="text" className="writeInput writeText" ></textarea>
            </div>
            <button className="writeSubmit">Avalda</button>
        </form>

    </div>
  )
}

export default Write