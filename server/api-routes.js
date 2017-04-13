var development = require('./knexfile').development
var db = require('knex')(development)

var router = express.Router()

router.get('/', function (req, res) {
  db.listAllOutfits((err, outfits) => {
    res.json(outfits)
  })
})

export default router
