import React from 'react'
import PortfolioItem from './PortfolioItem';
import {portfolioData} from '../data/portfolioListData';

class PortfolioGallery extends React.Component {
    constructor(props){
        super(props);
        this.portfolio = portfolioData;
        this.portfolio.sort((left, right) => {
            return right.date.year - left.date.year;
        });
    }

    render() {
        return(
            <div class="content">
                {this.portfolio.map((item, index) => {
                    return (<PortfolioItem data={item}/>);
                })}
            </div>
        );
    }
}

export default PortfolioGallery;