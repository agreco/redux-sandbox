
var path = require('path');

require("babel-polyfill");

module.exports = {
    entry: './src/client/js/index.js',
    output: {
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
                },
                plugins: ['syntax-object-rest-spread']
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx'],
            modulesDirectories: [ 'node_modules' ]
        }
    },
    externals: {
        //don't bundle the 'react' npm package with our index.js
        //but get it from a global 'React' variable
        'react': 'React',
        'redux': 'Redux'
    }
};
