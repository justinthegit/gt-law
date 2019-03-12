import React, { Component } from 'react';
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

class IndexPage extends Component {


	render() {
		return (
			<Layout>
				<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />

				<NavBar />
				<HeaderCarousel />

				{/* <Element name="about">
					<About />
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

				<Footer /> */}
			</Layout>
		);
	}
}

export default IndexPage;
