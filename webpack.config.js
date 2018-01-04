var path = require("path");
var webpack = require("webpack");

module.exports = {
    "entry": {
        "bundle": path.resolve(__dirname, "src", "main.ts"),
    },
    "output": {
        "path": path.resolve(__dirname, "public", "js"),
        "filename": "[name].js"
    },
    "module": {
        "loaders": [
            {
                "test": /\.ts(x)?$/,
                "loaders": ["ts-loader"],
            },
        ]
    },
    "plugins": [],
    "resolve": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
    }
};
