# jsonresume-theme-even-es

> Forked from [jsonresume-theme-even](https://github.com/rbardini/jsonresume-theme-even)

Spanish translation of the flat [JSON Resume](https://jsonresume.org/) theme _Even_, by Rafael Bardini. Same layout and features as the original, with section titles, dates and durations rendered in Spanish. The look is identical to the [original theme](https://jsonresume-theme-even.rbrd.in) (demo shown in English).

- 🇪🇸 Spanish section labels, dates and durations
- 💄 Markdown support
- 📐 CSS grid layout
- 🌗 Light and dark modes
- 🎨 Customizable colors
- 🧩 Standalone CLI
- 📦 ESM and CommonJS builds
- 🤖 TypeScript typings

## Installation

```console
npm install github:felipegarciavidal/jsonresume-theme-even-es
```

## Usage

### With Resumed

[Resumed](https://github.com/rbardini/resumed) loads the installed theme automatically:

```console
npm install resumed github:felipegarciavidal/jsonresume-theme-even-es
npx resumed render --theme jsonresume-theme-even-es
```

### Standalone usage

A barebones CLI reads resumes from `stdin` and outputs HTML to `stdout`, with no resume builder needed:

```console
npx jsonresume-theme-even-es < resume.json > resume.html
```

### With resume-cli

[resume-cli](https://github.com/jsonresume/resume-cli) ships with the original (English) _Even_ by default, so for the Spanish version use Resumed or the standalone CLI above.

## Options

### Colors

You can override theme colors via the `.meta.themeOptions.colors` resume field. Each entry defines a tuple of light and (optional) dark color values. If only one array value is defined, it will be used in both light and dark modes.

Here's an example using the default theme colors:

```json
{
  "meta": {
    "themeOptions": {
      "colors": {
        "background": ["#ffffff", "#191e23"],
        "dimmed": ["#f3f4f5", "#23282d"],
        "primary": ["#191e23", "#fbfbfc"],
        "secondary": ["#6c7781", "#ccd0d4"],
        "accent": ["#0073aa", "#00a0d2"]
      }
    }
  }
}
```

## License

MIT, same as the original theme.
