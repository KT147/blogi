import "./header.css"

function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Kevini</span>
            <span className="headerTitleLg">Lennundusblogi</span>
        </div>
        <img className="headerImg" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Antonov_Design_Bureau_Antonov_An-225_Mriya_at_Leipzig_Halle_%28EDDP-LEJ%29.jpg" alt="" />
    </div>
  )
}

export default header