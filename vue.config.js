/*
 * @Description: 
 * @Author: Dragon
 * @Date: 2020-12-29 16:20:45
 * @LastEditTime: 2020-12-29 16:26:56
 * @LastEditors: Dragon
 */

'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {

  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: () => { },
  devServer: {
    open: true,
    port: 8088,
    proxy: "",
  },
}