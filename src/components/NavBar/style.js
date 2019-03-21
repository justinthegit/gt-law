import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1440px;
	margin:0 auto;
	background: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	position: relative;


	img {
		margin: 32px;
	}

	@media (max-width: 1024px) {
		img {
			width: 140px;
		}
	}

	@media (max-width: 768px) {
		z-index: 2;

		img {
			width: 140px;
		}
	}
	@media (max-width: 320px) {
		height: 60px;
		img {
			width: 100px;
			margin: 20px;
		}
	}
`;

export const Nav = styled.nav`
	/* padding-right: 30px; */
	margin-right: -10px;
	z-index: 2;

	a {
		/* padding: 0 25px; */
		margin-right : 50px;
		font-size: 16px;
		color: #0047bb;
		letter-spacing: -0.24px;
		text-align: center;
		text-decoration: none;
		font-weight: 700;
		position: relative;

		:hover {
			::after {
				content: "";
				position: absolute;
				bottom: -3px;
				height: 4px;
				width: 100%;
				left:0;

				background-color: #6cc24a;
			}
		}


	}

	@media (max-width: 1024px) {
		padding-right: 10px;

		a {
			font-size: 13px;
			margin-right : 30px;
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Clickable = styled.div`
	display: none;
	@media (max-width: 768px) {
		display: inline-block;
	}
`;

export const HamburgerWrapper = styled.div`
	display: none;
	margin-right: 32px;

	@media (max-width: 768px) {
		display: inline-block;
		width: 24px;
		height: 12px;
		position: relative;
	}
`;

export const FirstLine = styled.span`
	display: block;
	height: 3px;
	width: 100%;
	background: #0047bb;
	transition: 0.4s ease;
	transform-origin: center center 0px;
	position: absolute;
	margin-top: -1px;
	transform: ${(props) =>
		props.isOpen ? 'translate3d(0, 6px, 0) rotate(45deg)' : 'translate3d(0, 0, 0) rotate(0deg)'};
`;

export const SecondLine = styled(FirstLine)`
			transition: .1s ease-out;
			opacity: ${(props) => (props.isOpen ? 0 : 1)};
			top: 6px;
`;

export const ThirdLine = styled(FirstLine)`
			transform: ${(props) =>
				props.isOpen ? 'translate3d(0, 6px, 0) rotate(-45deg)' : 'translate3d(0, 12px, 0) rotate(0deg)'};
		display:block;

`;

export const MobileNav = styled.div`
	z-index: 1;
	position: absolute;
	width: 100%;
	height: 428px;

	background: #d0d0ce;
	display: none;
	transition: 0.6s ease;
	transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
	}
`;

export const NavItem = styled.div`
	display: block;
	color: red;
	font-weight: 700;
	max-width: 220px;
	padding: 30px 0px;

	text-align: center;

	a {
		text-decoration: none;
		font-size: 24px;
		color: #0047bb;
		letter-spacing: -0.35px;
		text-align: center;
		line-height: 120%;
	}
`;

export const WhiteLine = styled.div`
	display: block;
	background-color: white;
	height: 1px;
	width: 80%;
	max-width: 260px;

	z-index: 3;
`;
