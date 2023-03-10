

const displayProjects=(projects)=>{
    return `    <article class="project-work">

    <div class="project-img-container">
        <img src="../images/atah-screen.png" alt="project-1" class="img project-page-img">
        <a href="https://atah-habibi-porfolio.netlify.app/" target="_blank"><img src="../svgs/icons8-live-64 (3).png" alt="live-icon" class="live-icon"></a>
    </div>

    <div class="project-information">

        <h4 class="project-name">My portfolio</h4>
        <p class="project-info">
           This is my portfolio design by me using html, css and Javascript and other helpful css tools such as media queries for different screen sizes and full responsive, you can view project live by clicking the live button and download the source code 
        </p>

        <div class="project-footer">
            <a href="#"><button class="project-icon"><i class="fa-brands fa-github"></i></button></a>
            <a href="#"><button class="source-code">source code</button></a>
        </div>


    </div>



</article>`
}


export {displayProjects}