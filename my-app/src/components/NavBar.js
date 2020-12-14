import React from 'react'

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.links = {
            works : "/",
            github : "https://www.github.com/kenyonnick",
            about : "/about.html",
            resume : "https://github.com/kenyonnick/resume/blob/master/Nicklas%20Kenyon%20Resume.pdf",
        }
        this.worksLink = "/";
        this.githubLink = "https://www.github.com/kenyonnick";
        this.aboutLink = "/about.html";
    }

    render() {
        return (
            <div id="nav">
                <h1><a href="/">Nicklas Kenyon</a></h1>
                <div id="nav-items">
                    <h2 className="nav-item"><a href={ this.links.works }>Works</a></h2>
                    <h2 className="nav-item"><a href={ this.links.github } target="blank">GitHub</a></h2>
                    <h2 className="nav-item"><a href={ this.links.resume } target="blank">Resume</a></h2>
                    <h2 className="nav-item"><a href={ this.links.about }>About</a></h2>
                </div>
            </div>
        );
    }
}

export default NavBar;