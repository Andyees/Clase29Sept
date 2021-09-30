const HtmlWebpackPlugin =require("html-webpack-plugin")
const loader = require("sass-loader")
module.exports={mode:'production',
entry:'./src/app.js',
output:{
    path:__dirname+"/build",
    filename:"BuilApp.js"
},
devServer:{
    port:4000
},

plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
],

module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [{loader:"style-loader"},
            {loader:"css-loader"},
            {loader:"sass-loader"}
        ],
      },
    ],
  },


}