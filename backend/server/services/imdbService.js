'use strict'

class ImdbService {
  async search (term) {
    let results = {
        "works": "yes"
    }
    return results
  }
}

export default new ImdbService()