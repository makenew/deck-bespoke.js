# Bespoke.js Deck Skeleton

[<img src="https://makenew.github.io/makenew.svg" alt="Make New" height="20">](https://makenew.github.io/)
[![GitHub release](https://img.shields.io/github/release/makenew/deck-bespoke.js.svg)](https://github.com/makenew/deck-bespoke.js/releases)
[![GitHub license](https://img.shields.io/badge/license-CC--BY--SA--4.0-blue.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/makenew/deck-bespoke.js.svg)](https://david-dm.org/makenew/deck-bespoke.js)
[![David](https://img.shields.io/david/dev/makenew/deck-bespoke.js.svg)](https://david-dm.org/makenew/deck-bespoke.js#info=devDependencies)
[![Travis](https://img.shields.io/travis/makenew/deck-bespoke.js.svg)](https://travis-ci.org/makenew/deck-bespoke.js)

[![wercker status](https://app.wercker.com/status/6ada0cbe47dbb3268f982e7a44c25e9f/m "wercker status")](https://app.wercker.com/project/bykey/6ada0cbe47dbb3268f982e7a44c25e9f)

## Description

Bootstrap a new [Bespoke.js] deck in less than a minute.

Check out the **[live demo]** and its **[source code]**!

**[Create your new deck now!](#bootstrapping-a-new-project)**

[Bespoke.js]: http://markdalgleish.com/projects/bespoke.js/
[live demo]: https://makenew.github.io/deck-bespoke.js/
[source code]: https://github.com/makenew/deck-bespoke.js/tree/demo

### Quick Usage Notes

After the [initial bootstrapping steps](#bootstrapping-a-new-project),
jump down to [Quickstart](#quickstart) and beyond to get up and running.

The only file you are required to edit is where you
add your slides: `app/partials/slides.static.hbs`.
Try adding a few `<section>` elements and watch
your slides magically appear!
This is a Handlebars template which supports
YAML front matter and partials.

Add images or other assets anywhere under `app/assets`
and refer to them with, e.g., if you have `app/assets/images/kitty.png`,
write `src="DIGEST(/images/kitten.png)"`.

This skeleton only comes with one plugins and one theme:
[bespoke-keys] and [bespoke-theme-cube].
Install more with `npm install --save`
(or uninstall existing ones with `npm uninstall --save`),
then load them in `app/modules/deck.js`.

Since most decks are hosted as part of a larger website,
the following typical boilerplate files are not Included:
`404.html`, `crossdomain.xml`, and `robots.txt`.

[bespoke-keys]: https://github.com/bespokejs/bespoke-keys
[bespoke-theme-cube]: https://github.com/bespokejs/bespoke-theme-cube

### Features

- Develop and build with [Brunch]: the ultra-fast HTML5 build tool.
- Core HTML5 layout based on [HTML5 Boilerplate].
- Modular static templating with [html-brunch-static]
  [Handlebars], and [Yaml Front Matter].
- Extensive intelligent meta tag support.
- Write modern JavaScript with [Babel] and the [ES2015 preset].
- Write styles with [Sass] and [Autoprefixer].
- Production assets optimized with [UglifyJS] and [cssnano].
- Frontend and development dependency management with [npm].
- Automatic browser reloading with [auto-reload-brunch].
- Cache-optimized assets with [digest-brunch].
- Linting with the [JavaScript Standard Style], [Sass Lint], and [HTMLHint].
- Automatically lint on changes with [gulp].
- Normalized element styles with [Normalize.css].
- Favicons with [Favic-o-matic].
- The internet is for humans with [humans.txt].
- [Travis CI] and [wercker] ready.
- Deploy to [GitHub pages] locally or from [wrecker]
  (or [add Travis CI deployment][travis-deploy]).
- Optimized and tested deployment build with [HTMLMinifier] and [imagemin].
- [Keep a CHANGELOG].
- Consistent coding with [EditorConfig].
- Includes a free culture [Creative Commons] license.
- Badges from [Shields.io].

[auto-reload-brunch]: https://github.com/brunch/auto-reload-brunch
[Autoprefixer]: https://github.com/postcss/autoprefixer
[Babel]: https://babeljs.io/
[Brunch]: http://brunch.io/
[cssnano]: http://cssnano.co/
[Creative Commons]: https://creativecommons.org/
[digest-brunch]: https://github.com/mutewinter/digest-brunch
[EditorConfig]: http://editorconfig.org/
[ES2015 preset]: https://babeljs.io/docs/plugins/preset-es2015/
[Favic-o-matic]: http://www.favicomatic.com/
[GitHub pages]: https://pages.github.com/
[gulp]: http://gulpjs.com/
[Handlebars]: http://handlebarsjs.com/
[html-brunch-static]: https://github.com/bmatcuk/html-brunch-static
[HTML5 Boilerplate]: https://html5boilerplate.com/
[HTMLHint]: https://github.com/yaniswang/HTMLHint
[HTMLMinifier]: https://github.com/kangax/html-minifier
[humans.txt]: http://humanstxt.org/
[imagemin]: https://github.com/imagemin/imagemin
[JavaScript Standard Style]: http://standardjs.com/
[Keep a CHANGELOG]: http://keepachangelog.com/
[npm]: https://www.npmjs.com/
[Normalize.css]: https://necolas.github.io/normalize.css/
[Sass]: http://sass-lang.com/
[Sass Lint]: https://github.com/sasstools/sass-lint
[Shields.io]: http://shields.io/
[Travis CI]: https://travis-ci.org/
[travis-deploy]: https://gist.github.com/razor-x/a76da4b96928986776a966124a078e1d
[UglifyJS]: https://github.com/mishoo/UglifyJS2
[wercker]: http://wercker.com/
[Yaml Front Matter]: https://github.com/dworthen/js-yaml-front-matter

### Bootstrapping a New Project

1. Clone the master branch of this repository with

   ```
   $ git clone --single-branch https://github.com/makenew/deck-bespoke.js.git new-deck-bespoke.js
   $ cd new-deck-bespoke.js
   ```

   Optionally, reset to the latest [release][Releases] with

   ```
   $ git reset --hard deck-bespoke.js-v1.6.2
   ```

2. Run

   ```
   $ ./makenew.sh
   ```

   and follow the prompts.
   This will replace the boilerplate, delete itself,
   and stage changes for commit.
   This script assumes the project repository will be hosted on GitHub.
   For an alternative location, you must update the URLs manually.

3. Fill in the README Description section.

4. If [choosing a license][Choose a license] other than the one provided:
   update `LICENSE.txt`, the README License section, license badge,
   and `package.json` with your chosen license.

5. Add your own favicons from [Favic-o-matic]
   to `app/assets/favicon` and overwrite `app/assets/favicon.ico`.
   You can make a quick [Font Awesome] favicon at [FA2PNG].

6. Further customize the meta data in `app/index.static.hbs`.

7. [Lock your dependencies](#updating-requirements)
   with `npm-shrinkwrap.json`.
   Optionally, lock the Node.js version with `.nvmrc`
   and in `wercker.yml`.

8. Configure [deployment](#deploy-to-github-pages)
   to GitHub pages from wercker and update the wercker badge.

[Choose a license]: http://choosealicense.com/
[FA2PNG]: http://fa2png.io/
[Font Awesome]: https://fortawesome.github.io/Font-Awesome/
[Releases]: https://github.com/makenew/deck-bespoke.js/releases
[The Unlicense]: http://unlicense.org/UNLICENSE

### Updating

If you want to pull in future updates from this skeleton,
you can fetch and merge in changes from this repository.

If this repository is already set as `origin`,
rename it to `upstream` with

```
$ git remote rename origin upstream
```

and then configure your `origin` branch as normal.

Otherwise, add this as a new remote with

```
$ git remote add upstream https://github.com/makenew/deck-bespoke.js.git
```

You can then fetch and merge changes with

```
$ git fetch upstream
$ git merge upstream/master
```

#### Changelog

Note that `CHANGELOG.md` is just a template for this skeleton.
The actual changes for this project are documented in the commit history
and summarized under [Releases].

## Quickstart

```
$ git clone https://github.com/makenew/deck-bespoke.js.git
$ cd deck-bespoke.js
$ npm install
$ npm start
```

## Building and Development

### Source Code

The [makenew-deck-bespoke.js source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/makenew/deck-bespoke.js.git
```

[makenew-deck-bespoke.js source]: https://github.com/makenew/deck-bespoke.js

### Requirements

You will need [Node.js] with [npm].

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/

#### Updating requirements

Requirements are version-locked to ensure consistent deploys.

To use the newest allowed Node packages,
or after updating any package versions in `package.json`,
update and stage `npm-shrinkwrap.json` with

```
$ npm update
$ npm shrinkwrap --dev
$ git add npm-shrinkwrap.json
```

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run-script`.
View them with

```
$ npm run
```

#### Production Build

Lint, test, generate, and optimize the production build to `public` with

```
$ npm run dist
```

#### Deploy to GitHub Pages

Build and deploy to GitHub Pages with

```
$ npm run deploy
```

The following environment variables can be set to customize the deploy:
`DEPLOY_REPO`, `DEPLOY_BRANCH`, `DEPLOY_NAME`, and `DEPLOY_EMAIL`.

##### Deploy from wrecker

Create a new wercker SSH key with the name `DEPLOY`,
add it to a new wercker deploy step,
and add it to the GitHub repository as a deploy key with write access.

#### Brunch

[Brunch] is responsible for the development cycle
and the production build.

Start a local Brunch development server with

```
$ npm start
```

If installed globally, `brunch` may be invoked directly.
View available commands with

```
$ brunch
```

#### gulp

Linting, deployment, and optimization is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint HTML, JavaScript, and Sass files with

```
$ npm run watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[Brunch]: http://brunch.io/
[gulp]: http://gulpjs.com/

## Tips for Deck Makers

### Bespoke.js

The [Bespoke.js GitHub page] covers how to make a deck.

Put slides in `app/partials/slides.static.hbs`, e.g.,

```html
<section>Slide 1</section>
<section>Slide 2</section>
<section>Slide 3</section>
```

[Bespoke.js GitHub page]: https://github.com/bespokejs/bespoke

### Plugins, Themes, and Libraries

- Install plugins, themes, and any other front end dependencies,
  e.g., JavaScript modules, Sass libraries, fonts, etc.,
  with `npm i --save`.
- Use JavaScript modules directly with `import`.
- Bespoke.js is configured in `app/modules/deck.js`.
- The `node_modules` directory exists in the Sass include path
  via the setting in `brunch-config.coffee`.
- Use `app/styles/main.scss` as the entry point for your styles.
- All other assets may be placed under `app/assets`.
- Wrap asset paths referenced in your markup
  with `DIGEST` for cache busting support.

### Meta Data

Meta data is defined in `app/index.static.hbs`.

- Nil values are indicated by a `~`.
  Nil fields never generate a meta tag.
  Fields which are Nil by default are generally optional.
- The `image`, `audio`, and `video` fields must be given
  as a fully qualified url.
  The recommended way to specify this value is with `DIGEST`, e.g.,
  assuming `app/assets/images/logo.png` exists,
  use `image: DIGEST(/images/logo.png)`.
- Instead of the `video` field, you may specify a `youtube` video id.
- The `twitter` fields are used for [Twitter Cards], but you must
  enable them for your domain with Twitter first.

[Twitter Cards]: https://dev.twitter.com/cards/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/makenew/deck-bespoke.js/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

This software can be used freely, see [The Unlicense].
The copyright text appearing below and elsewhere in this repository
is for demonstration purposes only and does not apply to this software.

<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
  <img alt="Creative Commons License"
       src= "https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
       style="border-width:0"></a><br>
<span>deck-bespoke.js</span> by
<a href="https://evansosenko.com/" rel="cc:attributionURL">
  Evan Sosenko
</a>
is licensed under a
<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
  Creative Commons Attribution-ShareAlike 4.0 International License
</a>.<br>
Based on a work at
<a href="https://github.com/makenew/deck-bespoke.js"
   rel="dct:source">
   https://github.com/makenew/deck-bespoke.js
</a>.

Some content may be licensed under other terms where noted.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
