'use strict'

// API ROUTES
import imdbRouter from './api/search/router'

export default function routes (app) {
  // API ROUTES
  app.use('/api/v1/imdb-search', imdbRouter)
}