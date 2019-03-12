import React, { Component } from 'react';
import { Wrapper, KnowMore } from './style.js';
import './slick.css';
import './slick-theme.css';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import Form from './form.js';
import upArrow from '../../images/up-arrow.svg';
import Slide from './slide.js';
import VideoOverlay from './videoOverlay.js';

class HeaderCarousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formOpen: false,
			videoOpen: false,
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

	escFunction(event){
    if(event.keyCode === 27) {
			this.setState(
				{
					videoOpen: false,
				},
			);
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
		const settings = {
			dots: true,
			infinite: true,
			fade:true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Wrapper>
				<VideoOverlay escFunction={this.escFunction} videoClick={this.videoClick} videoOpen={this.state.videoOpen}/>
				<Slider ref={c => (this.slider = c)} {...settings}>
					<Slide videoClick={this.videoClick} videoOpen={this.state.videoOpen} next={this.next} previous={this.previous} imageURL="https://res.cloudinary.com/avenue/image/upload/v1551828160/hero-img_sytpyx.jpg" text="1.  Sectado temaa vorest quad vitatur acias mvitatur acias molor."/>
					<Slide videoClick={this.videoClick} videoOpen={this.state.videoOpen} next={this.next} previous={this.previous} imageURL="https://res.cloudinary.com/avenue/image/upload/v1544061999/zimmerman_art_jrvwl2.png" text="2.  Sectado temaa vorest quad vitatur acias mvitatur acias molor."/>
					<Slide videoClick={this.videoClick} videoOpen={this.state.videoOpen} next={this.next} previous={this.previous} imageURL="https://res.cloudinary.com/avenue/image/upload/v1543211282/blog_title_1_k7rtfc.png" text="3.  Sectado temaa vorest quad vitatur acias mvitatur acias molor." />
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

export default HeaderCarousel;
