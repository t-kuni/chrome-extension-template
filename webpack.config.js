const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        popup: './src/Application/popup.js',
        content_script: './src/Application/content_script.js',
    },
    plugins: [
        new CopyPlugin([
            { from: 'src/Application/popup.html' },
        ]),
    ],
};