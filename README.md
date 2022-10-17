# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
---

<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>React Learning</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="657c99e1-bd2b-4703-b63f-156d7763bdaf" class="page sans"><header><img class="page-cover-image" src="https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb" style="object-position:center 50%"/><div class="page-header-icon page-header-icon-with-cover"><span class="icon">📘</span></div><h1 class="page-title">React Learning</h1></header><div class="page-body"><p id="316aeac3-d19d-40ab-bded-a930f2b74fa5" class="">
</p><p id="941a5295-5df5-46f8-908b-4b3fe75f2d1c" class="">Introducing JSX</p><p id="1666dcd3-a2f3-4051-a81a-0e8a8aea7fe7" class="">consider this variable declaration..</p><p id="9ad71b66-a24a-4de7-87e2-f8abb32f3070" class="">
</p><pre id="360d8cc0-5245-4912-8724-293a5ca417d4" class="code"><code>const element = &lt;h1&gt;Hello World!&lt;h1

// this tag syntax neither a string nor HTML</code></pre><p id="91db94a4-1bbd-4974-9473-edfb2095e139" class="">it is called JSX. JSX stands for JavaScript Syntax Extansion.</p><p id="b678b056-70c9-4381-a19a-0cdf93b5aa41" class="">Let declare a variable called <code>name</code> and then use it inside jsx like this..</p><pre id="97644591-1ba0-44bd-a226-ce4c2081cee3" class="code"><code>const name = &quot;Lokesh Singh&quot;
const element = &lt;h1&gt; Hello, I am {name}&lt;/h1&gt;</code></pre><p id="6ed1ae75-644f-4e73-8bbe-e4894757240d" class="">let take another example to understand it in better way:</p><pre id="68b69ab6-f21a-4a3b-8ecd-6acb5b6ab35d" class="code"><code>function formateName(user) {
	return user.firstName+ &quot; &quot; + user.secondName;
}

const user = {
	firstName: &#x27;Lokesh&#x27;,
	secondName: &#x27;Singh&#x27;
}
const element = (
	&lt;h1&gt; Hello, {formateName(user)}&lt;/h1&gt;
)</code></pre><p id="4d1c08f3-c052-45e6-b2b3-c8e0c716ae23" class="">
</p><h3 id="8724251a-0110-4960-99c8-9ae8ee520e8f" class="">Rendering Elements</h3><p id="c5ba7eb3-0abe-4288-8b41-7f3ddbf9589d" class="">React elements are plain objects..</p><p id="cb5fd760-1d05-4e34-87f5-d087ddb0b657" class="">lets understand with an example code ..</p><pre id="a4e66075-f43a-4eb9-bf57-a3653925e83e" class="code"><code>&lt;div id=&quot;root&quot;&gt;
	&lt;!-- this content will be managed by the React. --&gt;
&lt;/div&gt;

//output
Hello, World</code></pre><pre id="d696efe5-6b40-4a1d-ae13-00d98619fc25" class="code"><code>const root = ReactDOM.createRoot(document.getElementById(&#x27;root&#x27;));
const element = &lt;h1&gt;Hello, World&lt;/h1&gt;
root.render(element);</code></pre><p id="5f12cfdb-4e18-4d0f-bb80-24d15ae5224e" class="">
</p><h2 id="536626dc-6d77-448b-ae0d-298a162d5aa5" class="">Components and Props</h2><p id="fa28ed2c-fb52-43b5-8227-a42d17a485ee" class="">Conceptually, components are like JavaScript function.</p><p id="76d0b912-c8e4-4d7b-abf2-fa6a9a9a9a93" class=""> Functional Component</p><pre id="d134153a-99d0-45f4-a4a6-090a0a51abbd" class="code code-wrap"><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre><p id="512b471e-d536-421c-a3b5-e3768a9929f4" class="">This function is valid react component because it accept single “props”( stands for properties)</p><p id="5f730a84-e169-4e72-9ae2-336780c8c77f" class="">object argument with data and return a React element. </p><p id="1e42103d-996d-4095-885e-4f053a46fec2" class="">
</p><h3 id="1db5dbff-7a10-40f0-807a-b315234d003c" class="">Class Component</h3><pre id="826f697a-51a6-423c-bb52-f60d74dc4b6d" class="code"><code>class Welcome extends React.Component {
	render() {
		return ( &lt;h1&gt; Hello, {this.props.name} &lt;/h1&gt;;
	}
}</code></pre><p id="be002d9f-39c1-4a62-9fe7-ba662d4e3219" class="">
</p><p id="522f5a2d-4650-4528-82a6-ae40781785fb" class="">Rendering a Component</p><p id="3c1c8c3a-7a8b-44d7-b520-f9da3a134769" class="">However, elements can also represent user-defined components:</p><pre id="4a64b61b-8c13-402b-9623-481b7f6052b1" class="code"><code>const element = &lt;Welcome name = &#x27;lokesh&#x27;/&gt;</code></pre><p id="46d6dbda-8bfc-427c-88c7-61bb2fddb3a0" class="">When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.</p><p id="7caa5284-349b-4e18-8390-eb06c9335a87" class="">
</p><p id="467d1074-0abf-44f5-bc49-a9cb8657ee5d" class="">for example, this code renders “Hello, Lokesh” on the page:</p><pre id="77215778-af80-44a4-b61b-f245399e33c1" class="code"><code>funcion Welcome (props){
	return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;
}

const root = ReactDOM.createDOM(document.getElementById(&#x27;root&#x27;));

const element = &lt;Welcome name = &#x27;Lokesh&#x27;/&gt;

root.render(element);</code></pre><p id="198ed0fc-f8d4-48c2-89aa-8519794f18f2" class="">Let’s recap what happens in this example:</p><ol type="1" id="116495c6-5e86-4139-ae11-ac6ae0ec4a97" class="numbered-list" start="1"><li>We call <code>root.render()</code> with the <code>&lt;Welcome name=&quot;Sara&quot; /&gt;</code> element.</li></ol><ol type="1" id="6d73433a-a5f7-4b87-b070-3ae576d3eddd" class="numbered-list" start="2"><li>React calls the <code>Welcome</code> component with <code>{name: &#x27;Sara&#x27;}</code> as the props.</li></ol><ol type="1" id="2ca31793-e40b-4229-bd2e-7860d6c0e815" class="numbered-list" start="3"><li>Our <code>Welcome</code> component returns a <code>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code> element as the result.</li></ol><ol type="1" id="606a25c5-7770-494d-ac27-6c318fcdc5cc" class="numbered-list" start="4"><li>React DOM efficiently updates the DOM to match <code>&lt;h1&gt;Hello, Sara&lt;/h1&gt;</code>.</li></ol><p id="5432d087-0820-4fd4-afed-26465a18c5c5" class="">
</p><p id="31b83287-07c2-4875-84c2-6c3c1752491b" class="">Composing Components</p><p id="2fedec24-c30a-4909-baf7-ea9e1416f0ec" class="">Components can refer to other components in their output. </p><p id="b9d452df-85ba-45e2-9841-936c92344132" class="">For example, we can create an <code>App</code> component that renders <code>Welcome</code> many times:</p><pre id="d5059d72-cee9-46f2-aafa-5eaead1b0d3c" class="code code-wrap"><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}

function App() {
  return (
    &lt;div&gt;      
				&lt;Welcome name=&quot;Sara&quot; /&gt;      
				&lt;Welcome name=&quot;Cahal&quot; /&gt;      
				&lt;Welcome name=&quot;Edite&quot; /&gt;    
		&lt;/div&gt;
	);
}</code></pre><h2 id="652f1af3-e749-4581-80e7-80f225a38ce8" class="">Adding Local State to a Class</h2><p id="b9aeb556-fddc-41a8-9147-c99b91d1f60c" class="">
</p><p id="833b2629-9615-4f47-9f56-93f631be040c" class="">Converting a Functional Component to a Class Component:</p><p id="239ed27c-e129-4683-806c-a409a3db2aa2" class="">first consider a functional component…</p><pre id="2dcbe18a-92aa-4e8a-a48f-9060e1fba9f4" class="code code-wrap"><code>function Clock(props) {
  return (
    &lt;div&gt;      
			&lt;h1&gt;Hello, world!&lt;/h1&gt;      
				&lt;h2&gt;It is {props.date.toLocaleTimeString()}.&lt;/h2&gt;   
		&lt;/div&gt;  
	);
}

function tick() {
  root.render(&lt;Clock date={new Date()} /&gt;);}
</code></pre><ol type="1" id="f8c2b753-3dac-421a-bf91-b21daaa5c20a" class="numbered-list" start="1"><li>Create an <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 class</a>, with the same name, that extends <code>React.Component</code>.</li></ol><ol type="1" id="9f5c4525-bfd7-4f41-ab15-7c270110a587" class="numbered-list" start="2"><li>Add a single empty method to it called <code>render()</code>.</li></ol><ol type="1" id="6b192b9f-a6c2-4197-9622-48ccaa7a45b6" class="numbered-list" start="3"><li>Move the body of the function into the <code>render()</code> method.</li></ol><ol type="1" id="e7a58993-4943-4bfc-a8a6-60e324586127" class="numbered-list" start="4"><li>Replace <code>props</code> with <code>this.props</code> in the <code>render()</code> body.</li></ol><ol type="1" id="53715aa2-a517-41c2-a731-87e3f8f8e7bf" class="numbered-list" start="5"><li>Delete the remaining empty function declaration.</li></ol><pre id="8f648b74-859e-4fd9-9bc4-243aa464c81f" class="code code-wrap"><code>//class Component
class Clock extends React.Component {
  render() {
    return (
      &lt;div&gt;
        &lt;h1&gt;Hello, world!&lt;/h1&gt;
        &lt;h2&gt;It is {this.props.date.toLocaleTimeString()}.&lt;/h2&gt;
      &lt;/div&gt;);
  }
}</code></pre><p id="d759ac4d-147b-497a-8151-ee384f1c7245" class="">
</p><p id="5b2bad42-e86f-4082-add5-7cac82b738c1" class="">We will remove <code>date</code> from props to state in three steps:</p><p id="84d7c945-8a0f-457d-bc08-896de913a0ca" class="">1. Replace <code>this.props.date</code> with <code>this.state.date</code> in the <code>render()</code> method:</p><pre id="946d3722-1b0e-4d9a-a2bf-2875bbdecd05" class="code"><code>class Clock extends React.Component {
	render() {
		return (
			&lt;div&gt;
				&lt;h1&gt;Hello, World&lt;/h1&gt;
				&lt;h2&gt;It is {this.state.date.toLocalTimeString()}. &lt;/h2&gt;// here we replace props with state
			&lt;/div&gt;
		);
	}
}</code></pre><p id="e6f3f790-ec4b-447f-8f62-b0b2ce03a055" class="">2. Add a <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Constructor">class constructor</a> that assigns the initial <code>this.state</code>:</p><pre id="df41ee8d-a296-483f-9c21-200402c2ab8e" class="code"><code>class Clock extends React.Component {
//need to add constructor
constructor(props) {
	super(props);
	this.state = {date: new Date()};
}
render() {
return (
&lt;div&gt; 
&lt;h2&gt;It is {this.state.date.toLocalTimeString()}. &lt;/h2&gt;
&lt;/div&gt;
);
}
}</code></pre><p id="f62a24b4-0211-4110-bcab-e741d40c4ef5" class="">Class Component should always call the base constructor with <code>props</code>.</p><h2 id="0b8231e5-8d7f-48c0-acc0-f34b241e0556" class="">Adding Lifecycle Methods to a Class</h2><p id="52023b42-267d-442b-8e09-af76c2ddefcf" class="">
</p><p id="e4460c8d-0c7e-49da-b001-c6d3df839ca7" class="">what is use setState()?</p><p id="d388ae4f-d84c-466d-94e0-39cebcb0f27d" class="">states are mutable whereas props are immutable(unchangeable).</p><pre id="81122271-4c32-433c-bdae-0d85cbabc9f6" class="code"><code>import React from &quot;react&quot;;
export default class Greeting extends React.Component {

    constructor(props) {
        super(props);
        //set initial state
        this.state = {greeting:&#x27;Welcome to the greeting portal!&#x27;}
        
		  //binding this keyword, using this we can replace the previous content of the state
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        //changing state
        this.setState({greeting:&#x27;Nisum Welcomes you!&#x27;})
    }

    render() {
        return(
            &lt;div&gt;
                &lt;h2&gt;Greeting Portal&lt;/h2&gt;
                &lt;p&gt;{this.state.greeting}&lt;/p&gt;
                {/* set click handler */}
                &lt;button onClick={this.updateState}&gt;Click me&lt;/button&gt;
            &lt;/div&gt;
        );
    }

}</code></pre><p id="609ff978-dc0d-4634-979e-03343df59bf2" class="">
</p><pre id="dbdd9162-68fa-45a4-abc5-6e282ec90fbd" class="code"><code>import React from &quot;react&quot;;

class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () =&gt; this.tick(), 1000 
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
//this.setState use to schedule updates to the local state
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            &lt;div&gt;
                &lt;h2&gt;What is Date??&lt;/h2&gt;
                &lt;h2&gt;It is {this.state.date.toLocaleTimeString()}&lt;/h2&gt;
            &lt;/div&gt;
        );
    }
}

export default Clock;</code></pre><p id="498fa87f-c5bd-42b5-9e6d-ad00c79eac03" class="">Using State Correctly:</p><p id="ae6d942d-8ed7-4b7c-96a1-e7736012f269" class="">There are three things you should know about setState().<div class="indented"><ol type="1" id="baa012af-09d9-4d21-923d-9e6dc359989b" class="numbered-list" start="1"><li>Do not modify state directly.<pre id="ad8c0c9d-a3cd-410c-9f03-baf609b9ad01" class="code"><code>//worng way
this.state.comment = &#x27;hello&#x27;;

//instead use setState()
this.setState({comment:&#x27;Hello&#x27;});</code></pre><p id="5d19ff01-e5f3-45a8-a4aa-43f8c98f7e9c" class="">the only place where you can assign <code>this.state</code> is the constructor.</p></li></ol><ol type="1" id="23b386e6-3525-4e23-8f71-80dd846e2b91" class="numbered-list" start="2"><li>State Updates may be Asynchronous</li></ol></div></p><p id="89b37ee5-8e46-4b19-b0dc-3ca00d1c9362" class="">
</p><h2 id="d9bdc07b-1d25-4c07-b85a-dc2ee4756bc0" class="">Handling Events</h2><ul id="8f2ec9b7-89a1-4545-84b7-f5b8f70c05ff" class="bulleted-list"><li style="list-style-type:disc">React events are named using camelCase, rather than lowercase.</li></ul><ul id="860e4e82-76ff-4ac7-884c-426075bdc3c4" class="bulleted-list"><li style="list-style-type:disc">with jsx you can pass function as the event handler, rather than a string.</li></ul><pre id="8474c2a0-e798-452c-9273-66c410c5c5a7" class="code"><code>&lt;button onClick = {updateUsers}&gt; update user &lt;/button&gt;</code></pre><p id="a65a3eed-de0f-438f-9fa1-ef95eddbb184" class="">you cannot return <code>false</code> to prevent default behavior in React. You must call <code>preventDefault</code>
 explicitly.</p><pre id="7172d84c-8086-4bdb-9296-d7526ebcc8c7" class="code"><code>function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(&#x27;You clicked submit.&#x27;);
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre><p id="2870a6c2-1948-45ac-9a30-da0dbace2028" class="">here <code>e</code> is a synthetic event.</p><pre id="ae3691c0-4ad8-4205-977a-2f94820da0f9" class="code"><code>class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState =&gt; ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      &lt;button onClick={this.handleClick}&gt;
        {this.state.isToggleOn ? &#x27;ON&#x27; : &#x27;OFF&#x27;}
      &lt;/button&gt;
    );
  }
}</code></pre><p id="a44a2aa5-1e86-4808-a578-35456148ba84" class="">
</p><h2 id="172951a3-e5b1-4e1e-8338-e053307360fc" class="">Lists and Keys</h2><p id="27efd530-8752-4754-855a-b0e24844ab2c" class="">
</p><p id="99f7b7f2-1795-4e69-b0ed-a433e9a572e3" class="">lets take an example:</p><pre id="c754bb03-e7aa-4791-b4a8-f19294b4d2e4" class="code"><code>const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) =&gt; number*2);
console.log(doubled);

//[2, 4, 6, 8, 10]</code></pre><h3 id="646219be-8034-43db-b899-01fdabf116d3" class="">Rendering Multiple Components</h3><p id="12a92794-e06a-49f8-9c12-87a2b0ef29ba" class="">
</p><p id="3b0661e0-7508-49d4-a991-4a784ed25c68" class="">
</p><p id="1a673d48-3813-4797-99b3-f0dbabec3d0b" class="">
</p><p id="d0fd55a5-3689-4d77-a9c6-e0d672e60cff" class="">
</p><p id="2ca4b499-8674-4c42-8777-6bce24a44591" class="">
</p><h3 id="d5962f78-c5ad-43ba-b660-ec5fab35c7da" class=""><strong>What is Hook?</strong></h3><p id="da36ed81-ed03-4871-9b7b-76c90c3f6c31" class="">A Hook is a special function that lets you “hook into” React features. For example, <code>useState</code>
 is a Hook that lets you add React state to function components.</p><pre id="6232c81b-1386-4bc1-ac81-e4005598658c" class="code code-wrap"><code>import React, { useState } from &#x27;react&#x27;;function Example() {
  // ...
}</code></pre><p id="bf4bc11e-4fb0-4a4c-ae8a-7c8ce5b7622f" class="">
</p><p id="c7dbad38-cdaf-4385-9f19-bf94ae885f30" class="">Hooks and Functional Component</p><p id="c133502f-6006-4bd0-8de6-86acfd6db993" class="">As a reminder, function components in React look like this:</p><pre id="88b53eac-88b4-4a93-bbe1-97ea41e162bc" class="code code-wrap"><code>const Example = (props) =&gt; {
  // You can use Hooks here!
  return &lt;div /&gt;;
}</code></pre><p id="30ea1456-0c55-4731-b529-33ee13707277" class="">or this:</p><pre id="21e8c539-e778-4172-9c1b-ca8ec454efb6" class="code code-wrap"><code>function Example(props) {
  // You can use Hooks here!
  return &lt;div /&gt;;
}</code></pre><p id="b4c340bb-80ac-4e83-824a-157abac7c4f0" class="">
</p><p id="b384812e-7a98-44e8-a258-ab8cba6efcab" class="">Example of state hook:</p><pre id="a03daf3d-f342-4ff4-be07-ede6e3b2d7d5" class="code code-wrap"><code>import React, { useState } from &#x27;react&#x27;;

function Example() {
  // Declare a new state variable, which we&#x27;ll call &quot;count&quot;  const [count, setCount] = useState(0);return (
    &lt;div&gt;      &lt;p&gt;You clicked {count} times&lt;/p&gt;      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;        Click me
      &lt;/button&gt;    &lt;/div&gt;);
}</code></pre><p id="285754ca-d2a9-4ca8-8082-d94b98141df9" class="">Equivalent Class example:</p><pre id="62b72670-87a6-4423-bedd-db88bbca262a" class="code code-wrap"><code>class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      &lt;div&gt;
        &lt;p&gt;You clicked {this.state.count} times&lt;/p&gt;
        &lt;button onClick={() =&gt; this.setState({ count: this.state.count + 1 })}&gt;
          Click me
        &lt;/button&gt;
      &lt;/div&gt;);
  }
}</code></pre><p id="900857ad-0558-43ae-80cc-91533eb889e4" class="">
</p><h3 id="7368c139-c93a-43ab-8ca1-323c5c7ec2c0" class="">When to use Hook?</h3><p id="898bfd8f-bcda-467e-95d3-ae5a98edf716" class="">If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.</p><p id="fb85f0a9-fe3f-4f72-8428-1d9bc653730f" class="">
</p><h3 id="5e0199aa-db0d-436f-a3d6-8b9e7674cd58" class="">What is react redux? </h3><p id="8a8f2099-5c6f-472d-a93c-06f4306057b0" class="">
</p></div></article></body></html>
