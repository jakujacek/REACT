module.exports = {
    entry: [//"./js/zadanie00.jsx",
            //"./js/zadanie01.jsx",
            //"./js/zadanie02.jsx",
            //"./js/zadanie03.jsx"
            //"./js/zadanie04.jsx"
            //"./js/zadanie05.jsx"
            "./js/zadanie06.jsx"
          ],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.scss$/,
              loader:  [ "style-loader", "css-loader", "sass-loader" ]
            }
        ]
    }
}
