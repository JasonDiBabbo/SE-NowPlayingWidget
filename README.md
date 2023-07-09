# Now Playing Widget

This is a custom implementation of a "Now Playing" widget for use on the [StreamElements](https://streamelements.com) platform. Streamers can use this widget to display information about the songs they're currently listening to for their viewers.

If you're new to the StreamElements platform and/or have any questions about custom widgets, check out [this](https://blog.streamelements.com/how-can-you-become-a-code-guru-87071f223e1b) blog post.

## Using the widget with StreamElements

First, this version of the widget uses Last<span>.fm's</span> Music Discovery API to provide information about user listening history. In order for the widget to function, you will need to provide your own API key. Last<span>.fm</span> provides instructions on how to request one [here](https://www.last.fm/api).

Once you have an API key, enter it into the corresponding parameter field in the widget. You will also need to similarly provide your Last<span>.fm</span> username in one of the parameter fields.

To use the widget on StreamElements, copy the content of the `widget.html|css|js|json` files in the `dist` folder to a custom widget defined in your own custom overlay. Note that there are two different widget.js files: `widget.js` and `widget.min.js`. There is no functional difference between these two files. The main reason I've chosen to include the readable JavaScript is just in case you want to do live changes to the JavaScript file without re-transpiling.

## Building the widget

This widget is built using TypeScript instead of vanilla JavaScript. Because the StreamElements custom widget interface requires the JavaScript to be submitted in a single file, the transpiled code will need to be bundled. This is achieved using [webpack](https://webpack.js.org/).

If you want to fork the project or clone it and make any changes, building is really simple. Make sure you have the latest version of [Node.js](https://nodejs.org/en/) installed and install all of the development packages. The table below describes the different NPM scripts you can use. The NPM scripts execute gulp tasks that can be viewed in the `gulpfile.js` file.

| **Name**      | **Description**                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| `build`       | Transpiles TypeScript code and bundles the widget into `widget.html\|css\|js\|json` files in the `dist` folder.    |
| `build:watch` | Runs the `build` script in watch mode. This will rerun the transpile/bundle process whenever changes are detected. |
| `lint`        | Lints the project to report on best practice patterns in TypeScript code.                                          |

# Contact

If you have questions about this widget or anything about streaming, feel free to drop by my stream or send me a DM on Twitter.

-   [Twitch](https://twitch.tv/monsterabe)
-   [Twitter](https://twitter.com/jasondibabbo)
