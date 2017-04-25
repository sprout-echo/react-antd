
'use strict';
//有时候我们不想把样式打在脚本中，而是想独立css出来，然后在页面上外链css，这时候我们需要 extract-text-webpack-plugin 来帮忙：我们首先需要安装 extract-text-webpack-plugin
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  //为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
  devtool:'eval-source-map',

  entry:{
    main:'./src/entry.js',  //唯一入口文件
    vendor:['react']   //依赖
  },
  output:{
    path:'./build',   //打包后文件存放的地方
    filename:'main.js',    //打包后输出文件的文件名
    publicPath:'http://localhost:8800/build'     //启动本地服务后的根目录
  },
  module:{
    //文件的加载器
    //url-loader用于在js中加载png/jpg格式的图片文件，css/style loader用于加载css文件，less-loader加载器是将less编译成css文件；
    loaders:[
      { test: /\.js$/, loader: "jsx!babel", include: /src/},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css!postcss")},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass")},
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=819200'}
    ]
  },
  babel:{
    presets:['es2015','stage-0','react'],   //设定转码规则
    //定义需要使用的插件
    plugins:['transform-runtime',['import',{
      libraryName:'antd',
      style:'css'
    }]]
  },
  postcss: [
      require('autoprefixer')    //调用autoprefixer插件,css3自动补全
  ],
  //服务器配置
  devServer:{
    port:8800,
    colors:true,  //终端中输出结果为彩色
    historyApiFallback: true,  //不跳转
    inline: true  //实时刷新
  },
  plugins:[
    new ExtractTextPlugin('main.css'),
     // 提供公共代码  默认会把所有入口节点的公共代码提取出来,生成一个vendor.js
    new CommonsChunkPlugin({
         name: 'vendor',
         filename: 'vendor.js'
      })
  ]
}
