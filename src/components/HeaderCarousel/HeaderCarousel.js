import React, { Component } from 'react';
import { Wrapper, HeroImg, KnowMore, Title, WatchNow } from './style.js';

class HeaderCarousel extends Component {
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
						Sectado temaa vorest qua aad vitatur acias mvitatur acias molor.
						<span>
							{' '}
							Watch now.
						</span>
					</p>
				</WatchNow>
				<KnowMore>
					<img src="https://res.cloudinary.com/avenue/image/upload/v1551828145/white-up_jolwdz.png" alt="" />
					<h1>WANT TO KNOW MORE?</h1>
				</KnowMore>
			</Wrapper>
		);
	}
}

export default HeaderCarousel;
