'use strict';
const Service = require('egg').Service;

class CustomService extends Service {
  async show(ac, hh) {
    return ac + '&' + hh;
  }
}
module.exports = CustomService;
