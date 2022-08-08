# gatsby-plugin-substrate

## Setup

1. If this is your firs time installing the plugin as a submodule, please run

`git submodule add https://github.com/paritytech/gatsby-plugin-substrate.git plugins/gatsby-plugin-substrate`

2. Add `"gatsby-plugin-substrate": "./plugins/gatsby-plugin-substrate"` as a dependency in your `package.json`

3. Add the plugin in your `gatsby.config.js`

```js
module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-substrate',
    ...
    ]
}
```

4. run `yarn` to install the local plugin

## Making changes

Once the changes are made and merged, you can update the installed plugin submodule by running the following command

`git submodule update --remote`

### Usage

```js
import { Icon, Link } from "gatsby-plugin-substrate";
```

### How to add a new icon

1. Add the svg file to the svg/raw directory
2. run: yarn
3. run: yarn svg
4. You should now be able to import your svg from "svg/out"

Notes:

- Running the svg script will remove any classes applied directly to the svg
- To add classes to the svg, you can pass the className's as a prop to the SVG React component produced when we run the svg script
