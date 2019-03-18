import React, { Component } from 'react';
import { Wrapper, KnowMore } from './style.js';
import './slick.css';
import './slick-theme.css';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import Form from './form.js';
import upArrow from '../../images/up-arrow.svg';
import Slide from './slide.js';
import VideoOverlay from './videoOverlay.js';

class HeaderCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formOpen: false,
			videoOpen: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.videoClick = this.videoClick.bind(this);
		this.escFunction = this.escFunction.bind(this);

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
			this.setState({
				videoOpen: false
			});
		}
	}

	videoClick() {
		const currentStatus = this.state.videoOpen;
		this.setState(
			{
				videoOpen: !currentStatus
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
	render() {
		console.log(this.props);

		const settings = {
			dots: true,
			infinite: true,
			fade: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Wrapper>
				<VideoOverlay
					escFunction={this.escFunction}
					videoClick={this.videoClick}
					videoOpen={this.state.videoOpen}
				/>
				<Slider ref={(c) => (this.slider = c)} {...settings}>
					<Slide
						videoClick={this.videoClick}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Hear more about the defining moments in Ciara’s career, and the difference her clerkship made."
					>
						<Img fluid={this.props.image1.childImageSharp.fluid} critical fadeIn={false} />
					</Slide>
					<Slide
						videoClick={this.videoClick}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Find out more about Daniels thoughts on innovation in the legal industry."
					>
						<Img fluid={this.props.image2.childImageSharp.fluid} />
					</Slide>

					<Slide
						whiteTitle
						videoClick={this.videoClick}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Discover why Sean chose to start his career at Gilbert + Tobin, and why its workplace culture makes such a difference."
					>
						<Img fluid={this.props.image3.childImageSharp.fluid} />
					</Slide>

					<Slide
						videoClick={this.videoClick}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Discover how Kaushalya balances her career as a successful lawyer and the needs of her family."
					>
						<Img fluid={this.props.image4.childImageSharp.fluid} />
					</Slide>

					<Slide
						videoClick={this.videoClick}
						videoOpen={this.state.videoOpen}
						next={this.next}
						previous={this.previous}
						text="Hear about some of Courtney’s unique learning opportunities, and why she chose Gilbert + Tobin in Perth."
					>
						<Img fluid={this.props.image5.childImageSharp.fluid} />
					</Slide>

					<Slide
						videoClick={this.videoClick}
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
					<h1>WANT TO KNOW MORE?</h1>
				</KnowMore>

				<Form handleClick={this.handleClick} formOpen={this.state.formOpen} />
			</Wrapper>
		);
	}
}

// const Image4 = () => (
// 	<StaticQuery
// 		query={graphql`
// 			query asdffff {
// 				placeholderImage: file(relativePath: { eq: "kaushalya-4.jpg" }) {
// 					childImageSharp {
// 						fluid(maxWidth: 1440) {
// 							...GatsbyImageSharpFluid
// 						}
// 					}
// 				}
// 			}
// 		`}
// 		render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
// 	/>
// );

// const Image5 = () => (
// 	<StaticQuery
// 		query={graphql`
// 			query asdfasdf {
// 				placeholderImage: file(relativePath: { eq: "courtney-5.jpg" }) {
// 					childImageSharp {
// 						fluid(maxWidth: 1440) {
// 							...GatsbyImageSharpFluid
// 						}
// 					}
// 				}
// 			}
// 		`}
// 		render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
// 	/>
// );

// const Image6 = () => (
// 	<StaticQuery
// 		query={graphql`
// 			query  fasdf{
// 				placeholderImage: file(relativePath: { eq: "jenny-6.jpg" }) {
// 					childImageSharp {
// 						fluid(maxWidth: 1440) {
// 							...GatsbyImageSharpFluid
// 						}
// 					}
// 				}
// 			}
// 		`}
// 		render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
// 	/>
// );
export default HeaderCarousel;
