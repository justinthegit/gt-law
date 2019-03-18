import styled from 'styled-components';

export const BlueWrapper = styled.div`
	height: 735px;
	width: 100%;
	background-color: #0047bb;

	@media (max-width: 1024px) {
		height: 100%;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 80px 120px 0 120px;

	h1 {
		font-size: 38px;
		color: white;
		margin-bottom: 60px;
		font-weight: normal;
	}

	@media (max-width: 1280px) {
		padding: 80px 100px 0 100px;
	}

	@media (max-width: 1024px) {
		padding: 80px 60px 0 60px;
		h1 {
			margin-bottom: 10px;
		}
	}

	@media (max-width: 768px) {
		padding: 50px 40px 10px 40px;
	
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 26px;
		}
		padding: 30px 30px 10PX 30px;
	}
`;

export const AreasContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1180px;
`;

export const AreasRow = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	/* justify-content: space-between; */

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}


`;

export const HorizontalLine = styled.div`
	height: 1px;
	width: 100%;
	color: grey;
	background-color: #d8d8d8;
	margin: ${(props) => (props.desktop ? '50px 0' : props.mobile ? '30px 0' : null)};
	display: ${(props) => (props.desktop ? 'inline-block' : props.mobile ? 'none' : null)};

	@media (max-width: 1024px) {
		display: ${(props) => (props.desktop ? 'none' : props.mobile ? 'inline-block' : null)};
		margin: ${(props) => (props.mobile ? '20px 0' : null)};

	}


	@media (max-width: 480px) {
		margin: ${(props) => (props.mobile ? '18px 0' : null)};
	}
`;

//area.js

export const AreaWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position:relative;
	justify-content:space-between;

	:hover {
		span{
			text-decoration: underline;
		}
	}
	h1 {
		font-size: 28px;
		color: white;
		margin-bottom: 13px;
		max-width: 240px;
	}

	a {
		text-decoration:none;

		:before {
			content:'';
			display:block;
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			z-index:0;
		}
	}


	span {
		font-size: 18px;
		color: white;
		font-weight: normal;
		margin-right: 10px;

	
	}

	img {
		height: 17px;
		width: 17px;
		margin: 0;
		transform: translateY(3px);
	}

	@media (max-width: 1280px) {

		a {
		height: auto;
	}
		h1 {
			font-size: 22px;
			padding-right: 30px;
		}
	}


	@media (max-width: 1024px) {
		flex-direction: row;
			justify-content: space-between;
			align-items: center;

		h1 {
			margin: 0;
			font-size: 25px;
			margin-right: 15px;
			max-width: 100%;
			width: 100%;
			padding:0;




		}
		img {
			height: 30px;
			width: 30px;
		}

		span {
				display: none;
			}
	}

	@media (max-width: 480px) {
		height: 17px;
		h1 {
			margin: 0;
			font-size: 16px;
			margin-right: 15px;
			padding:0;
		}
		img {
			height: 17px;
			width: 17px;

		}
	}

	@media (max-width: 320px) {
		h1 {
			margin-right: 0;
			padding-right:10px;
		}
	}
`;
