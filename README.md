# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

#添加sass-loader
``` bash
#sass-loader依赖 style-loader 和 css-loader 通过node-sass来完成对sass文件的解析

#安装方法
npm install style-loader css-loader
npm install node-sass
npm install sass-loader

#配置方法: 在webpack.config.js文件中配置
module:{
    loader: [
    {
        test: /\.css$/,
        loader: 'style!css'
    },
    {
        test: /\.css$/,
        loader: 'style,css'
    },
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }
    ]
}
#在主入口文件entry.js或者main.js文件中使用 require("!style!css!sass!./file.scss");require("!style!css!./style.css");
