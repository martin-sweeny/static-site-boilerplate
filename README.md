<!-- Here you can put your website's logo -->
<!--
<p align="center">
  <a href="">
    <img alt="" src="" height="60" />
  </a>
</p>
-->

---

<center>

# Static Website Boilerplate

> Source code for generic static websites

Built with:<br/>
[Gatsby](https://www.gatsbyjs.org/) | [React](https://reactjs.org/) | [Jest](https://jestjs.io/) | [Typescript](https://www.typescriptlang.org/) | [Gitlab](https://about.gitlab.com/)

Developed by [wiseweb.solutions](https://wiseweb.solutions) ❤️

</center>

---

## Development

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
yarn plop
```

You can also skip all that by just saying what you want:

```
yarn plop component "new component"
```

The name of the thing being plopped will be translated to `PascalCase` as per
the templates.

### Commit message linting

This repo uses [Commitlint](https://commitlint.js.org/) to enforce semantic
commit messages.
