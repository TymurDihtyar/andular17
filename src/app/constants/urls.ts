const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`
const posts = `${baseURL}/posts`

const urls = {
  users: {
    base: users,
    byId: (id: number): string => `${users}/${id}`
  },
  posts: {
    base: posts,
    userPostsById: (id: number): string => `${users}/${id}/posts`
  }
}

export {urls}
