import "./topbar.scss"
import {Mail, GitHub, LinkedIn} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        karlsson.
                        </a>                

                    <div className="itemContainer">
                        <a href="mailto:erik.karlsson97@outlook.com"> <Mail className="icon"/></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/Erikmmkarlsson" target="_blank" rel="noreferrer">
                            <GitHub className="icon"/>
                        </a>
                    </div>
                    <div className="itemContainer">
                      <a href="https://www.linkedin.com/in/erik-karlsson-8643a1143/" target="_blank" rel="noreferrer">
                            <LinkedIn className="icon"/> 
                          </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
