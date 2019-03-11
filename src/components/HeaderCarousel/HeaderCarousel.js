import React, { Component } from 'react';
import { Wrapper, HeroImg, KnowMore, Title, WatchNow} from './style.js';
import Form from './form.js'

class HeaderCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const currentStatus = this.state.formOpen;
		this.setState(
			{
				formOpen: !currentStatus
			},
			() => console.log(this.state.formOpen)
		);
	}
	render() {
		return (
			<Wrapper>
				<HeroImg
					src="https://res.cloudinary.com/avenue/image/upload/v1551828160/hero-img_sytpyx.jpg"
					alt="hi"
				/>
				<Title>
					<h2>there's more</h2>
					<img
						src="https://res.cloudinary.com/avenue/image/upload/v1551828144/green-cross_pg0rzp.png"
						alt=""
					/>
				</Title>
				<WatchNow>
					<img
						src="https://res.cloudinary.com/avenue/image/upload/v1551828144/green-cross_pg0rzp.png"
						alt=""
					/>
					<p>
						Sectado temaa vorest quad vitatur acias mvitatur acias molor.
						<span> Watch now.</span>
					</p>
				</WatchNow>
				<KnowMore onClick={() => this.handleClick()}>
					<img src="https://res.cloudinary.com/avenue/image/upload/v1551828145/white-up_jolwdz.png" alt="" />
					<h1>WANT TO KNOW MORE?</h1>
				</KnowMore>

				<Form handleClick ={this.handleClick} formOpen ={this.state.formOpen} />


			</Wrapper>
		);
	}
}

export default HeaderCarousel;
