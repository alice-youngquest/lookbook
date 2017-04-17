// import request from 'superagent'
//
// export const receiveOutfits = (outfits) => {
//   return {
//     type: 'RECEIVE_OUTFITS',
//     outfits: outfits.map(outfit => outfit)
//   }
// }
//
// export function fetchOutfits (temp) {
//   // if temperature undefined GET /outfits
//   // if (temperature) GET /outfits?temp=${temperature}
//   if(temp == undefined) {
//     .get(`http://localhost:3000/v1/outfits`)
//   } else {
//     return (dispatch) => {
//       request
//         .get(`http://localhost:3000/v1/outfits?temp=${temp}`)
//         .end((err, res) => {
//           if (err) {
//             console.error(err.message)
//             return
//           }
//           dispatch(receiveOutfits(res.body))
//         })
//     }
//   }
// }
