import React, { Component } from 'react';
import { Wrapper, Nav, MobileNav, NavItem, WhiteLine,  } from './style.js';
import logo from '../../images/gt-logo.svg';

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const currentStatus = this.state.isOpen;
		this.setState(
			{
				isOpen: !currentStatus
			},
			() => console.log(this.state.isOpen)
		);
	}

	render() {
		return (
			<div>
				<Wrapper>
					<img src={logo} alt="" />
	
				</Wrapper>

				
			</div>
		);
	}
}

export default Footer;
