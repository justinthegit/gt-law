import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	height: 900px;
	object-fit: contain;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	justify-items: center;

	@media (max-width: 480px) {
		height: 600px;
	}

	@media (max-width: 320px) {
		height: 428px;
	}
`;

export const SlideWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
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
		display: inline-block !important;
		margin: 0;
		width: 70px;
		height: 70px;
		margin-left: 10px;
		margin-bottom: 7px;
	}

	@media (max-width: 1280px) {
		left: 80px;
		top: 160px;
		h2 {
			font-size: 100px;
		}

		img {
			margin-bottom: 0px;
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
			margin-bottom: 3px;
		}
	}

	@media (max-width: 480px) {
		left: 30px;
		top: 80px;
		width: 270px;
		h2 {
			font-size: 40px;
			font-weight: 700;
		}

		img {
			height: 27px;
			width: 27px;
			margin-bottom: 0px;
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
	height: 117px !important;
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
	z-index: 10;

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
		padding: 30px 37px;
		margin: 0;
		img {
			position: relative;
			height: 13px;
			width: 13px;
			display: inline-block;
			margin-right: 6px;
			margin-top: 5px;
			vertical-align: middle;
		}
	}

	span {
	
		a {
			letter-spacing: -0.33px;
			color: #6cc24a;
			text-decoration: none;

			:before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 0;
			}
		}
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
		height: 77px !important;
		width: 176px !important;
		font-size: 14px;
		line-height: 16px;
		img {
			height: 36px;
			width: 36px;
		}

		p {
			padding: 12px 15px;
			img {
			height: 10px;
			width: 10px;
			margin-right:4px;
		}
		}
	}

	@media (max-width: 320px) {
		right: 48px;
		bottom: 103px;
	}
`;

export const KnowMore = styled.button`
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
	outline: none;
	border: none;
	cursor: pointer;

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

export const ButtonPrevious = styled.a`
	position: absolute;
	width: 50%;
	height: 100%;
	left: 0;
	top: 0;
	content: "";
	z-index: 5;
	cursor: url('https://res.cloudinary.com/avenue/image/upload/v1552361772/btn-prev_ym0puc.svg') 0 10, auto;
`;

export const ButtonNext = styled(ButtonPrevious)`
left:50%;
cursor: url('https://res.cloudinary.com/avenue/image/upload/v1552361772/btn-next_wmqnqy.svg') 0 10,auto;
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
	z-index:5;

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

	@media (max-width: 768px) {
		width: 452px;
	}

	@media (max-width: 480px) {
		width: 300px;
	}
`;

export const Cross = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;

	img {
		margin: 0;
		padding: 0;
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
	cursor: pointer;
	outline: none;

	@media (max-width: 480px) {
		margin-bottom: 0;
	}
`;
