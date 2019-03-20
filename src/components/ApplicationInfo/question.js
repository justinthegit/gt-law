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
						<h3>	{this.props.question}</h3>

						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="19" height="11">
								<path
									fillRule="evenodd"
									d="M16.68511 0L9.49983 6.58006 2.31489 0 0 2.29964l8.34255 7.64499L9.49983 11l1.15762-1.05537L19 2.29964z"
								/>
							</svg>
						</div>
					</QuestionWrapper>
					<Answer isOpen={this.state.isOpen}>{this.props.children}</Answer>
				</DropDownWrapper>
		);
	}
}

export default Question;
