import request from 'superagent'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    request
      .get(`api.openweathermap.org/data/2.5/weather?id=2179537&APPID=d7379debce2e70976673a060a36c7535
`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(res.body.data.children))
      })
  }
}
