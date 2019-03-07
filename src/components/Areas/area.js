import React, { Component } from 'react';
import { AreaWrapper } from './style.js';
import arrowIcon from '../../images/arrow-in-circle.svg'

class Area extends Component {
	render() {
		return (
			<AreaWrapper>
        <h1>{this.props.title}</h1>

        <div>
        <span>Learn more</span>
        <img src={arrowIcon} alt=""/>
        </div>
			</AreaWrapper>
		);
	}
}

export default Area;
