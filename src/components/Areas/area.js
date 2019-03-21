import React, { Component } from 'react';
import { AreaWrapper } from './style.js';
import arrowIcon from '../../images/arrow-in-circle.svg'

class Area extends Component {
	render() {
		return (
			<AreaWrapper>
        <h1>{this.props.title}</h1>

        <a target="_blank" rel="noopener noreferrer" href={`https://www.gtlaw.com.au/expertise/${this.props.url}`}>
        <span >Learn more</span>
        <img src={arrowIcon} alt=""/>
        </a>
			</AreaWrapper>
		);
	}
}

export default Area;
