import Axios from '../lib/axios'

class MovieService {
  async search (term) {
    const results = await Axios.base().get('/imdb-search/search', {
      data: {
        'term': term
      }
    })
    return results
  }
}

export default new MovieService()
