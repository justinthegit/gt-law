import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	padding: 70px 0;
	p {
		max-width: 600px;
		text-align: center;
		font-weight: 700;
		font-size: 28px;
		color: #003057;
		letter-spacing: -0.41px;
		line-height: 32px;
		margin-bottom: 30px;
		padding: 0 40px;
	}

	img {
		padding: 40px 0;
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
			padding: 30px 0;
		}
	}

	@media (max-width: 320px) {
		padding: 40px 0;

		p {
			font-size: 16px;
			line-height: 18px;
			letter-spacing: -0.24px;
			padding: 0 20px;
		}

		img {
			padding: 15px 0;
			margin-bottom: 25px;
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
		padding: 0 30px;

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
		font-weight: normal;
		font-size: 18px;
		color: #0047bb;
		letter-spacing: -0.26px;
		text-align: right;
	}

	@media (max-width: 1280px) {
		max-width: 330px;
		p {
			font-size: 26px;
			padding:0 25px;
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
		}
	}

	@media (max-width: 480px) {
		p {
			font-size: 21px;
			line-height: 28px;
			letter-spacing: -0.24px;
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
