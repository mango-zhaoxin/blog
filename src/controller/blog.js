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

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title, content 属性
  // console.log('newBlog Data', blogData)
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  console.log(id, blogData, 'update ===')
  // id 就是要更新博客的 id
  // blogData 是一个博客对象，包含 title, content 属性
  return true
}

const delBlog = (id) => {
  // id 就是要删除博客的 id
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}