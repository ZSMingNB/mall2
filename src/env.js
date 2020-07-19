let baseURL;
//process的相关文档,获取nodejs当前进程的环境变量
switch (process.env.NODE_ENV) {
    case 'dev':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default{
    baseURL
}