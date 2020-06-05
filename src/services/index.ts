import axios from 'axios'


// 获取商品列表
export function getGoodsList () {
 return   axios.get('/mock/158/airi/index')
  .then(function (response) {
    return Promise.resolve(response)
  })
  .catch(function (error) {
    return Promise.reject(error)
  });
}