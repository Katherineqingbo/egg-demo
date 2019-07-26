'use strict';

const Controller = require('egg').Controller;

class CustomController extends Controller {
  async customIndex() { // 注意这里要定义成异步方法防止请求被阻塞
    // 这里使用await来获取异步方法的返回值,以前是使用回调函数
    let str = await this.ctx.service.customService.show('balabala', 'hh');
    // this.ctx.helper拿到helper这个内置对象也就是进入helper.js这个文件
    this.ctx.body = 'this is my controller-' + str + '-helper-' + this.ctx.helper.show();
  }
}
module.exports = CustomController;
