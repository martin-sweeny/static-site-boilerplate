/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const PureSEO = ({
	description = ``,
	lang = `en`,
	meta = [],
	title = ``,
	...metaData
}): JSX.Element => {
	const metaDescription = description

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: metaData.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

const SEO: React.FC<Props> = ({
	description = ``,
	lang = `en`,
	meta = [],
	title = ``,
}): JSX.Element => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	)

	return (
		<PureSEO
			{...site.siteMetadata}
			description={description}
			lang={lang}
			meta={meta}
			title={title}
		/>
	)
}

interface Props {
	description?: string
	lang?: string
	meta?: HTMLMetaElement[]
	title: string
}

export default SEO
