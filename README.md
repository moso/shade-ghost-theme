# Shade

Simple dark theme for [Ghost](http://github.com/tryghost/ghost/) 1.x.

## Features

- Fully hackable
- Offcanvas sidebar
- [Flexgrid](https://github.com/moso/flexgrid)
- Bootstrap 4 components
- Websafe fonts: [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) for headings and [Roboto](https://fonts.google.com/specimen/Roboto) for main text
- Syntax highlighting with [PrismJS](https://github.com/PrismJS/prism) and selfmade theme inspired by [Predawn](https://github.com/jamiewilson/predawn)
- Source included

DEMO: You can find a live example here: [shade.moso.io](https://shade.moso.io).

## Editing the source
Install the node modules:
`npm install` or `yarn install`

Do your edits, and then compile the Sass to CSS and bundle the JS with webpack:
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

## Extending PrismJS syntax highlighting
By default, [PrismJS](https://github.com/PrismJS/prism) highlights `HTML`, `CSS`, `JavaScript`, and shell-like syntax. This theme adds `Markdown`, `PHP`, `Sass`, and `SCSS` to this list. If you wish to add further languages to its syntax highlight, you can extend this by editing `src/js/shade.js`, and add more imports below the `// PrismJS`-line.

You can find all the languages that ship with PrismJS inside `node_modules/prismjs/components`. Be aware that some languages extends other languages - they have dependencies, so to say.

You can also opt for other syntax highlight themes by importing the CSS-file directly into `shade.js` aswell.

Example: `import 'prismjs/themes/okaidia.css'`

However you will have to remove the `@import 'components/code'`-line from `src/sass/shade.scss` for that to kick in.

## Issues?
Please report any issues and missing stuff.
