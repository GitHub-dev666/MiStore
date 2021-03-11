module.exports = {
  /*开发服务器*/
  devServer: {
    open: true,
    compress: true,
    port: 8080,
    /*设置服务器代理*/
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn",
        pathRewrite: {
            "^/api" : ""
        }
      }
    }
  }
}