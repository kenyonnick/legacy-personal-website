import React from  'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.startingCopyrightYear = 2015;
        this.currentCopyrightYear = new Date().getFullYear();
        this.links = {
            linkedin : "https://www.linkedin.com/in/nicklas-kenyon/",
            github : "https://www.github.com/kenyonnick",
        }
    }

    render() {
        return (
            <div id="footer">
                <p>Copyright Nicklas Kenyon {this.startingCopyrightYear} - { this.currentCopyrightYear }</p>
                <ul id="footer-links">
                    <li><a href={ this.links.linkedin }>LinkedIn</a></li>
                    <li><a href={ this.links.github }>GitHub</a></li>
                </ul>
            </div>
        );
    }

}

export default Footer;