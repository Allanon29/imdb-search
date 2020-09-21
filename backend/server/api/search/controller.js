'use strict'
import ImdbService from '../../services/imdbService'
import WikiService from '../../services/wikiService'
// import ImdbValidator from '../../validators/imdbValidator'

class Controller {
  async search (req, res) {
    let results = await ImdbService.search(req.query.term)
    console.log(results)
    if (results) res.json(results)
    else res.status(404).end()
  }

  async getWiki (req, res) {
    let results = await WikiService.getWiki(req.query.title)
    console.log(results)
    if (results) res.json(results)
    else res.status(404).end()
  }
}
export default new Controller()