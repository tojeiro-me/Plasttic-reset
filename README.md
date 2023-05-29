# Plasttic CSS Reset

A CSS Reset styling for CSS browser consistency with best practices defaults.

---

## About

Along with some good semantic HTML, Plasttic CSS Reset creates a clean foundation to develop an accessible, responsive and robust interface.

- Removes browser inconsistencies.
- Resets some properties to start styling from scratch.
- Improves accessibility through some best practices values.
- Uses :where() to allow overrides without specificity issues.
- Offers custom properties to change some default values.

---

## Usage

1. ...

---

## Customize

```
  /* Focus style color */
  --ptt-reset-focus-color: hsl(26 86% 61%); /* replace by brand color, ... */

  /* The next properties best values depends on the font used */
  --ptt-reset-body-line-height: 1.45; /* 1.3 to 1.6 */
  --ptt-reset-h123-line-height: 1.1; /* 1 to 1.2 */
  --ptt-reset-h1-width: 30ch;
  --ptt-reset-h2-width: 35ch;
  --ptt-reset-h3-width: 45ch;
  --ptt-reset-hpli-width: 65ch; /* 50ch to 80ch - h4, h5, h6, p, li */
  --ptt-reset-body-spacing: 0.012em;
  --ptt-reset-h123-spacing: 0.01em;
```

---

## Developer

- Minified: https://github.com/tojeiro-me/Plasttic-reset/blob/master/dist/reset.min.css
- Source: https://github.com/tojeiro-me/Plasttic-reset/blob/master/src/reset.css

- ...

- Parse and Minimize source to dist (reset.min.css)

```
npm run dist
```

---

References:
(because we don't reinvent the wheel, someone has already done a good job)

- A Modern CSS Reset by Andy Bell @piccalilli\_
- https://piccalil.li/blog/a-modern-css-reset/
- Custom CSS Reset by Josh Comeau @JoshWComeau
- https://www.joshwcomeau.com/css/custom-css-reset/
- Open Props Normalize by Adam Argyle @argyleink
- https://codepen.io/argyleink/pen/KKvRORE

---

_Main project: [Plasttic](https://github.com/tojeiro-me/Plasttic)_
