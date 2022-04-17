/*
 * @Description: 请求mock数据
 * @Version: 2.0
 * @Autor: 钟奇峰
 * @Date: 2022-04-10 20:18:21
 * @LastEditors: 钟奇峰
 * @LastEditTime: 2022-04-16 10:42:37
 */
import { mock } from 'mockjs'

const data = mock({
  'list|100': [
    {
      goods: '@cname',
      price: 3000
    }
  ]
})

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data
      }
    }
  }
]
