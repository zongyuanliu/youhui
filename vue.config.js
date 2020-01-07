module.exports = {
    devServer: {
      proxy: {
        '/jk': {
          target: 'http://192.168.1.14:3000',
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