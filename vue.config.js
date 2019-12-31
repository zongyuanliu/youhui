module.exports = {
    devServer: {
      proxy: {
        '/dang': {
          target: 'http://127.0.0.1:3000',
          ws: true,
          changeOrigin: true
        }
      }
    },
    css:{
      loaderOptions:{
        postcss:{
          plugins:[
            require('postcss-px2rem')({remUnit:37.5}),
          ]
        }
      }
    },
  }