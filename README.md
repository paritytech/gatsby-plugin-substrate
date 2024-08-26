# gatsby-plugin-substrate

## Setup

1. If this is your first time installing the plugin as a submodule, please run

`git submodule add https://github.com/paritytech/gatsby-plugin-substrate.git plugins/gatsby-plugin-substrate`

Otherwise you can run the following command to update the local plugin

`git submodule update --remote` or `git submodule update --init`

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

### Usage

```js
import { Icon, Link } from "gatsby-plugin-substrate";
```

## Troubleshooting

If you encounter any problems when using the plugin, please try the following

1. run `yarn clean` to delete gatsby cache
2. run `rm -rf node_modules` to remove your node modules
3. run `git submodule update --init --recursive`
3. run `git submodule update --remote` to pull the latest version of the plugin
4. run `yarn` to install the plugin

### How to add a new icon

1. Add the svg file to the `svg/raw` directory
2. run `yarn`
3. run `yarn svg`
4. You should now be able to import your svg from `svg/out`

Notes:

- Running the svg script will remove any classes applied directly to the svg
- To add classes to the svg, you can pass the className's as a prop to the SVG React component produced when we run the svg script

e.g

```js
<CloseIcon classNames="fill-current">
```

### How to update plugin
1. Make changes to the plugin within this repo (open PR / merge etc.)
2. Navigate to the substrate website or substrate docs repo
3. Open a new branch
4. Run the following command: `git submodule update --remote` to update to the most recent commit on the plugin.
