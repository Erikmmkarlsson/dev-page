import "./intro.scss"
import {ExpandMore} from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left"> 
            <div className="colorBox"></div>
            <div className="imgContainer">
                <img src="assets\DSC_0684.jpg" alt="" />
            </div>
            </div>

            <div className="right"> 
                <div className="wrapper">
                    <h2>Hiya! I'm</h2>
                    <h1>Erik Karlsson</h1>
                    <h3><span>Computer Engineer </span></h3>
                </div>
                <a href="#portfolio">
                <ExpandMore style={{ fontSize: 70 }}/>
                </a>
            </div>
        </div>
    )
}
