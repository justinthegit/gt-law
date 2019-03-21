import styled from 'styled-components';

export const Wrapper = styled.div`
	background: white;
	display: flex;
	flex-direction: row;
	/* align-items: center; */
	justify-content: center;
	height: 100%;
	width: 100%;
	position: relative;
	margin-top: 50px;

	p {
		font-size: 14px;
		font-weight: 300;
		letter-spacing: -0.21px;
		align-self: flex-end;
		padding-left: 35px;
		font-weight: normal
	}

	span,
	a {
		color: #0047bb;
		font-weight: 500;
		white-space: nowrap;

	}

	a.tel {
		text-decoration: none;
	}

	img {
		height: 30px;
		min-width: 95px;
	}

	@media (max-width: 1280px) {
		padding: 0 60px;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		text-align: center;
		padding:0;
		margin-top: 28px;
		p {
			order: -1;
			padding: 0 30px;

		}

		img {
			order: 2;
		}
	}
`;
