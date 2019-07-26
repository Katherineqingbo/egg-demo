'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => { // 获取app中的router对象和controller
  // 这里需要注意的还是约定大于配置（这样获取还是相当于拿到app文件夹下的router和controller）
  const { router, controller } = app; // 自带controller模板的路由（get请求下访问路径为localhost:7001/）controller下的home.js中的index方法
  router.get('/', controller.home.index);
  router.get('/custom', controller.customController.customIndex); // 自定义controller的路由
  router.get('/news', controller.news.list);
};
