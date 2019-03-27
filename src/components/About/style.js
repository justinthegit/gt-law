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
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0 auto;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  width: 100%;
  height: auto;
  padding: 65px 77px;
  background-color: #003057;
  margin-bottom: 70px;

  @media (max-width: 1024px) {
    padding: 35px 47px;
  }

  @media (max-width: 768px) {
    padding: 35px 20px;
    margin-bottom: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 20px 20px;
    margin-bottom: 30px;

    /* padding: 40px 30px 0 30px; */
  }
`

export const ImageColumn = styled.div`
  width: 100%;
  height: auto;
  /* max-height: 1292px;
    max-width: 342px; */
  margin: 0;
  /* object-fit:contain; */
  margin: 0 40px;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 20px;
  }

  :nth-of-type(3) {
    img {
      object-fit: contain !important;
    }
  }
  img {
    margin-top: 0;
    margin-bottom: 0;
    /* object-fit:contain !important; */
    /* max-height: 1292px; */
  }

  @media (max-width: 480px) {
    margin: 10px 0;
  }
`

export const VideoContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  margin-right: 110px;

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
    margin-right: 60px;

    p {
      font-size: 23px;
      padding: 0 25px;
    }

    span {
      padding-right: 20px;
    }
  }

  @media (max-width: 1024px) {
    margin-right: 30px;
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

export const Link = styled.a`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  padding-bottom: 56.25%;
  top: 36.8%;
  background: red;
  opacity: 0;
  transform: translateX(-50%);
`

export const Link1 = styled(Link)`
  padding-bottom: 38.404348%;
  top: 0;
  width: 75%;
`

export const Link2 = styled(Link)`
  padding-bottom: 67.404348%;
  top: 36.8%;
  width: 79%;
`

export const Link3 = styled(Link)`
  padding-bottom: 33.404348%;
  top: 54.2%;
`
export const Link4 = styled(Link)`
  padding-bottom: 43.404348%;
  top: 91.1%;
  width: 62%;
`

export const Link5 = styled(Link)`
  padding-bottom: 48.404348%;
  top: 89.8%;
  width: 60%;
`
export const Link6 = styled(Link)`
  padding-bottom: 52.904348%;
  top: 57.9%;
  width: 100%;
`
export const Link7 = styled(Link)`
  padding-bottom: 65.904348%;
  top: 71.7%;
  width: 90%;
`
export const Link8 = styled(Link)`
  padding-bottom: 58.304348%;
  top: 88%;
  width: 85%;
`

export const Link9 = styled(Link)`
  padding-bottom: 102.404348%;
  top: 0;
  width: 80%;
`
export const Link10 = styled(Link)`
  padding-bottom: 152.404348%;
  top: 23.9%;
  width: 74%;
`
