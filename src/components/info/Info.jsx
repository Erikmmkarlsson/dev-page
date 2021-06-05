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

                    <h2>I hope you have a lovely <span>{n}. </span></h2>
                    {/*Span in case I want to colour the weekday  */}

                    <p> My name's Erik and I like building things;
                    things on the internet and internet of things. </p>

                    <p> I strive for excellence in everything that I do - while 
                        aiming to be humble and learning from my bad ideas and mistakes.
                        I'm passionate about what I'm doing, and I'd love to
                        learn from the best.  </p>

                    <p>These are some technologies I enjoy using:</p>

                    <ul>
                        <li> C and C++ </li>
                        <li> Arduino </li>
                        <li> Pycom </li>
                        <li> Python </li>
                        <li> SQL </li>

                        <li> C# with .NET Core</li>
                        <li> React.js </li>
                        <li> HTML/SCSS/Javascript</li>
                        <li> Git </li>
                        <li> Azure </li>

                    </ul>


                </div>
            </div>
            <div className="right">
                    <div className="card">
                    <div className="card-content">

                        <h2 className="card-title">My technoblog</h2>
                        <p className="card-body">
                            Here I share my thoughts on various
                            topics that interest me.
                    </p>
                        <a href="#info" className="button">Check it out</a>
                    </div>
                </div>

               
            </div>
           
        </div>
    )
}
