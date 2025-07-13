# markwind

A tool for style-rich markdown with TailwindCSS and directives.

## Use cases

- A tool to generate docs automatically by AI.
- Generate style-rich docs like invoice, quote
- Generate email template for bulk sending

## Features

- Commonmark with GFM
- [Generic directives](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444)
- Frontmatter
- TailwindCSS-like style utilities (layout, colors, typos, ...)
- ...

### Styles

- [UnoCSS](https://unocss.dev/) is used for CSS engine with presets (`wind3`, `web-fonts`, `typography`).
- Default fonts: `Inter`, `JetBrains Mono`, `Newsreader`.

### Additional classes

- `table-minimal` : ... (not defined yet)

### Frontmatter

- `title`
- `bodyClass` (default: `p-0 m-0`)
- `wrapperTag` (default: `main`)
- `wrapperClass` (default: `prose prose-truegray font-sans`)
- `css` : user defined CSS styles

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## TODO

- [ ] User-defult CSS table 100%
- [ ] Syntax highlight
