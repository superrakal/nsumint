# Ember-cli-emblem-hbs-printer

This is an ember-cli addon that brings support for
[Emblem.js](http://emblemjs.com) templates.

This printer is based on version 0.5.0+ of Emblem. It compiles `.embl`
and `.emblem` templates into Handlebars-syntax templates which will then
be compiled as standard `.hbs` templates by ember-cli.

Consequently, this addon should be compatible with old versions of Ember
regardless of its template dependency, and support newer (HTMLBars)
template compilation in ember-cli.

## Installation

If you are using the `broccoli-emblem-compiler` it should be removed
before using this addon: `npm uninstall --save-dev broccoli-emblem-compiler`.

* `ember install:addon ember-cli-emblem-hbs-printer`


## Ember-CLI support

  * Versions `0.1.x`: supported
  * Versions `0.2.x`: supported

