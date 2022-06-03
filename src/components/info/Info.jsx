import "./info.scss"

export default function Info() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];



    return (
        <div className="info" id="info">
            <div className="left">
                <div className="wrapper">

                    <h2>I hope you have a lovely <span>{n}.</span> </h2>
                    
                    <p> My name's Erik and I love building things with software. </p>

                    <p><span> I strive for excellence in everything that I do - while 
                        aiming to be humble and learning from my bad ideas and mistakes. 
                        I'm passionate about what I'm doing, and I'd love to
                        learn from the best.  </span></p>

                    <p>These are some technologies I enjoy using:</p>

                    <ul>
                        <li> C and C++ </li>
                        <li> Arduino, ESP32 </li>
                        <li> Python </li>
                        <li> SQL </li>
                        <li> gRPC </li>

                        <li> PyTorch </li>
                        <li> React </li>
                        <li> HTML/CSS/JS</li>
                        <li> AWS, Azure </li>
                        <li> Git </li>

                    </ul>


                </div>
            </div>
            <div className="right">
                    <div className="card">
                    <div className="card-content">

                        <h2 className="card-title">My dev blog</h2>
                        <p className="card-body">
                            Here I share my thoughts on various
                            topics that interest me.
                    </p>
                        <a href="https://dev.to/erikkarlsson" className="button" target="blank">Check it out</a>
                    </div>
                </div>

               
            </div>
           
        </div>
    )
}
