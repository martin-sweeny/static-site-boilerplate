import React from 'react'
import renderer from 'react-test-renderer'

import { PureLayout as Layout } from './Layout'

describe('Layout', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<Layout title="Title" />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
