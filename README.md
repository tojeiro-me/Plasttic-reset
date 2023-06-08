[![Plasttic](./.github/assets/repo-banner-1400w-reset.png)](https://plasttic.dev)

# Plasttic CSS Reset

A CSS Reset styling for browser consistency with best practices defaults.

---

## About

Along with some good semantic HTML, Plasttic CSS Reset creates a clean and stripped foundation to develop an accessible, responsive and robust interface by applying your design system on a blank canvas.

- Removes browser inconsistencies.
- Resets properties for easier and more predictable styling results.
- Improves accessibility through best practices values.
- Uses :where() to allow overrides without specificity issues.
- Offers custom properties to change some of the default values.

---

## Demo page

- https://codepen.io/tojeiro/pen/mdzYVjP?editors=1100

---

## Start

### From CDN (no installation)

1. In the HTML page

```HTML
  <link rel="stylesheet" href="https://unpkg.com/plasttic-reset" />
```

2. In the CSS file

```CSS
@import "https://unpkg.com/plasttic-reset";
```

### Installation

1. Install package

```
npm i plasttic-reset
```

2. In the CSS file

```CSS
@import "plasttic-reset";
```

---

Check the [CHANGELOG](CHANGELOG.md) for version changes.

---

## Notes

### Styling file upload button

```CSS
input[type='file']::-webkit-file-upload-button,
input[type='file']::file-selector-button {
  /* styling properties */
}
```

---

## Customize

This properties can be changed globally - using the :root {} pseudo-class - or scoped - targeting the tag or class in which you want to override the default values.

```CSS
  /* Focus style color */
  --ptt-reset-focus-color: hsl(26 86% 61%); /* replace with brand color, ... */

  /* The next properties best values depends on the font used */
  --ptt-reset-body-line-height: 1.45; /* 1.3 to 1.6 */
  --ptt-reset-body-width: 65ch; /* 50ch to 80ch - h5, h6, p, li */
  --ptt-reset-body-spacing: 0.012em; /* letter spacing */
  --ptt-reset-header-line-height: 1.1; /* 1 to 1.2 - h1, h2, h3, h4 */
  --ptt-reset-h1-width: 30ch;
  --ptt-reset-h2-width: 35ch;
  --ptt-reset-h3-width: 45ch;
  --ptt-reset-h4-width: 55ch;
```

---

## Developer

1. Repository

- https://github.com/tojeiro-me/Plasttic-reset

2. CSS Files:

- Minified: dist/reset.min.css
- Source: src/reset.css

3. Config files

- Supported Browsers: .browserslistrc (https://browsersl.ist/)
- PostCSS preset-env stage: postcss.config.cjs (https://github.com/csstools/postcss-preset-env#stage)

4. Repository

- Clone repository

```
git clone https://github.com/tojeiro-me/Plasttic-reset.git
```

- Install dependencies

```
npm install
```

- Parse and Minimize source to dist (reset.min.css)

```
npm run dist
```

---

Other CSS Resets/Normalize:

(excellent alternatives and references)

- A Modern CSS Reset by Andy Bell @piccalilli\_
- https://piccalil.li/blog/a-modern-css-reset/
- Custom CSS Reset by Josh Comeau @JoshWComeau
- https://www.joshwcomeau.com/css/custom-css-reset/
- Open Props Normalize by Adam Argyle @argyleink
- https://codepen.io/argyleink/pen/KKvRORE

_"Credit where credit is due!"_

## Follow

---

[![Twitter](./.github/assets/twitter.svg)](https://twitter.com/Plasttic_Dev)&emsp;[![Mastodon](./.github/assets/mastodon.svg)](https://mastodon.social/@plasttic)&emsp;[![Github](./.github/assets/github.svg)](https://github.com/tojeiro-me)

---

## License

[MIT](./LICENSE)

---

[![Plasttic](./.github/assets/repo-badge-50h.png)](https://github.com/tojeiro-me/Plasttic)
