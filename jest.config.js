// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	coverageDirectory: 'coverage',
	globals: {
		__PATH_PREFIX__: '',
	},
	maxWorkers: '50%',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/file-mock.js',
		'@/(.*)$': '<rootDir>/src/$1',
	},
	setupFiles: ['<rootDir>/config/jest/loadershim.js'],
	setupFilesAfterEnv: ['<rootDir>/config/jest/enzyme.js'],
	snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['node_modules', '.cache'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
	testURL: 'http://localhost',
	transform: {
		'^.+\\.tsx?$': './config/jest/preprocess.js',
	},
	transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
}
