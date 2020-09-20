'use strict'
import axios from 'axios'

class ImdbService {
  async search (term) {
    let results
    await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: process.env.IMDB_API_KEY,
            s: term
        }
    }).then((response) => {
        results = response.data
    }).catch((error) => {
        results = error
    })
    return results
  }
}

export default new ImdbService()