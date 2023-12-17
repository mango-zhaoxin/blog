const getList = (author, keyword) => {
  // 先返回假数据，格式是正确的
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1702803025201,
      author: '小王'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1702803069406,
      author: '小李'
    }
  ]
}

const getDetail = (id) => {
  // 先返回假数据，格式是正确的
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1702803025201,
      author: '小王'
    }
  ]
}

module.exports = {
  getList,
  getDetail
}