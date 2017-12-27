# Shade

Simple dark blogging theme for [Ghost](http://github.com/tryghost/ghost/) 1.x.

![shade-screenshot](https://shade.moso.io/content/images/screenshot.jpg)

## Features

- Fully hackable
- Offcanvas sidebar
- [Flexgrid](https://github.com/moso/flexgrid)
- Websafe fonts: [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) for headings and [Roboto](https://fonts.google.com/specimen/Roboto) for main text
- Syntax highlighting with [PrismJS](https://github.com/PrismJS/prism) and selfmade theme inspired by [Predawn](https://github.com/jamiewilson/predawn)
- Source included

DEMO: You can find a live example here: [shade.moso.io](https://shade.moso.io).


## Blogging in mind
Shade is built with blogging in mind, thus is a bit less featured than the official [Casper](https://github.com/TryGhost/Casper)-theme. However, Shade is built around the same [theme API documentation](https://themes.ghost.org), which explains every possible Handlebars helper and templates.

**The main files are**:

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts

Shade also has an `error.hbs`-file that handles all errors such as 403/404 and all 500-errors.

However, it's easy to hack and expand Shade by adding new `.hbs`-files, for example:

- `page.hbs` - to handle individual pages
- `tag.hbs` - for tag archives
- `author.hbs` - for author archives

One really neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/`-page
- `tag-news.hbs` - Custom template for `/tag/news/`-archive
- `author-ali.hbs` - Custom template for `/author/ali/`-archive

## Development - editing the source
Shade scripts and styles are compiled using [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) which is "*an elegant wrapper around Webpack*". You'll need [Node.js](https://nodejs.org) and npm installed. There is also support for [yarn](https://yarnpkg.com).

After that, install the node modules:
`$ npm install` or `$ yarn install`

Do your edits, and then compile the Sass to CSS and bundle the JS with webpack:
```
$ npm run dev
```

To get watch running:
```
$ npm run watch
```

To compile for production which includes minification of both CSS and JS:
```
$ npm run production
```

Laravel Mix automagically use autoprefixer, so don't worry about browser-specific vendor-prefixes.

Once you're done, you can use the `zip`-command to package Shade theme files into `./shade-ghost-theme.zip`, which you can then easily upload to your site:
```
$ npm run zip
```

## Extending PrismJS syntax highlighting
By default, [PrismJS](https://github.com/PrismJS/prism) highlights `HTML`, `CSS`, `JavaScript`, and shell-like syntax. Shade adds `Markdown`, `PHP`, `Sass`, and `SCSS` to this list. If you wish to add further languages to its syntax highlight, you can extend this by editing `src/js/shade.js`, and add more imports below the `// PrismJS`-line.

You can find all the languages that ship with PrismJS inside `node_modules/prismjs/components`. Be aware that some languages extends other languages - they have dependencies, so to say. You can also opt for other syntax highlight themes by importing the CSS-file directly into `shade.js` aswell.

Example: `import 'prismjs/themes/okaidia.css'`

However you will have to remove the `@import 'components/code'`-line from `src/sass/shade.scss` for that to kick in.

You can find examples on usage on the [Advanced Markup Guide](https://shade.moso.io/advanced-markdown)-page.

## Icons
Shade imports [Material Design Icons](https://materialdesignicons.com). This is opted for as MDI has equal-sized icons compared to, eg, Font Awesome which aren't equal in size. You can check the full list of icons by clicking the link.

## Copyright & License
Copyright? You're free to distribute Shade all you like. The only appeal I have is that the "Theme: [Shade](https://github.com/moso/shade-ghost-theme) by [moso](https://moso.io)" is kept intact.

Shade is released under the [MIT](https://github.com/moso/shade-ghost-theme/blob/v2.0/LICENSE)-license.

## Issues?
Please report any issues and missing stuff.
