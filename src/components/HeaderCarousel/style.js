import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	height: 900px;
	object-fit: contain;

	@media (max-width: 480px) {
		height: 600px;
	}

	@media (max-width: 320px) {
		height: 428px;
	}

`;
export const HeroImg = styled.img`
	object-fit: contain;
	margin: 0;


`;



export const Title = styled.div`
	position: absolute;
	left: 120px;
	top: 160px;
	width: 520px;

	h2 {
		font-size: 120px;
		color: #ffffff;
		font-weight: 900;
		letter-spacing: 0;
		line-height: 86%;
		margin: 0;
		display: inline;
	}

	img {
		display: inline-block;
		margin: 0;
		width: 70px;
		height: 70px;
		margin-left: 10px;
		/* margin-bottom: 10px; */
	}

	@media (max-width: 1280px) {
		left: 80px;
		top: 100px;
		h2 {
			font-size: 100px;
		}
	}

	@media (max-width: 1024px) {
		left: 40px;
		top: 60px;
		width: 320px;
		h2 {
			font-size: 80px;
			font-weight: 700;

		}
	}

	@media (max-width: 768px) {
		left: 30px;
		top: 40px;
		width: 270px;
		h2 {
			font-size: 60px;
			font-weight: 700;
		}

		img{
			height: 27px;
			width: 27px;
		}
	}

	@media (max-width: 320px) {
		left: 25px;
		top: 60px;
		width: 180px;
		h2 {
			font-size: 40px;
			font-weight: 700;

		}
	}
`;

export const WatchNow = styled.div`
	width: 281px;
	height: 117px;
	background-color: #003057;
	font-size: 20px;
	font-weight: normal;
	letter-spacing: -0.29px;
	line-height: 100%;
	color: white;
	position: absolute;
	bottom: 20%;
	right: 12%;
	/* bottom: 190px;
	right: 165px; */

	img {
		position: absolute;
		top: 0;
		transform: translateY(-50%) translateX(50%);
		right: 0;

		margin: 0;
		width: 70px;
		height: 70px;
	}

	p {
		padding: 30px 40px;
		margin: 0;
	}

	span {
		letter-spacing: -0.33px;
		color: #6cc24a;
	}


@media (max-width:320px) {
	width: 176px;
	height: 77px;
	font-size: 14px;
line-height:16px;
bottom: 100px;
	right: 50px;
	img {
		height: 36px;
		width: 36px;
	}
	p {
		padding: 14px 20px;
	}

}

`;


export const KnowMore = styled.div`
	background-color: #0047bb;
	width: 100%;
	height: 90px;
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
	justify-items: center;
	color: white;

	img {
		width: 11px;
		height: 11px;
		margin: 10px 0;
	}

	h1 {
		font-size: 22px;
		font-weight: normal;
	}
	@media (max-width: 320px) {
		height: 63px;
		h1 {
		font-size: 16px;
	}
	}
`;