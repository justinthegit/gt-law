import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';
import { NavBar } from '../components/NavBar';
import { HeaderCarousel } from '../components/HeaderCarousel';
import { About } from '../components/About';
import { Areas } from '../components/Areas';



const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />

		<NavBar />
		<HeaderCarousel />
		<About/>
		<Areas/>

		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
);

export default IndexPage;
