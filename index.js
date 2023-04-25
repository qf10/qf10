function queryArray(url) {
  const array = []
  const queryArr = url.split('?')[1].split('&')
  queryArr.forEach((item) => {
    array.push(item.split('='))
  })
}
queryArray('https://www.baidu.com/?id=123&page=2&pageSize=20')
