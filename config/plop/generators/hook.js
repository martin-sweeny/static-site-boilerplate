module.exports = (plop, requireField) =>
	plop.setGenerator('hook', {
		description: 'Create a custom react hook',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your hook name?',
				validate: requireField('name'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.tsx',
				templateFile: 'config/plop/templates/Hook/hook.tsx.hbs',
			},
			{
				type: 'add',
				path:
					'src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.test.tsx',
				templateFile: 'config/plop/templates/Hook/hook.test.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/hooks/use{{pascalCase name}}/index.ts',
				templateFile: 'config/plop/templates/Hook/index.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/hooks/index.ts',
				templateFile: 'config/plop/templates/injectable-index.ts.hbs',
				skipIfExists: true,
			},
			{
				type: 'append',
				path: 'src/hooks/index.ts',
				pattern: `/* PLOP_INJECT_IMPORT */`,
				template: `import use{{pascalCase name}} from './use{{pascalCase name}}'`,
			},
			{
				type: 'append',
				path: 'src/hooks/index.ts',
				pattern: `/* PLOP_INJECT_EXPORT */`,
				template: `\tuse{{pascalCase name}},`,
			},
		],
	})
