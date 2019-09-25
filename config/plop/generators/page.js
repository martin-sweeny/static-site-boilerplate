// TODO: The pages' current architecture doesn't match the generator below

// module.exports = (plop, requireField) =>
// 	plop.setGenerator('page', {
// 		description: 'Create a page',
// 		prompts: [
// 			{
// 				type: 'input',
// 				name: 'name',
// 				message: 'What is your page name?',
// 				validate: requireField('name'),
// 			},
// 		],
// 		actions: [
// 			{
// 				type: 'add',
// 				path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
// 				templateFile: 'config/plop/templates/Page/Page.tsx.hbs',
// 			},
// 			{
// 				type: 'add',
// 				path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
// 				templateFile: 'config/plop/templates/Page/Page.test.tsx.hbs',
// 			},
// 			{
// 				type: 'add',
// 				path: 'src/pages/{{pascalCase name}}/index.ts',
// 				templateFile: 'config/plop/templates/Page/index.ts.hbs',
// 			},
// 			{
// 				type: 'add',
// 				path: 'src/pages/index.ts',
// 				templateFile: 'config/plop/templates/injectable-index.ts.hbs',
// 				skipIfExists: true,
// 			},
// 			{
// 				type: 'append',
// 				path: 'src/pages/index.ts',
// 				pattern: `/* PLOP_INJECT_IMPORT */`,
// 				template: `import {{pascalCase name}} from './{{pascalCase name}}'`,
// 			},
// 			{
// 				type: 'append',
// 				path: 'src/pages/index.ts',
// 				pattern: `/* PLOP_INJECT_EXPORT */`,
// 				template: `\t{{pascalCase name}},`,
// 			},
// 		],
// 	})
