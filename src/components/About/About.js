import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import Img from 'gatsby-image';
import {
	Wrapper,
	VideoContainer,
	QuoteWrapper,
	InfoWrapper,
	ImgWrapper,
	Thumbnail,
	VideoWrapper,
	ImagesWrap,
	ImageColumn,
	Link1,
	Link2,
	Link3,
	Link4,
	Link5,
	Link6,
	Link7,
	Link8,
	Link9,
	Link10,
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
					Gilbert + Tobin is a leading transactions, regulatory and disputes law firm, committed to outstanding
					citizenship.
				</p>
				<p className="last">
					We guide our clients through defining moments in their business, and play a significant role in many
					of Australia’s market-shaping deals.
				</p>

				<InfoWrapper>
					<ImagesWrap>
						<ImageColumn>
							<Img fluid={this.props.info1.childImageSharp.fluid} />
							<Link1 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/about-us" />
							<Link2 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gilbert-tobin-ranked-tier-1-across-eight-practice-areas-legal500-asia-pacific" />
							<Link3 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/people" />
							<Link4 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gt-steps-industry-leading-genderequality-commitments-targeting-40-female-partners-2023" />
						</ImageColumn>
						<ImageColumn>
							<Img fluid={this.props.info2.childImageSharp.fluid} />
							<Link5 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gt-steps-industry-leading-genderequality-commitments-targeting-40-female-partners-2023" />
						</ImageColumn>
						<ImageColumn>
							<Img fluid={this.props.info3.childImageSharp.fluid} />
							<Link6 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gilbert-tobin-ranked-outstanding-firm-asialaw-profiles-2019" />
							<Link7 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gt-celebrates-success-2018-lawyers-weekly-australian-law-awards" />
							<Link8 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gt-once-again-named-employer-choice-gender-equality" />
							<Link9 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gt-named-law-firm-year-corporate-law-private-equity-law-best-lawyers-australia-2020" />
							<Link10 target="_blank" rel="noopener noreferrer" href="https://www.gtlaw.com.au/news/gt-named-law-firm-year-corporate-law-private-equity-law-best-lawyers-australia-2020" />
						</ImageColumn>
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
							<ReactPlayer
								url="https://vimeo.com/325580665"
								playing={this.state.playClicked}

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
