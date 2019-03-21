import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 60px 0 90px 0;
  p {
    max-width: 600px;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    color: #003057;
    letter-spacing: -0.41px;
    line-height: 32px;
    margin-bottom: 30px;
		padding: 0 0px;

		&.last {
        margin-bottom: 0;
      }
  }

  img {
    margin: 52px 0 100px 0;
  }

  @media (max-width: 768px) {
    padding: 50px 0;

    p {
      padding: 0 60px;
    }
  }

  @media (max-width: 480px) {
    padding: 40px 0;

    p {
      font-size: 16px;
      line-height: 1.2;
      letter-spacing: -0.24px;
      padding: 0 40px;
      margin-bottom: 20px;


    }

    img {
      margin: 20px 0 32px 0;
    }
  }

  @media (max-width: 320px) {
    padding: 40px 0;

    p {
      font-size: 16px;
      line-height: 18px;
      letter-spacing: -0.24px;
      padding: 0 26px;
    }
  }
`

export const ImagesWrap = styled.div`
  max-width: 1440px;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-left: 44px;
  /* grid-template-columns: repeat(3, minmax(50px, 386px));
		grid-template-rows: 1fr; */
  /* grid-gap: 25px; */

  div {
    width: 100%;
    height: 100%;
    margin: 0;
    margin-right: 55px;

    @media (max-width: 768px) {
      margin-right: 46px;
    }
    img {
      margin-top: 0;
    }

    :nth-of-type(2) {
      margin-top: -25px;
    }
    :nth-of-type(3) {
      margin-top: 40px;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 36px;
  }

  @media (max-width: 768px) {
    margin-left: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 0px;
    flex-direction: column;
    div {
      margin-right: 0;

      :nth-of-type(2) {
        margin-top: 0px;
      }
      :nth-of-type(3) {
        margin-top: 0px;
      }
    }
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: 60px;
  width: 100%;
  height: auto;
  padding: 17px 77px;
  background-color: #003057;
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    padding: 0px 47px;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    margin-bottom: 30px;

    padding: 40px 30px 0 30px;
  }
`

export const VideoContainer = styled.div`
  max-width: 1440px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 29px;
  }
`

export const ImgWrapper = styled.div`
  width: 50%;
  height: 50%;
  position: relative;

  svg {
    display: ${props => (props.playClicked ? "none" : "block")};
    margin: 0;
    padding: 0;
    position: absolute;
    margin: auto auto;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    path {
      fill: black;
    }
  }

  :hover {
    cursor: pointer;
    svg {
      circle {
        fill-opacity: 1;
      }

      polygon {
        fill: #979797;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-bottom: 38px;
    order: 1;
  }

  @media (max-width: 480px) {
    margin-bottom: 28px;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  > div,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border: 0;
  }
`

export const Thumbnail = styled.div`
	/* opacity: ${props => (props.playClicked ? "0" : "1")}; */

	z-index: ${props => (props.playClicked ? "-1000" : null)};
	/* transition: ${props =>
    props.playClicked ? "opacity 2s 0" : "opacity 2s, z-index 0 2s"}; */

	position: absolute;
	height: 100%;
	top: 0;
	left: 0;
	width: 100%;

	div {
		margin: 0;
		width: 100%;
		height: 100%;
		z-index: ${props => (props.playClicked ? "-1000" : null)};

		picture {
			z-index: ${props => (props.playClicked ? "-1000" : null)};
		}

		img {
			margin: 0;
		}
	}
`

export const QuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    max-width: 400px;
    text-align: left;
    font-weight: 700;
    font-size: 28px;
    color: #003057;
    letter-spacing: -0.41px;
    line-height: 32px;
    margin-bottom: 30px;
    margin: 0;
  }

  span {
    margin-top: 14px;
    font-weight: normal;
    font-size: 18px;
    color: #0047bb;
    letter-spacing: -0.26px;
    text-align: right;
  }

  @media (max-width: 1280px) {
    max-width: 330px;
    p {
      font-size: 23px;
      padding: 0 25px;
    }

    span {
      padding-right: 20px;
    }
  }

  @media (max-width: 768px) {
    order: 2;

    p {
      text-align: center;
      max-width: 100%;
      padding: 0;
      margin-bottom: 15px;
    }

    span {
      text-align: center;
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 16px;
      line-height: 1.2;
      letter-spacing: -0.24px;
      margin-top: 10px;
      margin-bottom: 0px;
    }

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 320px) {
    p {
      font-size: 16px;
      line-height: 18px;
    }
  }
`
