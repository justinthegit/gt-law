import React, { Component } from 'react';
import { Wrapper, KnowMore } from './style.js';
import './slick.css';
import './slick-theme.css';
import Slider from 'react-slick';
import Img from 'gatsby-image';

import Form from './form.js';
import upArrow from '../../images/up-arrow.svg';
import Slide from './slide.js';
import VideoOverlay from './videoOverlay.js';

const videoURLs = [ 'https://vimeo.com/326736047', 'https://vimeo.com/326736517', 'https://vimeo.com/326736569', 'https://vimeo.com/326736998', 'https://vimeo.com/326736668', 'https://vimeo.com/326737082' ];

class HeaderCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formOpen: false,
			videoOpen: false,
			videoURL: videoURLs[0],
			videoPlaying : false
		};

		this.handleClick = this.handleClick.bind(this);
		this.closeVideo = this.closeVideo.bind(this);

		this.openVideo = this.openVideo.bind(this);
		this.escFunction = this.escFunction.bind(this);
		this.slideChanged = this.slideChanged.bind(this);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	handleClick() {
		const currentStatus = this.state.formOpen;
		this.setState(
			{
				formOpen: !currentStatus
			},
			() => console.log(this.state.formOpen)
		);
	}

	escFunction(event) {
		if (event.keyCode === 27) {
			this.closeVideo();
		} else {
			return null;
		}
	}


	openVideo() {

		this.setState(
			{
				videoOpen: true,
				videoPlaying: true
			},
			() => console.log(this.state.videoOpen)
		);
	}

	closeVideo() {
		// this.vimeo.destroy();
		//this.vimeo.unload();

		this.setState(
			{
				videoOpen: false,
				videoPlaying: false
			},
			() => console.log(this.state.videoOpen)
		);
	}

	next() {
		this.slider.slickNext();
	}

	previous() {
		this.slider.slickPrev();
	}

	slideChanged(afterIndex) {

		setTimeout( () => { this.setState({
			videoURL: videoURLs[afterIndex]
		}); }, 10 );

	}

	render() {
		// console.log(this.props);

		const settings = {
			dots: true,
			infinite: true,
			fade: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			afterChange: this.slideChanged
		};
		return (
			<Wrapper>
				<VideoOverlay
					videoURL={this.state.videoURL}
					escFunction={this.escFunction}
					openVideo={this.openVideo}
					closeVideo={this.closeVideo}
					setVideo={this.setVideo}
					videoOpen={this.state.videoOpen}
					videoPlaying={this.state.videoPlaying}
				/>
				<Slider ref={(c) => (this.slider = c)} {...settings}>
					<Slide
						openVideo={this.openVideo}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Hear more about the defining moments in Ciara’s career, and the difference her clerkship made."
					>
						<Img fluid={this.props.image1.childImageSharp.fluid} critical fadeIn={false} />
					</Slide>
					<Slide
						openVideo={this.openVideo}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Find out more about Daniel's thoughts on innovation in the legal industry."
					>
						<Img fluid={this.props.image2.childImageSharp.fluid} />
					</Slide>

					<Slide
						whiteTitle
						openVideo={this.openVideo}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Discover why Sean chose to start his career at Gilbert + Tobin, and why its workplace culture makes such a difference."
					>
						<Img fluid={this.props.image3.childImageSharp.fluid} />
					</Slide>

					<Slide
						openVideo={this.openVideo}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Discover how Kaushalya balances her career as a successful lawyer and the needs of her family."
					>
						<Img fluid={this.props.image4.childImageSharp.fluid} />
					</Slide>

					<Slide
						openVideo={this.openVideo}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Hear about some of Courtney’s unique learning opportunities, and why she chose Gilbert + Tobin in Perth."
					>
						<Img fluid={this.props.image5.childImageSharp.fluid} />
					</Slide>

					<Slide
						openVideo={this.openVideo}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Jenny explains how mentoring has played a major role in her career and why she’s always learning."
					>
						<Img fluid={this.props.image6.childImageSharp.fluid} />
					</Slide>
				</Slider>

				<KnowMore onClick={() => this.handleClick()}>
					<img src={upArrow} alt="" />
					<h1>Want to know more about our clerkship experience?</h1>
				</KnowMore>

				<Form handleClick={this.handleClick} formOpen={this.state.formOpen} />
			</Wrapper>
		);
	}
}

export default HeaderCarousel;
