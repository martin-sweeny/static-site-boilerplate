import React from 'react'
import renderer from 'react-test-renderer'

import { PureSEO as SEO } from './SEO'

describe('SEO', () => {
	const props = {
		title: 'Title',
	}

	it('renders correctly', () => {
		const tree = renderer.create(<SEO {...props} />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
