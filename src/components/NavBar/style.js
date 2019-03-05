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
		img {
			width: 100px;
			margin: 20px;
		}
	}
`;

export const Nav = styled.nav`
	padding-right: 30px;
	a {
		padding: 0 25px;
		font-size: 16px;
		color: #0047bb;
		letter-spacing: -0.24px;
		text-align: center;
		text-decoration: none;
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

export const HamburgerWrapper = styled.div`
	display: none;
	margin-right: 32px;

	@media (max-width: 768px) {
		display: inline-block;
		width: 40px;
		height: 24px;
		position: relative;
	}
`;

export const FirstLine = styled.span`
	display: block;
	height: 2px;
	width: 100%;
	background: #0047bb;
	transition: 0.4s ease;
	transform-origin: center center 0px;
	position: absolute;
	margin-top: -1px;
	transform: ${(props) =>
		props.isOpen ? 'translate3d(0, 12px, 0) rotate(45deg)' : 'translate3d(0, 0, 0) rotate(0deg)'};
`;

export const SecondLine = styled(FirstLine)`
			transition: .1s ease-out;
			opacity: ${(props) => (props.isOpen ? 0 : 1)};
			top: 12px;
`;

export const ThirdLine = styled(FirstLine)`
			transform: ${(props) =>
				props.isOpen ? 'translate3d(0, 12px, 0) rotate(-45deg)' : 'translate3d(0, 24px, 0) rotate(0deg)'};
		display:block;

`;

export const MobileNav = styled.div`
	padding: 40px 0;
	background: #D0D0CE;
	display: none;
	position: relative;
	z-index: -2;
	transition: 1s ease;
	transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
	@media (max-width: 768px) {
		display: block;
		padding: 40px 30px;
	}
`;

export const NavItem = styled.div`
	display: block;
	color: red;
	text-align: center;
	padding: 25px 0;

	a {
		text-decoration: none;
		font-size: 24px;
		color: #0047bb;
		letter-spacing: -0.35px;
		font-weight: 700;
		text-align: center;
		line-height: 28px;
	}
`;

export const WhiteLine = styled.div`
display:block;
color:red;
height:10px;
width: 100%;

`;