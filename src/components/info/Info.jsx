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

                <h2>I hope you have a lovely {n}.</h2>
                    
                <p> My name's Erik and I love building things; 
                    things on the internet and internet of things. </p>

                <p> I respect skill above all else, and I seek people I can learn from,
                    and who are honest. I also value those who have ethics without the bullshit. </p>
                   
                <h3>These are some technologies I enjoy using:</h3>   
               
            <ul>
                    <li> C# with .NET Core</li>
                    <li> C and C++ </li>
                    <li> Arduino </li>
                    <li> Pycom </li>
                    <li> Python </li>
                    <li> React.js </li>
                    <li> HTML/SCSS/Javascript</li>
                    <li> SQL </li>
                    <li> Git </li>

                </ul>

                
                </div>
            </div>
            
        </div>
    )
}
