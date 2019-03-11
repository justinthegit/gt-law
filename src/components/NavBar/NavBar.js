import React, { Component } from 'react';
import { Wrapper, Nav, MobileNav, NavItem, WhiteLine, Clickable } from './style.js';
import { Link } from 'react-scroll';

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
					<a href="https://www.gtlaw.com.au/">
						<img src={logo} alt="" />
					</a>
					<Nav>
						<Link activeClass="active" to="about" spy={true} smooth="easeOutQuad" duration={800}>
							ABOUT G+T
						</Link>
						<Link activeClass="active" to="areas" spy={true} smooth="easeOutQuad" duration={800}>
							PRACTICE AREAS
						</Link>
						<Link activeClass="active" to="aDayInTheLife" spy={true} smooth="easeOutQuad" duration={800}>
							A DAY IN THE LIFE
						</Link>
						<Link activeClass="active" to="faqs" spy={true} smooth="easeOutQuad" duration={800}>
							APPLICATION INFO+FAQS
						</Link>
					</Nav>
					<Clickable onClick={() => this.handleClick()}>
						<Hamburger isOpen={this.state.isOpen} />
					</Clickable>
				</Wrapper>

				<MobileNav isOpen={this.state.isOpen}>
					<NavItem>
						<Link activeClass="active" to="about" spy={true} smooth="easeOutQuad" duration={800}>
							ABOUT G+T
						</Link>{' '}
					</NavItem>
					<WhiteLine />
					<NavItem>
						<Link activeClass="active" to="areas" spy={true} smooth="easeOutQuad" duration={800}>
							PRACTICE AREAS
						</Link>{' '}
					</NavItem>
					<WhiteLine />

					<NavItem>
						<Link activeClass="active" to="aDayInTheLife" spy={true} smooth="easeOutQuad" duration={800}>
							A DAY IN THE LIFE
						</Link>{' '}
					</NavItem>
					<WhiteLine />

					<NavItem>
						<Link activeClass="active" to="faqs" spy={true} smooth="easeOutQuad" duration={800}>
							APPLICATION INFO+FAQS
						</Link>{' '}
					</NavItem>
				</MobileNav>
			</div>
		);
	}
}

export default NavBar;
