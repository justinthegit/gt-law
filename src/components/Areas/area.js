import React, { Component } from 'react';
import { AreaWrapper } from './style.js';

class Area extends Component {
	render() {
		return (
			<AreaWrapper>
        <h1>{this.props.title}</h1>

        <div>
        <span>Learn more</span>
        <img src="https://res.cloudinary.com/avenue/image/upload/v1551846903/green-btn_bsh4bi.png" alt=""/>
        </div>
			</AreaWrapper>
		);
	}
}

export default Area;
