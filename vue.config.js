module.exports = {
    devServer: {
      proxy: {
        '/jk': {
<<<<<<< HEAD
          target: 'http://192.168.1.14:3000',
=======
          target: 'http://192.168.1.9/:3000',
>>>>>>> 5d95c2c2df3acdb505aaf27ce1d795d0e56f062a
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