import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'

import * as styles from './Layout.styles'
import Header from '../Header/Header'

export const PureLayout: React.FC<Props> = ({
	children,
	title,
}): JSX.Element => (
	<>
		<Global {...styles.global} />
		<Header siteTitle={title} />
		<styles.ContentWrapper>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</styles.ContentWrapper>
	</>
)

const Layout: React.FC<Props> = ({ children, title }): JSX.Element => {
	const { site } = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<PureLayout title={title || site.siteMetadata.title}>{children}</PureLayout>
	)
}

interface Props {
	children?: JSX.Element | JSX.Element[]
	title?: string
}

export default Layout
