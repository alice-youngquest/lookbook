export const incLikesAct = (id, likes) => {
  return {
    type: 'INC_LIKES',
    id,
    likes
  }
}
