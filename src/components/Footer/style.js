import styled from 'styled-components';

export const Wrapper = styled.div`
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
