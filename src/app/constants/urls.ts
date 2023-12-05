const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`

const urls = {
  users,
  userPostsById: (id: number): string => `${users}/${id}/posts`
}

export {urls}
