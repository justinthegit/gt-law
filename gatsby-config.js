module.exports = {
	pathPrefix: `/theresmore`,
	siteMetadata: {
		title: `Gilbert + Tobin Lawyers`,
		description: `Each year, we invite law students in their penultimate year of study to partake in Gilbert + Tobin’s Clerkship Program. You’ll have interaction with partners, lawyers and other graduates, as well as practical exposure to legal work.`,
		author: `@gatsbyjs`
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-polyfill-io`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
				omitGoogleFont: true,

			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
	]
};
