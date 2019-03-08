import styled from 'styled-components';

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
		font-weight: 500;
		max-width: 340px;
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
		font-weight: 500;
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
			padding: 0 50px 0 30px;
		}

		span {
			display: block;
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
	margin-bottom: 3px;
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
	p {
		font-size: 24px;
		margin: 0;
		line-height: 124%;
		margin-RIGHT: 20px;
	}

	svg {
		height: 11px;
		width: 19px;
		margin: 0;

		vertical-align: middle;
		transform: ${(props) => (props.isOpen ? 'rotateX(180deg)' : null)};

		path {
			fill: ${(props) => (props.isOpen ? '#fff' : ' #6CC24A')};
		}
	}

	:hover {
		background-color: #6cc24a;
		svg {
			transform: rotateX(180deg);
			path {
				fill: #fff;
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
	background-color: white;
	padding: 40px 120px;
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
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

export const DownloadApp = styled.div`
	display: flex;
	flex-direction: row;
	background-color: #efefef;
	padding: 80px 120px 100px 120px;

	img {
		width: 50%;
		height: 50%;
		margin: 0;
		@media (max-width: 768px) {
			margin-top: 30px;
			width: 100%;
			height: 100%;
		}
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
		margin-bottom: 40px;

		@media (max-width: 1280px) {
			font-size: 32px;
			margin-bottom: 30px;
		}

		@media (max-width: 1024px) {
			font-size: 30px;
			margin-bottom: 20px;
		}

		@media (max-width: 480px) {
			font-size: 26px;
		}
	}

	p {
		font-weight: normal;
		font-size: 18px;
		color: #2d2926;
		letter-spacing: -0.26px;
		margin-bottom: 40px;

		@media (max-width: 1280px) {
			margin-bottom: 30px;
		}

		@media (max-width: 1024px) {
			margin-bottom: 20px;
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
		margin-bottom: 15px;


		@media (max-width: 480px) {
			width: 130px;
			margin-bottom: 6px;
	}

	}

	@media (max-width: 1280px) {
		padding-right: 80px;
	}

	@media (max-width: 1024px) {
		padding-right: 40px;
	}

	@media (max-width: 768px) {
		padding-left: 20px;
		flex-direction:row;
		justify-items: center;

		div {
			:nth-child(1) {
			max-width: 300px;
			padding-right: 30px;
			}
			:nth-child(2) {
				align-self: center;

			}
		}
	}

	@media (max-width: 480px) {
		padding-right: 30px;
		flex-direction:column;

		div {
			:nth-child(1) {
			max-width: 100%;
			padding-right: 0;
			}

			:nth-child(2) {
				align-self: flex-start;

			}
		}
	}
`;

