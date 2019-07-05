require('dotenv').config()

const rules = {
	'references-empty': [2, 'never'],
}

const parserPreset = {
	parserOpts: {
		issuePrefixes: [process.env.PROJECT_ISSUE_KEY_PREFIX]
	}
}


module.exports = {
	extends: ['@commitlint/config-conventional'],
	// ...rules
	// ...parserPreset,
}
