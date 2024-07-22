import React from "react";
const HomePage = () => {
    return(

    <body>
        <center>
        <img src="Images/logo.png" height="200" width="850" alt="ksc"/>
        <h1>
            WELCOME TO <span title="Sri Krishna College of Technology">SKCT</span>
        </h1>
        <p>The rise of SKCT to prominence over its thirty five years of existence is primarily attributed to its mission to accomplish expectations of the society and industry by nurturing the students to be competent professionals with integrity, besides profound technical knowledge and skill. In rethinking education to deal with rapid changes at the dawn of the twenty-first century, innovation, technology, and research are indispensable tools of education.</p>
        <a href="https://www.skct.edu.in/#/">Click here</a>
        </center>
        <br></br>
        <h3>HOSTEL RULES AND REGULATIONS</h3>
        <a href="https://data.skct.edu.in/media/RULES_AND_REGULATION.pdf">
            <img src="Images/hostel.jpg" height="100" width="100" alt="oijdsv"/>
        </a>
        <br></br>
        <div>
            <h2>CAMPUS LIFE</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-MCPJqC2Iy8?si=zucfzBzT2oQ3enU6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h3>BUS SCHEDULE</h3>
        <br></br>
        <a href="https://skcet.ac.in/pdf/SKCET%20Transport%20Details%20on%20Website.pdf">
            <img src="Images/bus.png" height="100" width="100" alt="jyf"/>
        </a>
        <h2 class="col">COURSES</h2>
        <ul>
            <li>B.E-ECE</li>
            <li>B.E-CSE</li>
            <li>B.E-EEE</li>
            <li>B.Tech-IT</li>
        </ul>
        <h2>RECRUITERS</h2>
        <marquee>
            <img src="Images/amaz.png" alt="gfggh"/>
            <img src="Images/info logo.jpg" height="200" width="200" alt="fd"/>
            <img src="Images/Wipro-Logo-2048x1152.png" height="200" width="250" alt="hgc"/>
            <img src="Images/tata.png" height="200" width="200" alt="fx"/>
            <img src="Images/HCL_Logo.jpeg" height="200" width="200" alt="hfx"/>
            <img src="Images/hyundai-logo-white.jpg" height="200" width="200" alt="fcx"/>
        </marquee>
        <h2 class="leng">CONTACT DETAILS</h2>
        <a href="mailto:tharunesw26@gmail.com">
            <img src="./Images/mail.jpeg" height="50" width="50" alt="hfc"/>
        </a>
        <br></br>
        <br></br>
        <br></br>
        <button onclick="document.location='Home.html'">Back</button>
    </body>
    )
}
export default HomePage;