import React from 'react'
import PortfolioItem from './PortfolioItem';
import {portfolioData} from '../data/portfolioListData';

class PortfolioItemFullView extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.id = this.props.id;
        this.portfolio = portfolioData;
        this.itemData = this.portfolio.find((item) => {
            return item.id === this.props.id;
        });
    }

    render() {
        return(
            <div class="content">
                <PortfolioItem data={this.itemData}/>
            </div>
        );
    }
}

export default PortfolioItemFullView;