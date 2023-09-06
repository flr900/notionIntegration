const routes = express.Router()


routes.get('/ongs', OngController.index)

module.exports = routes