import React, { Component } from 'react';
import { BlueWrapper, Container, QuestionsContainer, DownloadApp, TextContainer } from './style.js';
import Question from './question.js';
import downloadApple from '../../images/download-apple.svg';

class ApplicationInfo extends Component {
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
				<BlueWrapper>
					<Container>
						<h1>starting your career with G+T</h1>
						<p>
							Not all corporate law firms are the same, and a clerkship is the best way to experience what
							it’s really like to work here. Working under the guidance of Australia’s leading legal
							minds, on meaningful and complex transactions and matters, you’ll see the difference G+T has
							to offer. <span>FAQs below</span>
						</p>
						<QuestionsContainer>
							<Question question="How do I apply for a clerkship?" />
							<Question question="What sort of work will I do?" />
							<Question question="Who will support me during my clerkship?" />
							<Question question="What sort of training will I receive as a clerk?" />
							<Question question="Can I get involved in legal innovation as a clerk?" />
							<Question question="Can I contribute to the Pro Bono practice?" />
							<Question question="Can I get involved in community activities?" />
							<Question question="What do you look for in a clerkship application?" />
							<Question question="What is the interview process, and how can I prepare?" />
							<Question question="Do you offer Indigenous traineeships?" />
							<Question question="If I don’t clerk with G+T, can I still join the firm as a graduate?" />

						</QuestionsContainer>
					</Container>
				</BlueWrapper>

				<DownloadApp>
					<TextContainer>
						<div>
							<h1>READY TO WRITE YOUR OWN STORY AT GILBERT + TOBIN?</h1>
							<p>
								Download our app to unlock more insights into the opportunities and people at G+T, in
								our interactive brochure.{' '}
							</p>
						</div>
					<div>
					<a href="/
					"><img
					src="https://res.cloudinary.com/avenue/image/upload/v1552018996/download-google_t8jjeg.png"
					alt=""
				/></a>

				<a href="/
				">						<img src={downloadApple} alt="" />
				</a>
					</div>
					
					</TextContainer>

					<img
						src="https://res.cloudinary.com/avenue/image/upload/v1551937761/placeholder-bottom_mmayww.jpg"
						alt=""
					/>
				</DownloadApp>
			</div>
		);
	}
}

export default ApplicationInfo;
