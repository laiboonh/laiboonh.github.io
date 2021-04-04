## About

This is based on https://github.com/yewstack/yew-wasm-pack-minimal to build a app to track my investments.

Plan to use local storage as data store

## Usage

### 1) Install `Rust` and `wasm-pack`

Follow the instructions at https://www.rust-lang.org/tools/install and follow the `installation` link at [`wasm-pack`](https://github.com/rustwasm/wasm-pack).

### 2) Build

Enter `wasm-pack build --target web` from your project's root directory.

### 3) [temporary] Bundle

Install rollup `npm install --global rollup`

Enter `rollup ./main.js --format iife --file ./pkg/bundle.js` from your project's root directory.

Note: Until `wasm-pack` [RFC #6](https://github.com/rustwasm/rfcs/blob/master/text/006-local-js-dependencies.md) is implemented there is no available option to [generate a single amalgamated JavaScript file](https://github.com/rustwasm/wasm-pack/issues/699).  In the interim a bundler, such as [`Rollup`](https://rollupjs.org/guide/en/#quick-start), must be used.

### 4) Test Run

Simply visit `https://laiboonh.github.io`

### 5) Deploy

Access your generated build artifacts, `bundle.js` and `laiboonh_bg.wasm`, in ./pkg from your project's root directory.
