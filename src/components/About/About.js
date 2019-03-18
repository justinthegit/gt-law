import React, { Component } from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { Wrapper, VideoContainer, QuoteWrapper, InfoWrapper } from './style.js';

class About extends Component {
	render() {
		return (
			<Wrapper>
			
				<p>
					G+T is a leading transactions, regulatory and disputes law firm, committed to outstanding
					citizenship.
				</p>
				<p>
					We guide our clients through defining moments in their business, and play a significant role in
					manyof Australia’s market-shaping deals.
				</p>

				<InfoWrapper>
				<Img fluid={this.props.info1.childImageSharp.fluid} />

				<Img fluid={this.props.info2.childImageSharp.fluid} />
				<Img fluid={this.props.info3.childImageSharp.fluid} />


				</InfoWrapper>

				{/* <img src="https://res.cloudinary.com/avenue/image/upload/v1551840644/placeholder_is2al3.jpg" alt="" /> */}
				<VideoContainer>
					<QuoteWrapper>
						<p>“We have exceptional people stepping out of the lift every day – because we know if we get this right, the rest looks after itself.”</p>
						<span>Danny Gilbert, Managing Partner</span>
					</QuoteWrapper>

						<img src="https://res.cloudinary.com/avenue/image/upload/v1551841613/about-video_ehwkae.jpg" alt=""/>
				</VideoContainer>

			</Wrapper>
		);
	}
}



export default About;
