'use strict'
import ImdbService from '../../services/imdbService'
// import ImdbValidator from '../../validators/imdbValidator'
import _ from 'lodash'

class Controller {
  async search (req, res) {
    let results = await ImdbService.search('kill')
    console.log(results)
    if (results) res.json(results)
    else res.status(404).end()
  }
}
export default new Controller()