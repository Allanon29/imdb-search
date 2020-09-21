'use strict'
import axios from 'axios'

class WikiService {
  async getWiki (title) {
    let results
    await axios.get('https://en.wikipedia.org/w/rest.php/v1/search/page', {
        params: {
            q: title,
            limit: 1
        }
    }).then((response) => {
        results = response.data
    }).catch((error) => {
        results = error
    })
    return results
  }
}

export default new WikiService()