# Shade

Simple dark theme for [Ghost](http://github.com/tryghost/ghost/) 1.x.

# Features

- Bootstrap 4 beta 2 and Flexbox.
- Pure CSS (Sass included).
- Infinite scrolling (no pagination).
- Websafe fonts: [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) for headings and [Roboto](https://fonts.google.com/specimen/Roboto) for main text.
- Syntax highlighting with [PrismJS](https://github.com/PrismJS/prism) and selfmade theme inspired by [Predawn](https://github.com/jamiewilson/predawn).

You can find a live example [here](https://shade.moso.io).

# Editing the source
Install the node modules:
`npm install` or `yarn add`

Do your edits, and then compile the Sass to CSS and the JS with webpack (Laravel Mix):
```
npm run dev
```

To get watch running:
```
npm run watch
```

To compile for production which includes minification of both CSS and JS:
```
npm run production
```

# Issues?
Please report any issues and missing stuff.
