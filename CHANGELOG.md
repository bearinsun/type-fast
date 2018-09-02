# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to
[Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### ⚙ Internal

-   Remove `registerServiceWorker.js`
-   Remove registerServiceWorker import from `index.js`
-   Remove `registerServiceWorker` function call

### 🐛 Bug Fixes

-   Fix `webpack-dev-server` not serving HTML

## [1.0.1] - 2018-09-01

### ⚙ Internal

-   Remove unused dependencies
-   Output `index.html` to `public` rather than the root `dist` folder.
-   Update `package.json` version to reflect current project version.

## [1.0.0] - 2018-09-01

### 🚀 Features

-   Add favicons for all browsers and platforms
-   Update the web app manifest to launch the website in fullscreen display on
    mobile devices

### ⚙ Internal

-   Replace `react-scripts` dependency with custom Webpack configuration
-   Automatically generate the web app manifeset, along with icons for every
    platform

[unreleased]: https://github.com/bearinsun/type-fast/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/bearinsun/type-fast/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/bearinsun/type-fast/compare/v0.1.0...v1.0.0
