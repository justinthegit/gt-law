import React, { Component } from 'react';
import { Title, WatchNow, SlideWrapper, ButtonPrevious, ButtonNext } from './style.js';
import playBtn from '../../images/play-btn.svg';
import greenCross from '../../images/green-cross.svg';

class Slide extends Component {
	render() {
		return (
			<SlideWrapper>
				{this.props.children}

				<Title whiteTitle={this.props.whiteTitle}>
					<h2>there’s more</h2>
					<img
						src={greenCross}
						alt=""
					/>
				</Title>
				<WatchNow onClick={this.props.openVideo}>
					<img
						src={greenCross}
						alt=""
					/>
					<div>
						<p>
							{this.props.text}{' '}
							<span>
								{' '}
								<img src={playBtn} alt="" />
								<button> Watch now.</button>
							</span>
						</p>
					</div>
				</WatchNow>
				<ButtonPrevious  onClick={this.props.previous} href="#" />
				<ButtonNext  onClick={this.props.next} href="#" />
			</SlideWrapper>
		);
	}
}

export default Slide;
