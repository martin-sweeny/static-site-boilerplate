<!-- Here you can put your website's logo -->
<center>
  <img alt="Gatsby" src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" height="60" />
  <img alt="React.js" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" height="60" />
  <img alt="Typescript" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" height="60" />
  <img alt="Lando" src="https://docs.lando.dev/images/hero.png" height="60" />
</center>

---

<center>

# Static Website Boilerplate

> Source code for generic static websites

Built with:<br/>
[Gatsby](https://www.gatsbyjs.org/) | [React](https://reactjs.org/) | [Jest](https://jestjs.io/) | [Typescript](https://www.typescriptlang.org/) | [Gitlab](https://about.gitlab.com/) | [Lando](https://lando.dev)

Developed by [wiseweb.solutions](https://wiseweb.solutions) ❤️

</center>

---

## Development

We use [Lando](https://lando.dev) to take care of dev environment containerization, mostly of its ease of use. [Click here to install it.](https://lando.dev/download/)

### Installation

1. Clone the repo or download a given commit
1. Run `lando start`
   - You'll probably want to run `lando logs -f` to keep up with how the build is coming along
1. ???
1. Profit

> **NOTE:** Use `lando yarn` instead of local `yarn`. In fact, you can prepend most commands with `lando`, except `git`

#### Using in your own project

You'll want to replace

- the remotes in git with your new project's repo location
- the `name` and the `proxy` settings in `.lando.yml`
- the `name` and `description` in `package.json`

### Code Style

You can generally defer to the `.editorconfig` or `.prettierrc.yml` for code
style preferences, obviously on top of the default Prettier rules.

#### Root Alias

`@` is defined an alias to `./src` (so you can use `import { Component } from @/components`
instead of length relative paths). It should be respected by TS, Gatsby and
Jest, so intellisense etc should work fine.

**It is preferred if you use the `@` root alias for importing anything outside of your local component.**

### Testing

[Jest snapshot](https://jestjs.io/docs/en/snapshot-testing) testing is the
backbone of the tests. [Emotion](https://emotion.sh/docs/testing) has also been
configured to work with snapshot tests, too.

### Plop.js

[Plop](https://plopjs.com/) is used to streamline creating new components,
hooks, views, etc. You can find the templates in `./config/plop`.

#### Using Plop

Simply running the following command is the bare minimum. It will prompt an
interactive tool that'll ask what you want and generate it for you.

```
lando yarn plop
```

You can also skip all that by just saying what you want:

```
lando yarn plop component "new component"
```

The name of the thing being plopped will be translated to `PascalCase` as per
the templates.

### Commit message linting

This repo uses [Commitlint](https://commitlint.js.org/) to enforce semantic
commit messages.
