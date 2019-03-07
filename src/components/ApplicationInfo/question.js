import React, { Component } from 'react';
import { QuestionWrapper, Answer, DropDownWrapper } from './style.js';

class Question extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
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
			<DropDownWrapper>
				<QuestionWrapper isOpen={this.state.isOpen} onClick={() => this.handleClick()}>
					<p>{this.props.question}</p>

					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="11">
							<path fillRule="evenodd" d="M16.68511 0L9.49983 6.58006 2.31489 0 0 2.29964l8.34255 7.64499L9.49983 11l1.15762-1.05537L19 2.29964z"/>
						</svg>
					</div>
				</QuestionWrapper>
				<Answer isOpen={this.state.isOpen}>
					<p>
						Before you apply, it’s a good idea to talk with as many people as you can about what it’s really
						like to work here – visit us at Career Fairs or come to our presentations on campus, and ask
						questions. We recommend you start this process early.
					</p>

					<p>
						During the interview, we want to meet the ‘real’ you – this is your chance to ask questions of
						us and show you’ll make a proactive and positive contribution to our team. But the most
						important thing you can do is relax. By this stage, you’ve already proven you have the academic
						credentials and skills we’re looking for – we want to see if you’ll fit into a team where we
						don’t take ourselves too seriously, and enjoy what we do.
					</p>

					<span>
					Insert key interview milestones here eg you’ll get a chance to meet us informally at our presentation days…

					</span>
				</Answer>
			</DropDownWrapper>
		);
	}
}

export default Question;
