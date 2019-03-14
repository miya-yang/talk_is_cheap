const Mock = require('mockjs')

// 用户登录
Mock.mock('?m=user&c=user&a=login', 'post', require('./json/user/login'))
// 用户登出
Mock.mock('?m=user&c=user&a=logout', 'post', require('./json/user/logout'))
// 获取用户详细信息
Mock.mock('?m=user&c=user&a=get_userinfo', 'post', require('./json/user/userinfo'))
