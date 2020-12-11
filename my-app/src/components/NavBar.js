import React from 'react'

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.worksLink = "/";
        this.githubLink = "https://www.github.com/kenyonnick";
        this.aboutLink = "/about.html";
    }

    render() {
        return (
            <div id="nav">
                <h1>Nicklas Kenyon</h1>
                <div id="nav-items">
                    <h2 className="nav-item"><a href={ this.worksLink }>Works</a></h2>
                    <h2 className="nav-item"><a href={ this.githubLink } target="blank">GitHub</a></h2>
                    <h2 className="nav-item"><a href={ this.aboutLink }>About</a></h2>
                </div>
            </div>
        );
    }
}

export default NavBar;