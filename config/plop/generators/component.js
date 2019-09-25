module.exports = (plop, requireField) =>
	plop.setGenerator('component', {
		description: 'Create a reusable component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
				validate: requireField('name'),
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
				templateFile: 'config/plop/templates/Component/Component.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
				templateFile: 'config/plop/templates/Component/Component.styles.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
				templateFile: 'config/plop/templates/Component/Component.test.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/index.ts',
				templateFile: 'config/plop/templates/Component/index.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/index.ts',
				templateFile: 'config/plop/templates/injectable-index.ts.hbs',
				skipIfExists: true,
			},
			{
				type: 'append',
				path: 'src/components/index.ts',
				pattern: `/* PLOP_INJECT_IMPORT */`,
				template: `import {{pascalCase name}} from './{{pascalCase name}}'`,
			},
			{
				type: 'append',
				path: 'src/components/index.ts',
				pattern: `/* PLOP_INJECT_EXPORT */`,
				template: `\t{{pascalCase name}},`,
			},
		],
	})
