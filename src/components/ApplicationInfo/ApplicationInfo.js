import React, { Component } from 'react';
import { BlueWrapper, Container, QuestionsContainer, HorizontalLine } from './style.js';
import Question from './question.js';

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
			<BlueWrapper>
				<Container>
					<h1>starting your career with G+T</h1>
					<p>
						Not all corporate law firms are the same, and a clerkship is the best way to experience what
						it’s really like to work here. Working under the guidance of Australia’s leading legal minds, on
						meaningful and complex transactions and matters, you’ll see the difference G+T has to offer.  <span>FAQs below</span>
					</p>
					<QuestionsContainer>
						<Question question="How do I apply for a clerkship?" />
						<Question question="What is the interview process, and how can I prepare?" />
						<Question question="How do I apply for a clerkship?" />
						<Question question="What is the interview process, and how can I prepare?" />
						<Question question="How do I apply for a clerkship?" />
						<Question question="What is the interview process, and how can I prepare?" />
					</QuestionsContainer>
				</Container>
			</BlueWrapper>
		);
	}
}

export default ApplicationInfo;
