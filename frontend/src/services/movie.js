import Axios from '../lib/axios'

class MovieService {
  async search (term) {
    const params = {
        term: term
    };
    const results = await Axios.base().get('http://localhost:3005/api/v1/imdb-search/search', { params } )
    return results
  }

  async getMovieById (id) {
    const result = await Axios.base().get('http://localhost:3005/imdb-search/movie', {
      data: {
        'id': id
      }
    })
    return result
  }
}

export default new MovieService()