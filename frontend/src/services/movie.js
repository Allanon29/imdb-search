import Axios from '../lib/axios'

class MovieService {
  async search (term) {
    const params = {
        term: term
    };
    const results = await Axios.base().get('http://localhost:3005/api/v1/imdb-search/search', { params } )
    return results
  }

  async getMovieWiki (title) {
    const params = {
        title: title
    };
    const result = await Axios.base().get('http://localhost:3005/api/v1/imdb-search/wiki-search', { params })
    return result
  }
}

export default new MovieService()