export const incrLikes = (id, likes) => {
    console.log('id: ', id, 'likes: ', likes);
  return {
    type: 'INCR_LIKES',
    id,
    likes
  }
}
