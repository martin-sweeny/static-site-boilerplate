/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import React from 'react'

import * as styles from './header.styles'

const Header: React.FC<Props> = ({ siteTitle = '' }) => (
	<styles.Header>
		<div>
			<h1>
				<Link to="/">{siteTitle}</Link>
			</h1>
		</div>
	</styles.Header>
)

type Props = {
	siteTitle?: string
}

export default Header
