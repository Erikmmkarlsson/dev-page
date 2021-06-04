import "./intro.scss"
import {ExpandMore} from "@material-ui/icons"
import { init } from 'ityped'
import {useEffect, useRef} from "react"
export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1000,
            backSpeed: 20,
             strings: ['Computer Engineer.', 'Fullstack Developer.',
              'IoT Enthusiast.' ] 
            });
        return () => {
            
        }
    }, [])
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
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#info">
                <ExpandMore style={{ fontSize: 70 }}/>
                </a>
            </div>
        </div>
    )
}
