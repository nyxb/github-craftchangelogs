# github-craftchangelogs

[![NPM version](https://img.shields.io/npm/v/github-craftchangelogs?color=a1b858&label=)](https://www.npmjs.com/package/github-craftchangelogs)

Generate changelog for GitHub releases from [Conventional Emoji Commits](https://www.conventional-emoji-commits.site), powered by [craftchangelogs](https://github.com/nyxb/craftchangelogs).

<!-- [👉 Changelog example](https://github.com/unocss/unocss/releases/tag/v0.39.0) -->

## Features

- Support exclamation mark as breaking change, e.g. `chore!: drop node v10`
- Grouped scope in changelog
- Create the release note, or update the existing one
- List contributors

## Usage

In GitHub Actions:

```yml
# .github/workflows/release.yml

name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v3
        with:
          node-version: 16.x

      - run: npx github-craftchangelogs # or github-craftchangelogs@0.12 if ensure the stable result
        env:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

It will be trigged whenever you push a tag to GitHub that starts with `v`.

## Configuration

You can put a configuration file in the project root, named as `github-craftchangelogs.config.{json,ts,js,mjs,cjs}`, `.github-craftchangelogsrc` or use the `github-craftchangelogs` field in `package.json`.

## Preview Locally

```bash
npx github-craftchangelogs --dry
```

## License

[MIT](./LICENSE) License © 2022 [Dennis Ollhoff [nyxb]](https://github.com/nyxb)
