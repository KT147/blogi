import "./login.css"
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Logi sisse</span>
        <form className="loginForm">
            <label>E-mail</label>
            <input type="text" className="loginInput" placeholder="Sisesta e-mail..."/>
            <label>Parool</label>
            <input type="password" className="loginInput" placeholder="Sisesta parool..."/>
            <button className="loginButton">Logi sisse</button>
        </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">REGISTREERU</Link>
        </button>
    </div>
  )
}

export default Login
