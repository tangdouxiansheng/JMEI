module.exports = {
  devServer: {
    proxy: {
      "/JM": {
        "target": "http://s.mobile.jumei.com",
        "changeOrigin": true,
        "pathRewrite": {
          "^/JM": "/"
        }
      },
      "/body": {
        "target": "http://h5.jumei.com",
        "changeOrigin": true,
        "pathRewrite": {
          "^/body": "/"
        }
      },
      "/jm":{ 
        "target":"http://s.h5.jumei.com", 
        "changeOrign":true, 
        "pathRewrite":{ 
        "^/jm":""
        }
      }
    }
  }
};



