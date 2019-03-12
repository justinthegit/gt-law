import React, { Component } from 'react';
import { HeroImg, Title, WatchNow, SlideWrapper, ButtonPrevious, ButtonNext } from './style.js';
import playBtn from '../../images/play-btn.svg';

class Slide extends Component {
	render() {
		return (
			<SlideWrapper>
				<HeroImg src={this.props.imageURL} alt="hi" />
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
						{this.props.text}
						<span>
							{' '}
							{/* <img src={playBtn} alt="" /> */}
							<a href=""> Watch now.</a>
						</span>
					</p>
				</WatchNow>
				<ButtonPrevious onClick={this.props.previous} href="#" />
				<ButtonNext onClick={this.props.next} href="#" />
			</SlideWrapper>
		);
	}
}

export default Slide;
