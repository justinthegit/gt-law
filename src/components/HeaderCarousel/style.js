import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	height: 900px;
	object-fit: contain;
	overflow: hidden;

	@media (max-width: 480px) {
		height: 600px;
	}

	@media (max-width: 320px) {
		height: 428px;
	}
`;
export const HeroImg = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	margin-bottom: 0px;

	@media (max-width: 480px) {
	}
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
	}

	@media (max-width: 1280px) {
		left: 80px;
		top: 160px;
		h2 {
			font-size: 100px;
		}
	}

	@media (max-width: 1024px) {
		left: 40px;
		top: 160px;
		width: 320px;
		h2 {
			font-size: 80px;
			font-weight: 700;
		}

		img {
			height: 50px;
			width: 50px;
		}
	}

	@media (max-width: 480px) {
		left: 30px;
		top: 40px;
		width: 270px;
		h2 {
			font-size: 40px;
			font-weight: 700;
		}

		img {
			height: 27px;
			width: 27px;
		}
	}

	@media (max-width: 320px) {
		left: 25px;
		top: 60px;
		width: 180px;
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
	/* bottom: 20%;
	right: 12%; */
	bottom: 190px;
	right: 165px;

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

	@media (max-width: 768px) {
		right: 86px;
	}

	@media (max-width: 768px) {
		right: 86px;
	}
	@media (max-width: 480px) {
		right: 55px;
		bottom: 136px;
		height: 77px;
		width: 176px;
		font-size: 14px;
		line-height: 16px;
		img {
			height: 36px;
			width: 36px;
		}

		p {
			padding: 14px 20px;
		}
	}

	@media (max-width: 480px) {
		right: 48px;
		bottom: 103px;
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

//form.js

export const FormContainer = styled.div`
	background-color: #0047bb;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	bottom: 0;
	transition: 0.6s ease;
	transform: ${(props) => (props.formOpen ? 'translateY(0)' : 'translateY(100%)')};
	padding-top: 30px;

	@media (max-width: 480px) {
		height: 432px;
	}
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 570px;

	div {
		position: absolute;
		top: 0;
		right: 0;
	}

	@media (max-width: 768px) {
		width: 452px;
	}


	@media (max-width: 480px) {
		width: 300px;
	}


`;

export const FormWrap = styled.form`
	color: white;
	max-width: 387px;
	display: flex;
	flex-direction: column;
	align-content: center;
	p {
		font-weight: normal;
		font-size: 20px;
		color: #ffffff;
		letter-spacing: -0.27px;
		text-align: center;
		line-height: 110%;

		:nth-of-type(2) {
			opacity: 0.58;
			font-size: 12px;
			color: #ffffff;
			letter-spacing: -0.18px;
			line-height: 14px;
			margin: 0;
			margin-bottom: 20px;

			@media (max-width: 480px) {
				font-size: 10px;
				letter-spacing: -0.1px;
				line-height: 10px;
				margin-bottom: 12px;
			}
		}

		@media (max-width: 480px) {
			font-size: 16px;
			letter-spacing: .1px;
			line-height: 120%;

		}
	}

	@media (max-width: 768px) {
		width: 360px;
	}

	@media (max-width: 480px) {
		width: 260px;
	}
`;

export const Input = styled.input`
	padding: 5px 0 5px 18px;
	margin: 7px 0;
	outline: 0;


	::placeholder {
		color: #0047bb;
	}

	@media (max-width: 480px) {
		margin: 5px 0;
		padding: 5px 0 5px 12px;
		}
`;

export const TextArea = styled.textarea`
	height: 109px;
	margin: 7px 0 20px 0;
	padding: 10px 0 5px 18px;
	outline: 0;


	::placeholder {
		color: #0047bb;
		max-width: 180px;
	}
	@media (max-width: 480px) {
		margin: 5px 0 12px 0;
		padding: 8px 0 5px 16px;
		}
`;

export const Button = styled.button`
	border: 3px solid white;
	background: transparent;
	color: white;
	width: 122px;
	height: 37px;
	font-size: 20px;
	text-align: center;
	align-self: center;
	margin-bottom: 20px;

	@media (max-width: 480px) {
		margin-bottom: 0;
		}
`;
