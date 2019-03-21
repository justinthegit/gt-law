import styled from 'styled-components';
import nextBtn from '../../images/btn-next.svg';
import prevBtn from '../../images/btn-prev.svg';


export const Wrapper = styled.div`
	margin:0 auto;
	max-width: 1440px;
	position: relative;
	height: 810px;
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

	@media (max-width: 768px) {
		img {
			object-position: 34% center !important;
		}
	}

	@media (max-width: 480px) {
		img {
			object-position: 40% center !important;
		}
	}

	@media (max-width: 320px) {
		img {
			object-position: 32% center !important;
		}
	}
`;

export const Title = styled.div`
	position: absolute;
	left: 120px;
	top:128px;
	width: 520px;

	h2 {
		font-size: 120px;
		color: #ffffff;
		font-weight: 900;
		letter-spacing: 0;
		line-height: 86%;
		margin: 0;
		display: inline;
		color: ${(props) => (props.whiteTitle ? 'white' : '#003057')};
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
		top:128px;
		h2 {
			font-size: 100px;
		}

		img {
			margin-bottom: 0px;
		}
	}

	@media (max-width: 1024px) {
		left: 40px;
		top:128px;
		width: 320px;
		h2 {
			font-size: 80px;
		}

		img {
			height: 50px;
			width: 50px;
			margin-bottom: 3px;
		}
	}

	@media (max-width: 480px) {
		left: 30px;
		top:60px;
		width: 270px;
		h2 {
			font-size: 50px;
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

		h2 {
			font-size: 40px;
		}
	}
`;

export const WatchNow = styled.div`
	width: 281px;
	height: auto !important;
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

	:hover {
		span {
			/* border-bottom: 2px solid green; */
			button {
				text-decoration:underline;
			}
			
		}
	}

	img {
		position: absolute;
		top: 0;
		transform: translateY(-50%) translateX(50%);
		right: 0;
		margin: 0;
		width: 70px;
		height: 70px;
	}

	div {
		padding: 20px 24px;
		margin: 0;
		display: inline-block;

		p {
			display: inline-block;
			margin-bottom: 0;
			line-height: 100%;
			font-weight: 500;
		}
	}

	span {
		display: inline-block;
		margin-bottom: 0;

		button {
			letter-spacing: -0.33px;
			color: #6cc24a;
			text-decoration: none;
			padding: 0;
			background: transparent;
			border: none;
			cursor: pointer;
			outline: none;

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

		img {
			position: relative;
			height: 15px;
			width: 15px;
			display: inline-block;
			margin-right: 5px;
			margin-top: 8px;
			margin-left: 4px;
			vertical-align: middle;
			transform: translateY(-50%);
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
		width: 182px !important;
		font-size: 14px;
		line-height: 16px;
		img {
			height: 36px;
			width: 36px;
		}

		div {
			padding: 12px 15px;
			img {
				height: 10px;
				width: 10px;
				margin-right: 4px;
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
		font-weight: 700;
	}
	@media (max-width: 320px) {
		height: 63px;
		h1 {
			font-size: 16px;
		}
	}
`;

export const ButtonPrevious = styled.button`
	background: transparent;
	border: none;
	outline: none;
	position: absolute;
	width: 50%;
	height: 100%;
	left: 0;
	top: 0;
	content: "";
	z-index: 5;
	cursor: url(${prevBtn}), auto;
`;

export const ButtonNext = styled(ButtonPrevious)`
left:50%;
cursor: url(${nextBtn}), auto;
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
	z-index: 5;

	@media (max-width: 480px) {
		height: 432px;
	}
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	justify-content:center;
	justify-items:center;
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

export const OnSubmission = styled.div`
max-width: 387px;
height: 500px;
display:  ${(props) => (props.isSubmitted ? 'grid' : 'none')};
z-index: 1000;
place-items: center;

p {
	font-size: 30px;
	font-weight: 700;
	text-align:center;
	color:white;
}

@media (max-width: 768px) {
		width: 360px;
		font-size: 26px;
 p {
	font-size: 26px;

 }
	}
	

	@media (max-width: 480px) {
		width: 260px;
		height: 432px;
		p {
			font-size: 20px;

		}


	}
`;

export const FormWrap = styled.form`
	color: white;
	max-width: 387px;
	display: flex;
	flex-direction: column;
	align-content: center;
		/* visibility:  ${(props) => (props.isSubmitted ? 'hidden' : 'visible')}; */
		display:  ${(props) => (props.isSubmitted ? 'none' : 'null')};


	p {
		font-weight: normal;
		font-size: 20px;
		color: #ffffff;
		letter-spacing: -0.27px;
		text-align: center;
		line-height: 110%;
		font-weight:700;

		:nth-of-type(2) {
			opacity: 1;
			font-size: 12px;
			color: #ffffff;
			letter-spacing: -0.18px;
			line-height: 14px;
			margin: 0;
			margin-bottom: 20px;
			font-weight: 500;

			a {
				font-weight: 700;
				color: white;
			
			}

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
	/* padding: 5px 0 5px 18px; */
	padding: 8px 0 8px 20px;

	margin: 7px 0;
	outline: 0;
	border: none;

	::placeholder {
		color: #0047bb;
		font-weight: 300;
	}

	@media (max-width: 480px) {
		margin: 5px 0;
		padding: 8px 0 8px 12px;
	}
`;

export const TextArea = styled.textarea`
	height: 115px;
	margin: 7px 0 20px 0;
	padding: 12px 0 7px 20px;
	outline: 0;
	border: none;

	::placeholder {
		color: #0047bb;
		max-width: 180px;
		font-weight: 300;
		line-height: 100%;

	}
	@media (max-width: 480px) {
		margin: 5px 0 12px 0;
		padding: 12px 0 5px 16px;
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

//videoOverlay.js

export const VideoOverlayWrapper = styled.div`
	display: block;
	background-color: black;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 20;
	transition: .5s ease-in-out;
	opacity: ${(props) => (props.videoOpen ? '1' : '0')};
	z-index: ${(props) => (props.videoOpen ? '10000' : '-7')};

	> div {
		position: relative;
		height: 100%;
	}
	iframe {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const VideoClose = styled(Cross)`
top: 40px;
right: 40px;
z-index: 21;

`;
