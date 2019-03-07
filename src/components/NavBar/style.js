import styled from 'styled-components';

export const Wrapper = styled.div`
	background: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	border: 1px dashed red;
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
	padding-right: 30px;
	z-index: 2;

	a {
		padding: 0 25px;
		font-size: 16px;
		color: #0047bb;
		letter-spacing: -0.24px;
		text-align: center;
		text-decoration: none;
		font-weight: 700;
	}

	@media (max-width: 1024px) {
		padding-right: 15px;

		a {
			font-size: 13px;
			padding: 0 15px;
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
	height: 900px;

	background: #d0d0ce;
	display: none;
	transition: 1s ease;
	transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
	}

	@media (max-width: 480px) {
		height: 600px;
	}

	@media (max-width: 320px) {
		height: 428px;
	}
`;

export const NavItem = styled.div`
	display: block;
	color: red;
	padding: 60px 0px;
	max-width: 360px;

	text-align: center;

	a {
		text-decoration: none;
		font-size: 40px;
		color: #0047bb;
		letter-spacing: -0.35px;
		font-weight: 700;
		text-align: center;
		line-height: 120%;
	}

	@media (max-width: 480px) {
		max-width: 240px;

		padding: 50px 0px;
		a {
			font-size: 26px;
		}
	}

	@media (max-width: 320px) {
		max-width: 220px;

		padding: 30px 0px;
		a {
			font-size: 24px;
		}
	}
`;

export const WhiteLine = styled.div`
	display: block;
	background-color: white;
	height: 1px;
	width: 80%;
	z-index: 3;
`;
