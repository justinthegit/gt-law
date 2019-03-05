import React, { Component } from 'react';
import { HamburgerWrapper, FirstLine, SecondLine, ThirdLine } from './style.js';

class Hamburger extends Component {

	render() {
		return (
			<HamburgerWrapper isOpen={this.props.isOpen} >
				<FirstLine isOpen={this.props.isOpen} />
				<SecondLine isOpen={this.props.isOpen}/>
				<ThirdLine isOpen={this.props.isOpen}/>
			</HamburgerWrapper>
		);
	}
}

export default Hamburger;
