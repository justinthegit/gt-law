import React, { Component } from 'react';
import { HeroWrapper, TextWrapper } from './style.js';

class WorkWithUs extends Component {
	render() {
		return (
			<div>
				<HeroWrapper />
					<img src="https://res.cloudinary.com/avenue/image/upload/v1551841624/working-gt_voeswh.jpg" alt=""/>
				<TextWrapper>
					<p>
						If you’re ready for more, apply for our clerkship program. Applications open DEC 2019 and close
						DEC 2019.
					</p>

					<p>
						If you are a law student in your fourth or penultimate year of study, please apply through
						CVmail for our Sydney,  Melbourne and Perth clerkships.{' '}
					</p>


			<div>
			<span>
						cvmail.com.au
					</span>

					<img src="https://res.cloudinary.com/avenue/image/upload/v1551846903/green-btn_bsh4bi.png" alt=""/>

			</div>
			
				</TextWrapper>
			</div>
		);
	}
}

export default WorkWithUs;
