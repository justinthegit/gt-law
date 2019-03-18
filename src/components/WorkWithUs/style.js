import styled from 'styled-components';



export const HeroWrapper = styled.div`
	position: relative;
	img {
		height: 100%;
		width: 100%;
		margin-bottom: 0;
	}


	@media (max-width: 768px) {

		img {
			position:relative;
			margin-top: 50px;

		}

	}

	@media (max-width: 480px) {

img {

}

}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	margin-top: 100px;
	padding-bottom: 52px;


	p {
		max-width: 700px;
		text-align: center;
		font-weight: 700;
		font-size: 28px;
		color: #003057;
		letter-spacing: -0.41px;
		line-height: 32px;
		margin-bottom: 30px;
		padding: 0 20px;
	
	}

	a {
		font-weight: 700;
		font-size: 18px;
		color: #0047bb;
	
		letter-spacing: -0.26px;
		line-height: 22px;
		text-decoration:none;
		display:flex;
		flex-direction:row;
		align-items: center;
		margin-right: 7px;
		margin-top: 30px;
	}
	div {
		display:flex;
		flex-direction:column;
		align-items: center;

		p{
			font-size: 18px;
			margin-bottom:0px;
			font-weight: 300;
			padding: 0 10px;
		}

		span {
			font-weight: 600;
			/* font-size:18px; */
		}
	}
	img {
		height: 17px;
		margin: 0;
		margin-left: 10px;
	}

	@media (max-width :768px ) {
		margin-top: 50px;
		padding-bottom: 0;
			p {
				padding: 0 50px;
				font-size: 24px;
			}
		}

		@media (max-width :480px ) {
			margin-top: 30px;
			padding-bottom: 0;
			p {
				padding: 0 30px;
				font-size: 18px;
				line-height: 20px;
				margin-bottom: 17px;
			}

			a {
				display: flex;
				flex-direction:row;

				align-content: center;
				margin-top: 10px;

				img {
					width: 15px;
					height: 15px;
				}
			}

			div {

				p {
					padding: 7px 30px;
					line-height: 130%;
				}
				p, span {
					font-size: 16px;
				}
			}
		}
`;

export const ReallyLike = styled.div`
	position: absolute;
	left: 105px;
	top: 80px;
	max-width: 393px;
	z-index: 30;


	h2 {
		font-size: 38px;
		color: #0047bb;
		letter-spacing: -0.25px;
		line-height: 100%;
	}

	p {
		font-weight: normal;
		font-size: 18px;
		color: #2d2926;
		letter-spacing: -0.26px;
		line-height: 145%;
		padding-right: 30px;
	}

	span {
		font-weight: 700;
		font-size: 18px;
		color: #0047bb;
		letter-spacing: -0.26px;
		line-height: 22px;
		margin-right: 0px;
	}
	
	a {
		display:flex;
		flex-direction:row;
		align-items: center;
		text-decoration:none;
	}
	img {
		display: inline-block;
		margin: 0;
		width: 17px;
		height: 17px;
		margin-left: 10px;
	}

	@media (max-width: 1280px) {
		left: 80px;
		top: 60px;
		max-width: 280px;

		h2 {
			font-size: 30px;
		}
		p {
			padding-right: 40px;
			font-size: 16px
		}

	}

	@media (max-width: 1024px) {
		max-width: 240px;
		left: 50px;
		top: 40px;

		h2 {
			font-size: 25px;
			line-height: 120%;
		}
		p {
			padding-right: 30px;
			font-size: 16px;
			line-height: 136%;
		}

		span {
			font-size:16px;
		}

		img {
			height: 15px;
			width: 15px;
		}
	}

	@media (max-width: 768px) {
		position:relative;
		max-width: 580px;
		margin: 30px auto 0 auto;		
		top:0;
		left:0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items:center;

		h2 {
			font-size: 40px;
			line-height: 120%;
			padding: 0 40px;
		}
		p {
			font-size: 24px;
			line-height: 136%;
			padding: 0 50px;
		}

		span {
			font-size:18px;
		}

		a {

			display:flex;
		flex-direction:row;
		align-items: center;
		text-decoration:none;
		}

		img {
			height: 15px;
			width: 15px;
		}


	}

	@media (max-width: 480px) {
		text-align: left;
		padding:0 80px 0 30px;
		margin-top: 33px;
		align-items:flex-start;


		h2 {
			font-size:26px;
			padding: 0;
			line-height: 100%;
			margin-bottom: 24px;
		}

		p {
			font-size: 18px;
			padding: 0;
		}



	}


	@media (max-width: 320px) {
		padding:0 30px 0 36px;
	


	}
`;



export const BgImg = styled.div`
img {
	z-index: -4;

	/* @media (max-width: 480px) {
		height: 266px;
	} */
}
`;
