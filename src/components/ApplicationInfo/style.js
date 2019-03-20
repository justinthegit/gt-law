import styled from 'styled-components';
import { WhiteLine } from '../NavBar/style';

export const BlueWrapper = styled.div`
	margin-top: 50px;
	position: relative;
	z-index: 0;
	height: 100%;
	width: 100%;
	background-color: #0047bb;

	@media (max-width: 480px) {
		margin-top: 37px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px 120px 100px 120px;

	h1 {
		font-size: 38px;
		color: white;
		margin-bottom: 30px;
		/* max-width: 400px; */
	}

	p {
		font-weight: normal;
		font-size: 18px;
		color: #ffffff;
		letter-spacing: -0.26px;
		line-height: 22px;
		max-width: 620px;
		margin-bottom: 5px;
	}

	span {
		font-weight: 700;
	}

	@media (max-width: 1280px) {
		padding: 80px 100px 100px 100px;

		h1 {
			font-size: 30px;
			line-height: 120%;
			margin-bottom: 25px;
		}
	}

	@media (max-width: 1024px) {
		padding: 80px 60px 100px 60px;
	}

	@media (max-width: 768px) {
		padding: 50px 40px 60px 40px;
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
			padding: 0 40px 0 30px;
		}

		span {
			display: block;
		}
		padding: 30px 0px 0px;
	}
`;

export const QuestionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	margin-top: 55px;

	@media (max-width: 480px) {
		margin-top: 30px;
	}
`;

//area.js

export const DropDownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3px;
	width: 100%;
	max-width: 1036px;
`;

export const QuestionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 75px;
	transition: 0.1s ease-out;
	align-items: center;
	padding: 0 30px;
	background-color: ${(props) => (props.isOpen ? ' #6cc24a' : 'rgba(255, 255, 255, 0.05)')};
	position: relative;
	z-index: 1;
	h3 {
		font-size: 24px;
		margin: 0;
		line-height: 124%;
		margin-RIGHT: 20px;
		max-width: 100%;
		font-weight: 500;

		/* margin-top: 10px;
		margin-bottom: 10px; */
		font-weight:  ${(props) => (props.isOpen ? '500' : null)};
		color: ${(props) => (props.isOpen ? '#003057' : 'white')};
	}

	svg {
		height: 11px;
		width: 19px;
		margin: 0;

		vertical-align: middle;
		transform: ${(props) => (props.isOpen ? 'rotateX(180deg)' : null)};

		path {
			fill: ${(props) => (props.isOpen ? '#003057' : ' #6CC24A')};
		}
	}

	:hover {
		/* background-color: #6cc24a;
		svg {
			transform: rotateX(180deg);
			path {
				fill: #fff;
			}
		} */
		cursor: pointer;

		h3 {
			/* text-decoration:${(props) => (props.isOpen ? 'null' : 'underline')}; */
			text-decoration: underline;
		}
	}

	@media (max-width: 768px) {
		h3 {
			font-size: 19px;
			padding: 0;
		}
	}

	@media (max-width: 480px) {
		height: 89px;
		h3 {
			font-size: 17px;
			padding: 0;
		}
	}

	@media (max-width: 360px) {
		padding: 0 24px;
		h3 {
			font-size: 16px;
			margin-right: 10px;
		}
	}
`;

export const Answer = styled.div`
	background-color: white;
	padding: 40px 120px 25px 120px;
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	color: #003057;

	p {
		font-weight: normal;
		font-size: 18px;
		color: #2D2926;
		letter-spacing: -0.26px;
		line-height: 24px;
		padding: 0;
		margin-bottom: 20px;

		a {
		font-weight: 700;
		color: #0047BB;
		text-decoration:underline;
	}
	}


	span {
		font-weight: 0;
		font-family: 'brandon_grotesque';
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

export const DownloadApp = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #efefef;
	padding: 100px 120px 100px 120px;

	div {
		width: 100%;
		height: 100%;
		margin: 0;
	}

	@media (max-width: 1280px) {
		align-items: center;
	}

	@media (max-width: 1024px) {
		padding: 60px 60px 60px 60px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 38px 0px 0px 0px;
	}
	/* box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.17); */
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.17);

`;

export const TextContainer = styled.div`
	padding-right: 100px;
	display: flex;
	flex-direction: column;

	h1 {
		font-weight: 700;
		font-size: 34px;
		color: #0047bb;
		letter-spacing: -0.22px;
		line-height: 100%;
		margin-bottom: 30px;

		@media (max-width: 1280px) {
			font-size: 32px;
			margin-bottom: 30px;
		}

		@media (max-width: 1024px) {
			font-size: 26px;
			margin-bottom: 20px;
		}

		@media (max-width: 480px) {
			font-size: 26px;
			margin-top: 0;
		}
	}

	p {
		font-weight: normal;
		font-size: 18px;
		color: #2d2926;
		letter-spacing: -0.26px;
		margin-bottom: 32px;

		@media (max-width: 1280px) {
			margin-bottom: 30px;
		}

		@media (max-width: 1024px) {
			margin-bottom: 20px;
			font-size: 16px;

		}

		@media (max-width: 480px) {
			font-size: 18px;
		}
	}

	a {
		display: block;
	}

	img {
		display: block;
		margin: 0;
		width: 168px;
		margin-bottom: 10px;

		@media (max-width: 480px) {
			width: 130px;
			margin-bottom: 6px;
		}
	}

	@media (max-width: 1280px) {
		padding-right: 60px;
	}

	@media (max-width: 1024px) {
		padding-right: 40px;
	}

	@media (max-width: 768px) {
		padding-left: 40px;
		flex-direction: row;
		justify-items: space-evenly;

		div {
			:nth-child(1) {
				max-width: 280px;
				padding-right: 30px;
			}
			:nth-child(2) {
				align-self: center;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}

	@media (max-width: 480px) {
		padding-right: 40px;
		padding-left: 30px;
		flex-direction: column;
		margin-bottom: 29px !important;

		div {
			:nth-child(1) {
				max-width: 100%;
				padding-right: 0;
			}

			:nth-child(2) {
				align-self: flex-start;
				align-items: flex-start;
			}
		}
	}
`;
