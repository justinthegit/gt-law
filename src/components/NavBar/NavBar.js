import React, { Component } from 'react';
import { Wrapper, Nav, MobileNav, NavItem, WhiteLine, Clickable } from './style.js';
import logo from '../../images/gt-logo.svg';
import Hamburger from './hamburger.js';

class NavBar extends Component {
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
					<Nav>
						<a href="/">ABOUT G+T</a>
						<a href="/">PRACTICE AREAS</a>
						<a href="/">A DAY IN THE LIFE</a>
						<a href="/">APPLICATION INFO+FAQS</a>
					</Nav>
					<Clickable onClick={() => this.handleClick()}>
						<Hamburger isOpen={this.state.isOpen} />
					</Clickable>
				</Wrapper>

				<MobileNav isOpen={this.state.isOpen}>
					<NavItem>
						<a href="/">ABOUT G+T</a>
					</NavItem>
					<WhiteLine />
					<NavItem>
						<a href="/">PRACTICE AREAS</a>
					</NavItem>
					<WhiteLine />

					<NavItem>
						<a href="/">A DAY IN THE LIFE</a>
					</NavItem>
					<WhiteLine />

					<NavItem>
						<a href="/">APPLICATION INFO + FAQS</a>
					</NavItem>
				</MobileNav>
			</div>
		);
	}
}

export default NavBar;
