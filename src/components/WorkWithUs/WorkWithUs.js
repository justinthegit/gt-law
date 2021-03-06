import React, { Component } from 'react';
import { HeroWrapper, TextWrapper, ReallyLike, BgImg } from './style.js';
import arrowIcon from '../../images/arrow-in-circle.svg';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

class WorkWithUs extends Component {
	render() {
		return (
			<div>
				<HeroWrapper>
					<ReallyLike>
						<h2>WHAT IT's REALLY LIKE TO WORK AT Gilbert + Tobin</h2>
						<p>
							Working at G+T means working directly with recognised leaders in their fields,
							in a firm that makes a difference for its clients and its people. The work is challenging,
							interesting and rewarding, as these graduates reveal.{' '}
						</p>
						<a  target="_blank"  href="https://gradaustralia.com.au/graduate-employers/gilbert-tobin/graduate-stories">
							<span>gradaustralia.com.au</span>
							<img src={arrowIcon} alt="" />
						</a>
					</ReallyLike>

					<BgImg>
						<Image />
					</BgImg>
				</HeroWrapper>
				<TextWrapper>
					<p>If you’re ready for more, apply for one of our clerkship programs</p>

					<div>
						<p>
							Sydney applications open <span>11 June 2019</span> and close <span>14 July 2019</span>
						</p>

						<p>
							Melbourne applications open <span>8 July 2019</span> and close <span>11 August 2019</span>
						</p>

						<p>
							Perth applications open <span>15 July 2019</span> and close <span> 4 August 2019</span>
						</p>
					</div>

					<a  target="_blank"  href="https://fsr.cvmail.com.au/gtau/main.cfm?srxksl=1">
						<span>Apply now</span>
						<img src={arrowIcon} alt="" />
					</a>
				</TextWrapper>
			</div>
		);
	}
}

const Image = () => (
	<StaticQuery	
		query={graphql`
			query {
				placeholderImage: file(relativePath: { eq: "clerkship.jpg" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1440) {
							...GatsbyImageSharpFluid_withWebp_noBase64
						}
					}
				}
			}
		`}
		render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
	/>
);
export default WorkWithUs;
