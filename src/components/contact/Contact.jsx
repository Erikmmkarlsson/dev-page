import "./contact.scss"
import {GitHub, LinkedIn} from "@material-ui/icons"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            
            <div className="wrapper">

            <h1>Get in touch.</h1>
            <div className="buttonContainer">

            <a href="mailto:erik.karlsson97@outlook.com" className="button">Say hi</a>

            
            <a href="https://github.com/Erikmmkarlsson" target="_blank" rel="noreferrer">
                    <GitHub className="icon"/>
            </a>
                <a href="https://www.linkedin.com/in/erik-karlsson-8643a1143/" target="_blank" rel="noreferrer">
                    <LinkedIn className="icon"/> 
            </a>
            </div>

            </div>
        </div>
    )
}
