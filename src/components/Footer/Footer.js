import React, { Component } from 'react';
import { Wrapper} from './style.js';
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
				<a href="https://www.gtlaw.com.au/">
						<img src={logo} alt="" />
					</a>

					<p>
					Gilbert + Tobin is an equal opportunity employer. If you require assistance accessing any of the information contained here, please contact Kristie Barton on <a className="tel" href="tel:0292634575">(02) 9263 4575</a> or via <a href="mailto:gtcareers@gtlaw.com.au"> gtcareers@gtlaw.com.au  </a>
					</p>
				</Wrapper>


			</div>
		);
	}
}

export default Footer;
