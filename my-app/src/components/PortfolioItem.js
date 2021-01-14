import React from 'react';

class PortfolioItem extends React.Component {
    constructor(props){
        super(props);
        this.title = props.data.title;
        this.date = props.data.date;
        this.tags = props.data.tags;
        this.imageSource = "../images/thumbnails/" + props.data.thumbnail.src;
        this.imageAltText = props.data.thumbnail.src;
        this.creditedWork = props.data.creditedWork;
        this.link = "/portfolio/" + this.props.data.id;

        this.thirdRowText = this.date.year;
        if(this.creditedWork){
            this.thirdRowText += " - Credited Work";
        }
    }

    render() {
        return (
            <a href={ this.link } className="content-group">
                <img className="content-img" src={this.imageSource} alt={this.imageAltText} />
                <h3 className="content-title">{this.title}</h3>
                <ul>
                    {this.tags.map((tag) => {
                        return(<li>{tag}</li>);
                    })}
                </ul>
                <h4 className="content-date">{this.thirdRowText}</h4>
            </a>
        );
    }
}

export default PortfolioItem;