import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	padding: 70px 0 90px 0;
	p {
		max-width: 600px;
		text-align: center;
		font-weight: 700;
		font-size: 28px;
		color: #003057;
		letter-spacing: -0.41px;
		line-height: 32px;
		margin-bottom: 30px;
		padding: 0 0px;
	}

	img {
		margin: 52px 0 100px 0;
	}

	@media (max-width: 768px) {
		padding: 50px 0;

		p {
			padding: 0 60px;
		}
	}

	@media (max-width: 480px) {
		padding: 40px 0;

		p {
			font-size: 21px;
			line-height: 28px;
			letter-spacing: -0.24px;
			padding: 0 40px;
			margin-bottom: 20px;
		}

		img {
			margin: 20px 0 32px 0;
		}
	}

	@media (max-width: 320px) {
		padding: 40px 0;

		p {
			font-size: 16px;
			line-height: 18px;
			letter-spacing: -0.24px;
			padding: 0 26px;
		}
	}
`;

export const InfoWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, minmax(50px, 386px));
	grid-gap: 0;
	margin-top: 25px;
	margin-bottom: 68px;
	background-color: #003057;
	justify-content: center;
	div {
		z-index:1;
		max-width: 386px;

		img {
			margin: 0;
		}


	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
		margin-bottom: 48px;


		div {

			max-width:100%;

			/* :nth-of-type(2) {
		transform: translateY(-50px);
		z-index:0;

	}

	:nth-of-type(3) {
		transform: translateY(-115px);
		z-index:0;
	} */
		}
	}

`;

export const VideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;

	img {
		width: 50%;
		height: 50%;
		padding: 0;
		margin: 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 40px;

		img {
			order: 1;
			width: 100%;
			height: 100%;
			margin-bottom: 30px;
		}
	}

	@media (max-width: 480px) {
		padding: 0 29px;
	}
`;
export const QuoteWrapper = styled.div`
	display: flex;
	flex-direction: column;

	p {
		max-width: 400px;
		text-align: left;
		font-weight: 700;
		font-size: 28px;
		color: #003057;
		letter-spacing: -0.41px;
		line-height: 32px;
		margin-bottom: 30px;
		margin: 0;
	}

	span {
		margin-top: 14px;
		font-weight: normal;
		font-size: 18px;
		color: #0047bb;
		letter-spacing: -0.26px;
		text-align: right;
	}

	@media (max-width: 1280px) {
		max-width: 330px;
		p {
			font-size: 23px;
			padding: 0 25px;
		}

		span {
			padding-right: 20px;
		}
	}

	@media (max-width: 768px) {
		order: 2;

		p {
			text-align: center;
			max-width: 100%;
			padding: 0;
			margin-bottom: 15px;
		}

		span {
			text-align: center;
			font-size: 20px;
		}
	}

	@media (max-width: 480px) {
		p {
			font-size: 21px;
			line-height: 28px;
			letter-spacing: -0.24px;
			margin-top: 10px;
			margin-bottom: 0px;
		}

		span {
			font-size: 14px;
		}
	}

	@media (max-width: 320px) {
		p {
			font-size: 16px;
			line-height: 18px;
		}
	}
`;
