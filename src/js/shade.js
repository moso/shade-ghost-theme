// jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

// Popper.js
import Popper from 'popper.js';
window.Popper = Popper;

// PrismJS
import Prism from 'prismjs';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-php.js';
import 'prismjs/components/prism-sass.js';
import 'prismjs/components/prism-scss.js';

// Sidebar
import './components/sidebar.js';
