import styled from 'styled-components';

export const Wrapper = styled.div`
	background: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	position: relative;

	p {
		font-size: 14px;
	}

	span, a {
		color: #0047BB;
	}

	img {
		margin: 32px;
		height: 30px;
	}

	@media (max-width: 1024px) {
		/* img {
			width: 140px;
		} */
	}

	@media (max-width: 768px) {
		z-index: 2;

		/* img {
			width: 140px;
		} */
	}
	@media (max-width: 320px) {
		height: 60px;
		/* img {
			width: 100px;
			margin: 20px;
		} */
	}

	
`;
