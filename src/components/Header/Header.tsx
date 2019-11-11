/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import React from 'react'

import * as styles from './Header.styles'

const Header: React.FC<Props> = ({ siteTitle = '' }): JSX.Element => (
	<styles.Header>
		<div>
			<h1>
				<Link to="/">{siteTitle}</Link>
			</h1>
		</div>
	</styles.Header>
)

interface Props {
	siteTitle?: string
}

export default Header
