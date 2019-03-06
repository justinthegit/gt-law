import styled from 'styled-components';

export const HeroWrapper = styled.div`
	position: relative;
	img {
		height: 100%;
		width: 100%;
    margin-bottom:0;
	}
`;

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-content: center;
align-items:center;
margin-top: 80px;

	p {
		max-width: 700px;
		text-align: center;
		font-weight: 700;
		font-size: 28px;
		color: #003057;
		letter-spacing: -0.41px;
		line-height: 32px;
		margin-bottom: 30px;
		padding: 0 40px;
	}

  span {
    font-weight: 700;
    font-size: 18px;
    color: #0047BB;
    letter-spacing: -0.26px;
    line-height: 22px;
    margin-right: 7px;
  
  }

  img {
    height: 17px;
    margin:0;
  }
`;
