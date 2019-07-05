import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'

import * as styles from './layout.styles'
import Header from '../Header/header'

const Layout: React.FC<Props> = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Global {...styles.global} />
			<Header siteTitle={data.site.siteMetadata.title} />
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
}

type Props = {
	children?: JSX.Element[]
}

export default Layout
