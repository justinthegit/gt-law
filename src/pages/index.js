import React from 'react';
import {Element} from 'react-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { NavBar } from '../components/NavBar';
import { HeaderCarousel } from '../components/HeaderCarousel';
import { About } from '../components/About';
import { Areas } from '../components/Areas';
import { WorkWithUs } from '../components/WorkWithUs';
import { ApplicationInfo } from '../components/ApplicationInfo';
import { Footer } from '../components/Footer';
import { graphql } from 'gatsby';

const IndexPage = ({data}) => {





	// console.log(data);

	return (
		<Layout>
			<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />

			<NavBar />
			<HeaderCarousel {...data}  />

			<Element name="about">
				<About {...data}/>
			</Element>

			<Element name="areas">
				<Areas />
			</Element>

			<Element name="aDayInTheLife">
				<WorkWithUs />
			</Element>

			<Element name="faqs">
				<ApplicationInfo />
			</Element>

			<Footer />
		</Layout>
	);
}


export default IndexPage;

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
			fluid(quality: 100, maxWidth: 1440) {
				...GatsbyImageSharpFluid_withWebp_noBase64
			}
		}

	}

`


export const query = graphql`
  query {
    image1: file(relativePath: { eq: "ciara-1.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "daniel-2.jpg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "sean-3.jpg" }) {
      ...squareImage
    }

		image4: file(relativePath: { eq: "kaushalya-4.png" }) {
      ...squareImage
    }


		image5: file(relativePath: { eq: "courtney-5.jpg" }) {
      ...squareImage
    }

		image6: file(relativePath: { eq: "jenny-6.jpg" }) {
      ...squareImage
    }

		info1: file(relativePath: { eq: "info-1.png" }) {
      ...squareImage
    }

		info2: file(relativePath: { eq: "info-2.png" }) {
      ...squareImage
    }

		info3: file(relativePath: { eq: "info-3.png" }) {
      ...squareImage
    }

		aboutVideo: file(relativePath: { eq: "about-video.jpg" }) {
      ...squareImage
    }
  }
`

