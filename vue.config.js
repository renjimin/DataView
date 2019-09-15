module.exports = {
  //  关闭eslint校验
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/' : '/'
}
