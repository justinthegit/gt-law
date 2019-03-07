import styled from 'styled-components';

export const BlueWrapper = styled.div`
	margin-top: 50px;
	position: relative;
	z-index: 0;
	height: 100%;
	width: 100%;
	background-color: #0047bb;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px 120px 0 120px;

	h1 {
		font-size: 38px;
		color: white;
		margin-bottom: 30px;
		font-weight: 500;
	}

	p {
		font-weight: normal;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: -0.26px;
		line-height: 22px;
		max-width: 620px;
	}

	span {
		font-weight: 500;
	}

	@media (max-width: 1280px) {
		padding: 80px 100px 0 100px;
		
		h1 {
			font-size: 30px;
			line-height: 120%;
			margin-bottom: 25px;
		}

	}

	@media (max-width: 1024px) {
		padding: 80px 60px 0 60px;
	}

	@media (max-width: 768px) {
		padding: 50px 40px 10px 40px;
		h1 {
			margin-bottom: 10px;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 26px;
			padding: 0 30px;
			margin-bottom: 20px;

		}

		p {
			padding: 0 30px;
		}
		padding: 30px 0px 0 0px;
	}
`;

export const QuestionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	margin-top: 50px;



	@media (max-width: 480px) {
		margin-top: 30px;
	}
`;



//area.js

export const DropDownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 5px;
	width: 100%;
`;

export const QuestionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 75px;
	transition: 0.4s ease;
	align-items: center;
	padding: 0 30px;
	background-color: ${(props) => (props.isOpen ? ' #6cc24a' : 'rgba(255, 255, 255, 0.05)')};
	position: relative;
	z-index: 1;
	p {
		font-size: 24px;
		margin: 0;
	}

	img {
		height: 11px;
		width: 19px;
		margin: 0;
		vertical-align: middle;

		:nth-of-type(2) {
			display: ${(props) => (props.isOpen ? 'inline-block' : 'none')};
		}
	}

	:hover {
		background-color: #6cc24a;

		img {
			display: none;
			:nth-of-type(2) {
				display: inline-block;
			}
		}
	}

	@media (max-width: 480px) {
		height: 89px;
		p {
			font-size: 18px;
			padding: 0;
		}
	}
`;

export const Answer = styled.div`
	position: ${(props) => (props.isOpen ? 'relative' : 'absolute')};
	background-color: white;
	padding: 40px 120px;
	z-index: -1;
	/* transition: 0.5s ease; */
	visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
	transform: ${(props) => (props.isOpen ? 'translateY(0)' : `translateY(-140%)`)};
	color: #003057;
	
	p {
		font-weight: normal;
		font-size: 18px;
		color: #2d2926;
		letter-spacing: -0.26px;
		line-height: 24px;
		padding: 0;

	}
	span {
		font-weight: 900;
	}

	@media (max-width: 1024px) {
		padding: 40px 80px;
	}
	@media (max-width: 768px) {
		padding: 40px 50px;
	}

	@media (max-width: 480px) {
		padding: 40px 30px;
	}


`;