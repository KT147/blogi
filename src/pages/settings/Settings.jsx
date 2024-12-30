import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile picture</label>
                <div className="settingsPP">
                    <img src="https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style ={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Nimi" />
                <label>Email</label>
                <input type="email" placeholder="Nimi@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings