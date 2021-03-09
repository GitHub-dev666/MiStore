module.exports = {
  /*开发服务器*/
  devServer: {
    open: true,
    compress: true,
    port: 8080,
    /*设置服务器代理*/
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {
            "^/api" : ""
        }
      }
    }
  }
}