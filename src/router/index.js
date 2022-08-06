import VueRouter from 'vue-router'

const PageThreads = () => import('@/pages/PageThreads.vue')
const PageThreadDetail = () => import('@/pages/PageThreadDetail.vue')
const PagePost = () => import('@/pages/PagePost.vue')
const PageAuth = () => import('@/pages/PageAuth.vue')

const threads = require('@/data/thread/threads.json')
const settings = require('@/data/settings.json')

const routes = []

// 对每个帖子添加路由
for (var index in threads) {
  let d = threads[index]
  routes.push({
    path: `/thread/${d.id}`,
    component: PageThreadDetail,
    props: {
      'tags': d.tags,
      'title': d.title,
      'desciption': d.description,
      'thread_id': d.id,
      'evaluation': d.evaluation
    }
  })
}

// 拆分数组
function slice_into_chunks(arr, chunk_size) {
  const res = []
  for (let i = 0; i < arr.length; i += chunk_size) {
    const chunk = arr.slice(i, i + chunk_size)
    res.push(chunk)
  }
  return res
}

// 对每页添加路由
let threads_pages = slice_into_chunks(threads, settings.per_page)
for (var k in threads_pages) {
  k = Number(k)
  let page_elements = threads_pages[k]
  let page = k + 1
  routes.push({
    path: `/threads/page${page}`,
    component: PageThreads,
    props: {
      page_elements, page
    }
  })
  
  // 对 /threads 解析为第一页
  if (page === 1) {
    routes.push({
      path: '/threads',
      component: PageThreads,
      props: {
        page_elements, page
      }
    })
  }
}

// 添加其他路由
let others = [
  ['/post', PagePost],
  ['/auth', PageAuth]
]
for (var i in others) {
  let arr = others[i]
  routes.push({
    path: arr[0],
    component: arr[1]
  })
}

console.log(routes)

export default new VueRouter({ routes })
