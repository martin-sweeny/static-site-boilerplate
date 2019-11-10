const path = require('path')

module.exports = {
	siteMetadata: {
		title: `Martin's Gatsby Starter`,
		description: `A simple starter to get up and developing quickly with Gatsby and TS.`,
		author: `Martin Sweeny <martin@wiseweb.solutions>`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `minimal-ui`,
				// This path is relative to the root of the site.
				icon: `src/images/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-emotion`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-typescript-checker`,
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@': path.resolve(__dirname, 'src'),
				},
				extensions: [],
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.svg$/,
				},
			},
		},
	],
}
