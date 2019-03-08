import React, { Component } from 'react';
import { HeroWrapper, TextWrapper, ReallyLike } from './style.js';
import arrowIcon from '../../images/arrow-in-circle.svg';

class WorkWithUs extends Component {
	render() {
		return (
			<div>
				<HeroWrapper>
					<ReallyLike>
						<h2>WHAT IT's REALLY LIKE TO WORK AT G+T</h2>
						<p>
							Working with Gilbert + Tobin means working directly with recognised leaders in their fields,
							in a firm that makes a difference for its clients and its people. The work is challenging,
							interesting and rewarding, as these graduates reveal.{' '}
						</p>
						<a href="https://gradaustralia.com.au/">
							<span>gradaustralia.com.au</span>
							<img src={arrowIcon} alt="" />
						</a>
					</ReallyLike>

					<img
						src="https://res.cloudinary.com/avenue/image/upload/v1551841624/working-gt_voeswh.jpg"
						alt=""
					/>
				</HeroWrapper>
				<TextWrapper>
					<p>
						If you’re ready for more, apply for our clerkship program. Applications open DEC 2019 and close
						DEC 2019.
					</p>

					<p>
						If you are a law student in your fourth or penultimate year of study, please apply through
						CVmail for our Sydney, Melbourne and Perth clerkships.{' '}
					</p>

					<div>
						<a href="https://www.cvmail.com.au">cvmail.com.au</a>

						<img src={arrowIcon} alt="" />
					</div>
				</TextWrapper>
			</div>
		);
	}
}

export default WorkWithUs;
