import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import Img from 'gatsby-image';
import {
	Wrapper,
	VideoContainer,
	QuoteWrapper,
	InfoWrapper,
	ImgWrapper,
	Thumbnail,
	VideoWrapper,
	ImagesWrap
} from './style.js';

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playClicked: false
		};
		this.playVideo = this.playVideo.bind(this);
	}

	playVideo() {
		this.vimeo.play();

		this.setState(
			{
				playClicked: true
			},
			() => console.log('clicked')
		);
	}

	render() {


		return (
			<Wrapper>
				<p>
					G+T is a leading transactions, regulatory and disputes law firm, committed to outstanding
					citizenship.
				</p>
				<p>
					We guide our clients through defining moments in their business, and play a significant role in many
					of Australia’s market-shaping deals.
				</p>

				<InfoWrapper>
					<ImagesWrap>
						<Img fluid={this.props.info1.childImageSharp.fluid} />

						<Img fluid={this.props.info2.childImageSharp.fluid} />
						<Img fluid={this.props.info3.childImageSharp.fluid} />
					</ImagesWrap>
				</InfoWrapper>

				<VideoContainer>
					<QuoteWrapper>
						<p>
							“We have exceptional people stepping out of the lift every day – because we know if we get
							this right, the rest looks after itself.”
						</p>
						<span>Danny Gilbert, Managing Partner</span>
					</QuoteWrapper>

					<ImgWrapper playClicked={this.state.playClicked} onClick={this.playVideo}>
						<VideoWrapper playClicked={this.state.playClicked}>
							<Vimeo
								video="325580665"
								autoplay={false}
								onReady={this._onReady.bind(this)}
							
							/>
						</VideoWrapper>

						<Thumbnail playClicked={this.state.playClicked}>
							<Img fluid={this.props.aboutVideo.childImageSharp.fluid} />
						</Thumbnail>

						<svg
							width="110px"
							height="110px"
							viewBox="0 0 110 110"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<g id="play_btn" fill="#FFFFFF">
									<g>
										<circle id="Oval-2" fillOpacity="0.4" cx="55" cy="55" r="55" />
										<polygon id="Triangle-2" points="81 55 39 77 39 33" />
									</g>
								</g>
							</g>
						</svg>
					</ImgWrapper>
				</VideoContainer>
			</Wrapper>
		);
	}

	_onReady(video) {
		// access to player in all event handlers via event.target
		// event.target.pauseVideo();

		this.vimeo = video;
	}
}

export default About;
